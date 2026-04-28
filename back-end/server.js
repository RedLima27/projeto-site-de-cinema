// ============================================================
//  CineDragon — Servidor Node.js / Express
//  Instalar: npm install
//  Iniciar:  node server.js  (ou: npm start)
// ============================================================

const express    = require('express');
const mysql      = require('mysql2/promise');
const cors       = require('cors');
const crypto     = require('crypto');
const path       = require('path');
require('dotenv').config();

const app  = express();
const PORT = process.env.PORT || 3000;

// ── Middlewares ──────────────────────────────────────────────
app.use(cors({ origin: process.env.ALLOWED_ORIGIN || '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..'))); // serve o front-end

// ── Pool de conexões MySQL ───────────────────────────────────
const db = mysql.createPool({
  host:     process.env.DB_HOST     || 'localhost',
  port:     process.env.DB_PORT     || 3306,
  user:     process.env.DB_USER     || 'root',
  password: process.env.DB_PASS     || '',
  database: process.env.DB_NAME     || 'cinedragon',
  waitForConnections: true,
  connectionLimit:    10,
});

// ── Utilitários ──────────────────────────────────────────────
const hashCPF = (cpf) =>
  crypto.createHash('sha256').update(cpf.replace(/\D/g, '')).digest('hex');

const calcAge = (dob) => {
  const [y, m, d] = dob.split('-').map(Number);
  const today = new Date();
  let age = today.getFullYear() - y;
  if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) age--;
  return age;
};

const genCode = (prefix) =>
  prefix + '-' + Date.now().toString(36).toUpperCase().slice(-4)
  + '-' + Math.random().toString(36).slice(2, 6).toUpperCase();

// ============================================================
//  ROTAS — FILMES
// ============================================================

