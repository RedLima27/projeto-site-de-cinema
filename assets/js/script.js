/* ── DATA ── */
const FILMS = [
  {id: 1, title: "Michael", genre: "Biopic / Musical", rating: "12", minAge: 12, emoji: "🎤", dur: "2h 08min", year: 2026,
   dir: "Antoine Fuqua", cast: "Jaafar Jackson, Colman Domingo, Nia Long, Miles Teller",
   desc: "A cinebiografia definitiva do Rei do Pop. O filme acompanha a trajetória de Michael Jackson desde sua infância em Gary, Indiana, passando pelo sucesso dos Jackson 5 nos anos 70, até se tornar o maior artista pop do mundo nos anos 80. Interpretado pelo sobrinho real Jaafar Jackson.",
   img: "https://image.tmdb.org/t/p/w500/qjW3YMJEZJ9JjlQSBV2OlkB6JeK.jpg"},
  {id: 2, title: "Super Mario Galaxy: O Filme", genre: "Animação / Aventura", rating: "L", minAge: 0, emoji: "🍄", dur: "1h 39min", year: 2026,
   dir: "Aaron Horvath, Michael Jelenic", cast: "Chris Pratt, Anya Taylor-Joy, Charlie Day",
   desc: "Mario e seus aliados embarcam em uma aventura galáctica após salvar o Reino dos Cogumelos. Cheio de ação e emoção para toda a família, o filme expande o universo do encanador mais famoso do mundo até as estrelas.",
   img: "https://image.tmdb.org/t/p/w500/co6gLCTzfEVe0R0G2qCHDHCzGqv.jpg"},
  {id: 3, title: "O Diabo Veste Prada 2", genre: "Comédia / Drama", rating: "12", minAge: 12, emoji: "👠", dur: "2h 05min", year: 2026,
   dir: "David Frankel", cast: "Meryl Streep, Anne Hathaway, Emily Blunt",
   desc: "Miranda Priestly e Andy Sachs retornam em uma nova era da moda digital. Com as redes sociais transformando a indústria, a editora da Runway precisa se reinventar enquanto enfrenta uma rivalidade inesperada. Meryl Streep está mais deslumbrante do que nunca.",
   img: "https://image.tmdb.org/t/p/w500/kc2r6RBhMWFYaVOT4yMPY0j8VxH.jpg"},
  {id: 4, title: "Exit 8", genre: "Terror / Suspense", rating: "16", minAge: 16, emoji: "🚇", dur: "1h 45min", year: 2026,
   dir: "Genki Kawamura", cast: "Kazunari Ninomiya, Yamato Kôchi",
   desc: "Adaptação do viral jogo de terror japonês. Um homem fica preso em um corredor de metrô infinito e precisa encontrar a saída, mas a cada tentativa algo muda sutilmente. Um pesadelo psicológico que desafia percepção e sanidade.",
   img: "https://image.tmdb.org/t/p/w500/6vn0tWXUiKXQGPMuMMBNQnXzn4W.jpg"},
  {id: 5, title: "Hokum: O Pesadelo da Bruxa", genre: "Terror", rating: "16", minAge: 16, emoji: "🔮", dur: "1h 52min", year: 2026,
   dir: "Damian McCarthy", cast: "Adam Scott, David Wilmot, Austin Amelio",
   desc: "Uma família se muda para uma casa aparentemente perfeita, mas algo sinistro os observa. Uma bruxa adormecida por séculos acorda com a chegada dos novos moradores. Terror psicológico e sobrenatural em dose dupla.",
   img: "https://image.tmdb.org/t/p/w500/4XM8DUTQb3lhLemJC51Jx4a2EuA.jpg"},
  {id: 6, title: "Vidas Entrelaçadas", genre: "Drama", rating: "14", minAge: 14, emoji: "💫", dur: "1h 58min", year: 2026,
   dir: "Alice Winocour", cast: "Angelina Jolie, Ella Rumpf, Anyier Anei",
   desc: "Três mulheres em continentes diferentes têm suas histórias misteriosamente ligadas por um evento. Angelina Jolie entrega uma de suas melhores performances neste drama poderoso sobre resiliência, perda e conexões humanas que transcendem fronteiras.",
   img: "https://image.tmdb.org/t/p/w500/sOLHDPJoTnOqrKdFzX4i79BPXJZ.jpg"},
];
const SOON = [
  {title: "Mestres do Universo", genre: "Ação", emoji: "⚔️", date: "04/06/2026", desc: "He-Man em live action com Nicholas Galitzine, Idris Elba e Jared Leto como Esqueleto."},
  {title: "Se Eu Fosse Você 3", genre: "Comédia", emoji: "🔄", date: "04/06/2026", desc: "Tony Ramos, Gloria Pires e a família toda trocam de corpo nesta comédia brasileira."},
  {title: "Dia D", genre: "Ficção Científica", emoji: "🌍", date: "11/06/2026", desc: "Novo Spielberg com Emily Blunt e trilha de John Williams."},
  {title: "Supergirl", genre: "Super-Herói", emoji: "🦸‍♀️", date: "25/06/2026", desc: "A prima de Superman e sua origem sombria antes de chegar à Terra."},
  {title: "Toy Story 5", genre: "Animação", emoji: "🤠", date: "09/07/2026", desc: "Os brinquedos em polvorosa quando Bonnie ganha um tablet."},
  {title: "A Odisseia", genre: "Épico", emoji: "🌊", date: "16/07/2026", desc: "Christopher Nolan adapta Homero em jornada épica com elenco estrelado."},
  {title: "Vingadores: Doutor Destino", genre: "Super-Herói", emoji: "🦾", date: "17/12/2026", desc: "Robert Downey Jr. como Doutor Destino. X-Men, Quarteto Fantástico e Vingadores."},
  {title: "Duna: Parte 3", genre: "Ficção Científica", emoji: "🏜️", date: "17/12/2026", desc: "Denis Villeneuve encerra a saga com Timothée Chalamet e Robert Pattinson."},
];
const SNACKS = [
  {id: 1, emoji: "🍿", name: "Pipoca Doce G", desc: "Manteiga caramelada", price: 18},
  {id: 2, emoji: "🍿", name: "Pipoca Salgada G", desc: "Manteiga clássica", price: 18},
  {id: 3, emoji: "🥤", name: "Refrigerante 500ml", desc: "Coca, Guaraná ou Pepsi", price: 14},
  {id: 4, emoji: "🧃", name: "Suco Natural", desc: "Laranja, Uva ou Maracujá", price: 16},
  {id: 5, emoji: "🍫", name: "Chocolate / Candy", desc: "Kit Kat, M&Ms", price: 12},
  {id: 6, emoji: "🌭", name: "Cachorro-Quente", desc: "Com ketchup e mostarda", price: 22},
  {id: 7, emoji: "🍕", name: "Fatia de Pizza", desc: "Quatro Queijos", price: 24},
  {id: 8, emoji: "🎉", name: "Combo Pipoca + Refri", desc: "Pipoca G + Refri 500ml", price: 28},
];

/* ── STATE ── */
let cart = {};
let payTarget = null;
let payMethod = null;
let promoState = null;

/* ── MASKS ── */
function maskCPF(el) {
  let v = el.value.replace(/\D/g, '');
  if (v.length > 3) v = v.slice(0, 3) + '.' + v.slice(3);
  if (v.length > 7) v = v.slice(0, 7) + '.' + v.slice(7);
  if (v.length > 11) v = v.slice(0, 11) + '-' + v.slice(11);
  el.value = v.slice(0, 14);
}
function maskCard(el) {
  let v = el.value.replace(/\D/g, '');
  v = (v.match(/.{1,4}/g) || []).join(' ');
  el.value = v.slice(0, 19);
}
function maskExp(el) {
  let v = el.value.replace(/\D/g, '');
  if (v.length > 2) v = v.slice(0, 2) + '/' + v.slice(2);
  el.value = v.slice(0, 5);
}

/* ── UTILS ── */
function validCPF(c) {
  c = c.replace(/\D/g, '');
  if (c.length !== 11 || /^(\d)\1+$/.test(c)) return false;
  let s = 0;
  for (let i = 0; i < 9; i++) s += +c[i] * (10 - i);
  let r = 11 - (s % 11);
  if (r >= 10) r = 0;
  if (r !== +c[9]) return false;
  s = 0;
  for (let i = 0; i < 10; i++) s += +c[i] * (11 - i);
  r = 11 - (s % 11);
  if (r >= 10) r = 0;
  return r === +c[10];
}
function ageFromCPF(c) {
  c = c.replace(/\D/g, '');
  return (parseInt(c.slice(0, 4)) % 55) + 7;
}
function validStu(id) {
  if (!id || id.trim().length < 5) return false;
  return id.includes('2026') || id.toUpperCase().startsWith('ID-') || /^[A-Z]{2}\d{4,}/.test(id.toUpperCase());
}
function genCode(p) {
  const ch = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let s = '';
  for (let i = 0; i < 8; i++) s += ch[Math.random() * ch.length | 0];
  return p + '-' + s.slice(0, 4) + '-' + s.slice(4);
}
function al(id, type, title, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = 'al show al-' + type;
  const t = document.getElementById(id + '-t');
  const m = document.getElementById(id + '-m');
  if (t) t.textContent = title;
  if (m) m.textContent = msg;
}
function hal(id) {
  const el = document.getElementById(id);
  if (el) el.className = 'al';
}
function isPromo() {
  const n = new Date();
  const t = n.getHours() * 60 + n.getMinutes();
  return t >= 720 && t < 1020;
}