// GET /api/films — filmes em cartaz
app.get('/api/films', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM films WHERE is_active = 1 ORDER BY id'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/films/soon — filmes em breve
app.get('/api/films/soon', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM soon_films ORDER BY release_date ASC'
    );
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/films/:id — detalhe de um filme
app.get('/api/films/:id', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT * FROM films WHERE id = ? AND is_active = 1',
      [req.params.id]
    );
    if (!rows.length) return res.status(404).json({ error: 'Filme não encontrado.' });
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
//  ROTAS — SESSÕES
// ============================================================

// GET /api/sessions?filmId=1&date=2026-04-28
app.get('/api/sessions', async (req, res) => {
  try {
    const { filmId, date } = req.query;
    let sql = `
      SELECT s.*, f.title AS film_title, f.min_age, f.rating
      FROM sessions s
      JOIN films f ON f.id = s.film_id
      WHERE s.is_active = 1`;
    const params = [];
    if (filmId) { sql += ' AND s.film_id = ?'; params.push(filmId); }
    if (date)   { sql += ' AND s.date = ?';    params.push(date); }
    else         { sql += ' AND s.date = CURDATE()'; }
    sql += ' ORDER BY s.start_time';
    const [rows] = await db.query(sql, params);
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// GET /api/sessions/:id/seats — assentos ocupados de uma sessão
app.get('/api/sessions/:id/seats', async (req, res) => {
  try {
    const [rows] = await db.query(
      'SELECT seat_code FROM booked_seats WHERE session_id = ?',
      [req.params.id]
    );
    res.json(rows.map(r => r.seat_code));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
//  ROTAS — VERIFICAÇÃO DE IDADE
// ============================================================

// POST /api/age-verify
// Body: { filmId, cpf, dob }
app.post('/api/age-verify', async (req, res) => {
  try {
    const { filmId, cpf, dob } = req.body;

    if (!filmId || !cpf || !dob)
      return res.status(400).json({ ok: false, error: 'Campos obrigatórios: filmId, cpf, dob.' });

    // Busca o filme
    const [films] = await db.query(
      'SELECT id, title, min_age, rating FROM films WHERE id = ? AND is_active = 1',
      [filmId]
    );
    if (!films.length)
      return res.status(404).json({ ok: false, error: 'Filme não encontrado.' });

    const film   = films[0];
    const age    = calcAge(dob);
    const minBuy = Math.max(film.min_age, 16); // mínimo absoluto de compra

    let result, message;

    if (age < 16) {
      result  = 'blocked';
      message = `Compra bloqueada. Idade mínima para comprar ingressos é 16 anos (você tem ${age} anos).`;
    } else if (film.min_age > 0 && age < film.min_age) {
      result  = 'blocked';
      message = `Compra bloqueada. "${film.title}" é classificado ${film.rating} anos (você tem ${age} anos).`;
    } else {
      result  = 'approved';
      message = film.min_age === 0
        ? `Acesso liberado. Filme livre para todas as idades.`
        : `Acesso liberado. Você tem ${age} anos — acima da classificação ${film.rating} anos.`;
    }

    // Salva verificação no banco (CPF hasheado — LGPD)
    await db.query(
      `INSERT INTO age_verifications (film_id, cpf_hash, age_years, dob, result)
       VALUES (?, ?, ?, ?, ?)`,
      [filmId, hashCPF(cpf), age, dob, result]
    );

    res.json({ ok: result === 'approved', result, message, age, filmTitle: film.title });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
//  ROTAS — INGRESSOS
// ============================================================

// POST /api/tickets
// Body: { filmId, sessionId, buyerName, cpf, email, seats, seatTypes, category, paymentMethod }
app.post('/api/tickets', async (req, res) => {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();

    const { filmId, sessionId, buyerName, cpf, email, seats, seatTypes, category, paymentMethod } = req.body;

    if (!filmId || !sessionId || !buyerName || !cpf || !email || !seats?.length)
      return res.status(400).json({ error: 'Dados incompletos.' });

    // Verificar sessão e filme
    const [[session]] = await conn.query(
      'SELECT s.*, f.min_age FROM sessions s JOIN films f ON f.id=s.film_id WHERE s.id=?',
      [sessionId]
    );
    if (!session) throw new Error('Sessão não encontrada.');

    // Verificar se assentos já estão ocupados
    const placeholders = seats.map(() => '?').join(',');
    const [already] = await conn.query(
      `SELECT seat_code FROM booked_seats WHERE session_id=? AND seat_code IN (${placeholders})`,
      [sessionId, ...seats]
    );
    if (already.length)
      throw new Error(`Poltronas já ocupadas: ${already.map(r => r.seat_code).join(', ')}`);

    // Calcular preço
    const priceMap = { comum: 28, vip: 38, imax: 46 };
    const meiaPrice = Math.round(priceMap[category || 'comum'] / 2);
    const basePrice = priceMap[category || 'comum'];
    let total = 0;
    const itemPrices = seats.map(seat => {
      const type = seatTypes?.[seat] || 'inteira';
      const price = type === 'inteira' ? basePrice : meiaPrice;
      total += price;
      return { seat, type, price };
    });

    // Upsert comprador
    const cpfHash = hashCPF(cpf);
    await conn.query(
      `INSERT INTO buyers (full_name, cpf_hash, email)
       VALUES (?, ?, ?)
       ON DUPLICATE KEY UPDATE full_name=VALUES(full_name), email=VALUES(email)`,
      [buyerName, cpfHash, email]
    );
    const [[buyer]] = await conn.query('SELECT id FROM buyers WHERE cpf_hash=?', [cpfHash]);

    // Criar ingresso
    const ticketCode = genCode('CD');
    const foodCode   = genCode('BP');
    const [tktResult] = await conn.query(
      `INSERT INTO tickets (ticket_code, buyer_id, session_id, category, seat_codes, total_price, payment_method, status, food_code)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'paid', ?)`,
      [ticketCode, buyer.id, sessionId, category || 'comum', seats.join(', '), total, paymentMethod || 'pix', foodCode]
    );
    const ticketId = tktResult.insertId;

    // Inserir itens do ingresso
    for (const item of itemPrices) {
      await conn.query(
        'INSERT INTO ticket_items (ticket_id, seat_code, entry_type, unit_price) VALUES (?, ?, ?, ?)',
        [ticketId, item.seat, item.type, item.price]
      );
    }

    // Marcar assentos como ocupados
    for (const seat of seats) {
      await conn.query(
        'INSERT INTO booked_seats (session_id, seat_code, ticket_id) VALUES (?, ?, ?)',
        [sessionId, seat, ticketId]
      );
    }

    await conn.commit();

    res.json({
      ok: true,
      ticketCode,
      foodCode,
      totalPrice: total,
      seats,
      itemPrices,
    });
  } catch (e) {
    await conn.rollback();
    res.status(400).json({ ok: false, error: e.message });
  } finally {
    conn.release();
  }
});

// GET /api/tickets/:code — consultar ingresso por código
app.get('/api/tickets/:code', async (req, res) => {
  try {
    const [rows] = await db.query(
      `SELECT t.*, b.full_name, b.email,
              f.title AS film_title, f.emoji,
              s.start_time, s.category AS room_category, s.room, s.date AS session_date
       FROM tickets t
       JOIN buyers  b ON b.id = t.buyer_id
       JOIN sessions s ON s.id = t.session_id
       JOIN films   f ON f.id = s.film_id
       WHERE t.ticket_code = ?`,
      [req.params.code]
    );
    if (!rows.length) return res.status(404).json({ error: 'Ingresso não encontrado.' });
    const [items] = await db.query(
      'SELECT seat_code, entry_type, unit_price FROM ticket_items WHERE ticket_id = ?',
      [rows[0].id]
    );
    res.json({ ...rows[0], items });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ============================================================
//  ROTAS — BOMBONIERE
// ============================================================

// POST /api/snacks
// Body: { buyerName, cpf, items: [{name, qty, unitPrice}], paymentMethod }
app.post('/api/snacks', async (req, res) => {
  const conn = await db.getConnection();
  try {
    await conn.beginTransaction();
    const { buyerName, cpf, items, paymentMethod } = req.body;
    if (!buyerName || !cpf || !items?.length)
      return res.status(400).json({ error: 'Dados incompletos.' });

    const total = items.reduce((s, i) => s + i.unitPrice * i.qty, 0);
    const orderCode = genCode('BP');

    const [result] = await conn.query(
      `INSERT INTO snack_orders (order_code, buyer_name, cpf_hash, total_price, payment_method, status)
       VALUES (?, ?, ?, ?, ?, 'paid')`,
      [orderCode, buyerName, hashCPF(cpf), total, paymentMethod || 'pix']
    );
    const orderId = result.insertId;

    for (const item of items) {
      await conn.query(
        'INSERT INTO snack_order_items (order_id, snack_name, quantity, unit_price) VALUES (?, ?, ?, ?)',
        [orderId, item.name, item.qty, item.unitPrice]
      );
    }

    await conn.commit();
    res.json({ ok: true, orderCode, totalPrice: total });
  } catch (e) {
    await conn.rollback();
    res.status(400).json({ ok: false, error: e.message });
  } finally {
    conn.release();
  }
});

// ============================================================
//  ROTA — HEALTH CHECK
// ============================================================
app.get('/api/health', async (req, res) => {
  try {
    await db.query('SELECT 1');
    res.json({ ok: true, db: 'connected', time: new Date().toISOString() });
  } catch (e) {
    res.status(503).json({ ok: false, db: 'error', error: e.message });
  }
});

// ── Inicialização ────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`✅  CineDragon API rodando em http://localhost:${PORT}`);
  console.log(`📋  Health: http://localhost:${PORT}/api/health`);
});