/* ── CLOCK ── */
function tickClock() {
  const now = new Date();
  document.getElementById('hero-clock').textContent = '⏰ Agora: ' + now.toLocaleTimeString('pt-BR');
  document.getElementById('nav-time').textContent = now.toLocaleTimeString('pt-BR').slice(0, 5);
  const pr = isPromo();
  if (pr !== promoState) {
    promoState = pr;
    document.getElementById('nav-dot').className = pr ? 'dot on' : 'dot';
    const b = document.getElementById('promo-badge');
    if (b) {
      if (pr) { b.className = 'pb-badge on'; b.textContent = 'ATIVA'; }
      else { b.className = 'pb-badge off'; b.textContent = now.getHours() < 12 ? '12h–17h' : 'Encerrada'; }
    }
  }
  if (document.getElementById('b-film')?.value) {
    document.getElementById('price-preview').style.display = 'flex';
    document.getElementById('price-est').textContent = 'R$ ' + calcPrice().toFixed(2).replace('.', ',');
  }
}

/* ── NAVIGATION ── */
function go(name) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.ntab').forEach(t => t.classList.remove('on'));
  document.getElementById('pg-' + name).classList.add('on');
  document.querySelectorAll('.ntab')[{home:0,soon:1,buy:2,snacks:3}[name]].classList.add('on');
  window.scrollTo({top: 0, behavior: 'smooth'});
}

/* ── FILM GRID ── */
function renderFilms() {
  const grid = document.getElementById('film-grid');
  const sel = document.getElementById('b-film');
  const pr = isPromo();
  FILMS.forEach((f, i) => {
    const div = document.createElement('div');
    div.className = 'fcard';
    div.id = 'fc-' + f.id;
    div.style.animationDelay = (i * .05) + 's';
    div.innerHTML = `
      <div class="fposter">
        <img src="${f.img}" alt="${f.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div class="fposter-fb" style="display:none">${f.emoji}</div>
        <div class="frating r${f.rating}">${f.rating === 'L' ? 'LIVRE' : f.rating + '+'}</div>
      </div>
      <div class="finfo">
        <div class="ftitle">${f.title}</div>
        <div class="fgenre">${f.genre}</div>
        <div class="fprice-row">
          <span class="fprice${pr ? ' pr' : ''}">R$ ${pr ? '12,00' : '28,00'}${pr ? ' 🌟' : ''}</span>
          <span class="fdur">${f.dur}</span>
        </div>
      </div>
    `;
    div.onclick = () => openFModal(f.id);
    grid.appendChild(div);
    const opt = document.createElement('option');
    opt.value = f.id;
    opt.textContent = `${f.emoji} ${f.title} (${f.rating === 'L' ? 'Livre' : f.rating + ' anos'})`;
    sel.appendChild(opt);
  });
  document.getElementById('film-count').textContent = FILMS.length + ' filmes';
}

/* ── FILM MODAL ── */
function openFModal(id) {
  const f = FILMS.find(x => x.id === id);
  const pr = isPromo();
  const img = document.getElementById('fm-img');
  img.src = f.img;
  img.style.display = 'block';
  const fb = document.getElementById('fm-fb');
  fb.textContent = f.emoji;
  fb.style.display = 'none';
  document.getElementById('fm-title').textContent = f.title;
  document.getElementById('fm-meta').innerHTML = `
    <span class="frating r${f.rating}" style="position:static;display:inline-block;margin-bottom:4px">${f.rating === 'L' ? 'LIVRE' : f.rating + ' anos'}</span><br>
    🎬 ${f.dir}<br>
    ⏱ ${f.dur} · ${f.year}<br>
    <strong style="color:var(--gold)">R$ ${pr ? '12,00' : '28,00'}${pr ? ' <span style="color:var(--green)">🌟 PROMO</span>' : ''}</strong>
  `;
  document.getElementById('fm-desc').textContent = f.desc;
  document.getElementById('fm-cast').innerHTML = '<strong>Elenco:</strong> ' + f.cast;
  document.getElementById('fm-buy-btn').onclick = () => { closeFModal(); document.getElementById('b-film').value = id; onFilmChange(); go('buy'); };
  document.getElementById('film-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closeFModal(e) {
  if (e && e.target !== document.getElementById('film-modal')) return;
  document.getElementById('film-modal').classList.remove('on');
  document.body.style.overflow = '';
}

/* ── SOON ── */
function renderSoon() {
  const list = document.getElementById('soon-list');
  SOON.forEach(s => {
    const [d, m, y] = s.date.split('/').map(Number);
    const dt = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((dt - today) / 864e5);
    const cd = diff < 0 ? 'Em cartaz' : diff === 0 ? 'Hoje!' : diff === 1 ? 'Amanhã!' : diff + ' dias';
    list.innerHTML += `
      <div class="scard">
        <div class="scard-ico">${s.emoji}</div>
        <div class="scard-info">
          <div class="scard-title">${s.title}</div>
          <div class="scard-genre">${s.genre}</div>
          <div class="scard-desc">${s.desc}</div>
        </div>
        <div class="scard-right">
          <div class="scard-date">📅 ${s.date}</div>
          <div class="scard-cd">⏳ ${cd}</div>
        </div>
      </div>
    `;
  });
}

/* ── SNACKS ── */
function renderSnacks() {
  const grid = document.getElementById('snack-grid');
  SNACKS.forEach(s => {
    const card = document.createElement('div');
    card.className = 'skcard';
    card.id = 'sk-' + s.id;
    card.innerHTML = `
      <div class="sk-img">${s.emoji}</div>
      <div class="sk-body">
        <div class="sk-name">${s.name}</div>
        <div class="sk-desc">${s.desc}</div>
        <div class="sk-price">R$ ${s.price.toFixed(2)}</div>
        <div class="sk-ctrl">
          <button class="qb" onclick="chg(${s.id},-1)">−</button>
          <span class="qv" id="qv-${s.id}">0</span>
          <button class="qb" onclick="chg(${s.id},1)">+</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}
function chg(id, d) {
  cart[id] = (cart[id] || 0) + d;
  if (cart[id] < 0) cart[id] = 0;
  document.getElementById('qv-' + id).textContent = cart[id];
  document.getElementById('sk-' + id).classList.toggle('sel', cart[id] > 0);
  updateCart();
}
function updateCart() {
  const act = SNACKS.filter(s => cart[s.id] > 0);
  const ce = document.getElementById('cart-empty');
  const ci = document.getElementById('cart-items');
  const ct = document.getElementById('cart-total');
  const tv = document.getElementById('cart-total-v');
  const cc = document.getElementById('cart-count');
  if (!act.length) {
    ce.style.display = 'block';
    ci.style.display = 'none';
    ct.style.display = 'none';
    cc.textContent = '';
    return;
  }
  let sum = 0;
  let html = '';
  act.forEach(s => {
    const sub = cart[s.id] * s.price;
    sum += sub;
    html += `<div class="citem"><span class="citem-n">${s.emoji} ${s.name} ×${cart[s.id]}</span><span>R$ ${sub.toFixed(2)}</span></div>`;
  });
  ce.style.display = 'none';
  ci.style.display = 'block';
  ci.innerHTML = html;
  ct.style.display = 'flex';
  tv.textContent = 'R$ ' + sum.toFixed(2);
  const tot = act.reduce((a, s) => a + cart[s.id], 0);
  cc.textContent = tot + (tot === 1 ? ' item' : ' itens');
}

/* ── FORM HELPERS ── */
function toggleStudent() {
  document.getElementById('student-box').style.display = document.getElementById('b-student').checked ? 'block' : 'none';
}
function onFilmChange() {
  document.getElementById('price-preview').style.display = 'flex';
  refreshEstimate();
}
function calcPrice() {
  const pr = isPromo();
  const isStu = document.getElementById('b-student').checked;
  const cpf = document.getElementById('b-cpf').value;
  const seat = document.getElementById('b-seat').value;
  const extra = seat === 'vip' ? 10 : seat === 'imax' ? 18 : 0;
  let base = 28;
  if (pr) base = 12;
  else if (isStu) base = 14;
  else if (validCPF(cpf) && ageFromCPF(cpf) >= 60) base = 14;
  return base + extra;
}
function refreshEstimate() {
  if (!document.getElementById('b-film').value) return;
  document.getElementById('price-preview').style.display = 'flex';
  document.getElementById('price-est').textContent = 'R$ ' + calcPrice().toFixed(2).replace('.', ',');
}

/* ── VALIDATE ── */
function validateTicketForm() {
  const filmId = parseInt(document.getElementById('b-film').value);
  const sess = document.getElementById('b-session').value;
  const nm = document.getElementById('b-name').value.trim();
  const cpf = document.getElementById('b-cpf').value;
  const em = document.getElementById('b-email').value.trim();
  const isStu = document.getElementById('b-student').checked;
  const sid = document.getElementById('b-sid')?.value || '';
  if (!filmId) return ['warn', 'Selecione um filme', 'Escolha o filme desejado.'];
  if (!sess) return ['warn', 'Selecione um horário', 'Escolha o horário da sessão.'];
  if (!nm) return ['warn', 'Nome obrigatório', 'Informe seu nome completo.'];
  if (!em || !em.includes('@')) return ['warn', 'Email inválido', 'Informe um email válido.'];
  if (!validCPF(cpf)) return ['err', 'CPF inválido', 'O CPF informado não é válido. Verifique os dígitos e tente novamente.'];
  const f = FILMS.find(x => x.id === filmId);
  const age = ageFromCPF(cpf);
  if (f.minAge > 0 && age < f.minAge) return ['err', `🔞 Classificação ${f.rating} anos`, `CPF indica ${age} anos. Este filme exige ${f.minAge}+ anos.`];
  if (isStu && !validStu(sid)) return ['err', 'Carteira inválida', 'Informe número válido, ex: ID-2026-123456.'];
  return null;
}

/* ── PAYMENT ── */
function openPay(target) {
  hal('buy-al');
  hal('sk-al');
  if (target === 'ticket') {
    const err = validateTicketForm();
    if (err) { al('buy-al', ...err); return; }
    document.getElementById('pay-total-v').textContent = 'R$ ' + calcPrice().toFixed(2);
    document.getElementById('pay-sub').textContent = 'Ingresso · ' + document.getElementById('b-session').value;
  } else {
    const nm = document.getElementById('sk-name').value.trim();
    const cpf = document.getElementById('sk-cpf').value;
    const act = SNACKS.filter(s => cart[s.id] > 0);
    if (!nm) return al('sk-al', 'warn', 'Nome obrigatório', 'Informe seu nome para retirada.');
    if (!validCPF(cpf)) return al('sk-al', 'err', 'CPF inválido', 'Verifique o CPF e tente novamente.');
    if (!act.length) return al('sk-al', 'warn', 'Carrinho vazio', 'Adicione pelo menos um item.');
    const sum = act.reduce((a, s) => a + cart[s.id] * s.price, 0);
    document.getElementById('pay-total-v').textContent = 'R$ ' + sum.toFixed(2);
    document.getElementById('pay-sub').textContent = 'Bomboniere · ' + act.length + (act.length === 1 ? ' item' : ' itens');
  }
  payTarget = target;
  payMethod = null;
  document.querySelectorAll('.pm').forEach(p => p.classList.remove('sel'));
  document.getElementById('qr-zone').classList.remove('on');
  document.getElementById('card-zone').classList.remove('on');
  document.getElementById('pay-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}
function closePay() {
  document.getElementById('pay-modal').classList.remove('on');
  document.body.style.overflow = '';
}
function selPM(m) {
  payMethod = m;
  ['pix', 'credit', 'debit'].forEach(k => document.getElementById('pm-' + k).classList.toggle('sel', k === m));
  document.getElementById('qr-zone').classList.toggle('on', m === 'pix');
  document.getElementById('card-zone').classList.toggle('on', m !== 'pix');
  if (m === 'pix') buildQR();
}
function buildQR() {
  const w = document.getElementById('qr-wrap');
  const n = 21;
  const s = Math.floor(160 / n);
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${n * s}" height="${n * s}" viewBox="0 0 ${n} ${n}"><rect width="${n}" height="${n}" fill="white"/>`;
  [[0, 0], [n - 7, 0], [0, n - 7]].forEach(([cx, cy]) => {
    svg += `<rect x="${cx}" y="${cy}" width="7" height="7" fill="black"/><rect x="${cx + 1}" y="${cy + 1}" width="5" height="5" fill="white"/><rect x="${cx + 2}" y="${cy + 2}" width="3" height="3" fill="black"/>`;
  });
  let rng = 0xdeadbeef;
  const nx = rng => (rng = (rng * 1664525 + 1013904223) & 0xffffffff, rng >>> 0);
  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      const inF = (x < 9 && y < 9) || (x > n - 8 && y < 9) || (x < 9 && y > n - 8);
      if (!inF) { rng = nx(rng); if (rng % 3 > 0) svg += `<rect x="${x}" y="${y}" width="1" height="1" fill="black"/>`; }
    }
  }
  svg += '</svg>';
  w.innerHTML = svg;
}
function confirmPay() {
  if (!payMethod) return alert('Selecione uma forma de pagamento.');
  if (payMethod !== 'pix') {
    const num = document.getElementById('cc-num').value.replace(/\s/g, '');
    const exp = document.getElementById('cc-exp').value;
    const cvv = document.getElementById('cc-cvv').value;
    const nm = document.getElementById('cc-nm').value.trim();
    if (num.length < 16 || exp.length < 5 || cvv.length < 3 || !nm) return alert('Preencha todos os dados do cartão.');
  }
  closePay();
  if (payTarget === 'ticket') doTicket(); else doSnack();
}

/* ── GENERATE TICKET ── */
function doTicket() {
  const filmId = parseInt(document.getElementById('b-film').value);
  const sess = document.getElementById('b-session').value;
  const seat = document.getElementById('b-seat').value;
  const nm = document.getElementById('b-name').value.trim();
  const email = document.getElementById('b-email').value.trim();
  const cpf = document.getElementById('b-cpf').value;
  const isStu = document.getElementById('b-student').checked;
  const f = FILMS.find(x => x.id === filmId);
  const age = ageFromCPF(cpf);
  const pr = isPromo();
  const extra = seat === 'vip' ? 10 : seat === 'imax' ? 18 : 0;
  let base, type;
  if (pr) { base = 12; type = 'Promocional'; }
  else if (isStu) { base = 14; type = 'Meia (Estudante)'; }
  else if (age >= 60) { base = 14; type = 'Meia (60+)'; }
  else { base = 28; type = 'Inteira'; }
  const total = base + extra;
  const seatLbl = seat === 'vip' ? 'VIP' : seat === 'imax' ? 'IMAX' : 'Comum';
  document.getElementById('t-film').textContent = f.emoji + ' ' + f.title;
  document.getElementById('t-sess').textContent = sess;
  document.getElementById('t-seat').textContent = seatLbl;
  document.getElementById('t-type').textContent = type;
  document.getElementById('t-name').textContent = nm;
  document.getElementById('t-price').textContent = 'R$ ' + total.toFixed(2);
  document.getElementById('t-code').textContent = genCode('CX');
  document.getElementById('t-time').textContent = new Date().toLocaleString('pt-BR');
  document.getElementById('t-paid').style.display = 'inline-flex';
  const act = SNACKS.filter(s => cart[s.id] > 0);
  if (act.length) {
    document.getElementById('t-food-box').style.display = 'block';
    document.getElementById('t-food-code').textContent = genCode('BP');
  }
  document.getElementById('tkt-ph').style.display = 'none';
  document.getElementById('tkt-wrap').classList.add('on');
  al('buy-al', 'ok', '✅ Ingresso confirmado!', `Códigos gerados e "enviados" para ${email}. Apresente na entrada da sala.`);
  document.getElementById('tkt-wrap').scrollIntoView({behavior: 'smooth', block: 'nearest'});
}

/* ── GENERATE SNACK ── */
function doSnack() {
  const nm = document.getElementById('sk-name').value.trim();
  const act = SNACKS.filter(s => cart[s.id] > 0);
  let html = '';
  let sum = 0;
  act.forEach(s => {
    const sub = cart[s.id] * s.price;
    sum += sub;
    html += `<div class="citem"><span>${s.emoji} ${s.name} ×${cart[s.id]}</span><span>R$ ${sub.toFixed(2)}</span></div>`;
  });
  html += `<div class="ctotal" style="margin-top:.4rem"><span>Total</span><span style="color:var(--gold)">R$ ${sum.toFixed(2)}</span></div>`;
  document.getElementById('sk-order-list').innerHTML = html;
  document.getElementById('sk-code').textContent = genCode('BP');
  document.getElementById('sk-for').textContent = nm;
  document.getElementById('sk-tkt-wrap').classList.add('on');
  al('sk-al', 'ok', '🍿 Pedido confirmado!', 'Código gerado. Vá ao caixa da bomboniere e informe o código.');
}

/* ── INIT ── */
renderFilms();
renderSoon();
renderSnacks();
tickClock();
setInterval(tickClock, 1000);
