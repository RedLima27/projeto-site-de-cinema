/* ── CONFIG ── */
const API_URL = window.location.origin;

/* ── DATA ── */
const FILMS = [
  {id: 1, title: "Michael", genre: "Biopic / Musical", rating: "12", minAge: 12, emoji: "🎤", dur: "2h 08min", year: 2026,
   dir: "Antoine Fuqua", cast: "Jaafar Jackson, Colman Domingo, Nia Long, Miles Teller",
   desc: "A cinebiografia definitiva do Rei do Pop. O filme acompanha a trajetória de Michael Jackson desde sua infância em Gary, Indiana, passando pelo sucesso dos Jackson 5 nos anos 70, até se tornar o maior artista pop do mundo nos anos 80. Interpretado pelo sobrinho real Jaafar Jackson.",
   img: "https://image.tmdb.org/t/p/w220_and_h330_face/2FYFBgdNVVaUgVfNSh9z5WVTZ9y.jpg"},
  {id: 2, title: "Super Mario Galaxy: O Filme", genre: "Animação / Aventura", rating: "L", minAge: 0, emoji: "🍄", dur: "1h 39min", year: 2026,
   dir: "Aaron Horvath, Michael Jelenic", cast: "Chris Pratt, Anya Taylor-Joy, Charlie Day",
   desc: "Mario e seus aliados embarcam em uma aventura galáctica após salvar o Reino dos Cogumelos. Cheio de ação e emoção para toda a família, o filme expande o universo do encanador mais famoso do mundo até as estrelas.",
   img: "https://image.tmdb.org/t/p/w220_and_h330_face/b3WeTp42eJSRuE4UZfyPCOJW4c.jpg"},
  {id: 3, title: "O Diabo Veste Prada 2", genre: "Comédia / Drama", rating: "12", minAge: 12, emoji: "👠", dur: "2h 05min", year: 2026,
   dir: "David Frankel", cast: "Meryl Streep, Anne Hathaway, Emily Blunt",
   desc: "Miranda Priestly e Andy Sachs retornam em uma nova era da moda digital. Com as redes sociais transformando a indústria, a editora da Runway precisa se reinventar enquanto enfrenta uma rivalidade inesperada. Meryl Streep está mais deslumbrante do que nunca.",
   img: "https://image.tmdb.org/t/p/w220_and_h330_face/50yWyY981TyUHhoxxSEKwO70FmQ.jpg"},
  {id: 4, title: "Exit 8", genre: "Terror / Suspense", rating: "16", minAge: 16, emoji: "🚇", dur: "1h 45min", year: 2026,
   dir: "Genki Kawamura", cast: "Kazunari Ninomiya, Yamato Kôchi",
   desc: "Adaptação do viral jogo de terror japonês. Um homem fica preso em um corredor de metrô infinito e precisa encontrar a saída, mas a cada tentativa algo muda sutilmente. Um pesadelo psicológico que desafia percepção e sanidade.",
   img: "https://image.tmdb.org/t/p/w220_and_h330_face/naszJRWpzgbrR9vdifVoQ9IpNqW.jpg"},
  {id: 5, title: "Hokum: O Pesadelo da Bruxa", genre: "Terror", rating: "16", minAge: 16, emoji: "🔮", dur: "1h 52min", year: 2026,
   dir: "Damian McCarthy", cast: "Adam Scott, David Wilmot, Austin Amelio",
   desc: "Uma família se muda para uma casa aparentemente perfeita, mas algo sinistro os observa. Uma bruxa adormecida por séculos acorda com a chegada dos novos moradores. Terror psicológico e sobrenatural em dose dupla.",
   img: "https://image.tmdb.org/t/p/w220_and_h330_face/b9fyqIgQKW0VK1eKTsKKa5ijHOn.jpg"},
];
const SOON = [
  {title: "Mestres do Universo", genre: "Ação", rating: "12", minAge: 12, emoji: "⚔️", date: "04/06/2026", dir: "Yann Demange", cast: "Nicholas Galitzine, Elodie Yung, Sarah Michelle Gellar", desc: "He-Man enfrenta uma ameaça cósmica em live action que mistura fantasia e aventura. Com visual épico, o filme traz um Rei Rand e o retorno de heróis lendários do universo Eternia.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/dobbDBQC0G9m65pcVaDM2D2aMr8.jpg"},
  {title: "Mortal Kombat 2", genre: "Ação", rating: "16", minAge: 16, emoji: "⚔️", date: "04/06/2026", dir: "Simon McQuoid", cast: "Ludi Lin, Jessica Henwick, Tadanobu Asano", desc: "Liu Kang reúne guerreiros de todas as dimensões para enfrentar uma nova invasão de Outworld. Prepare-se para combates brutais, poderes místicos e fatalidades icônicas na sequência oficial.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/jWOUkeXhlyDAmOm6RoznLVHKXRy.jpg"},
  {title: "Dia D", genre: "Ficção Científica", rating: "14", minAge: 14, emoji: "🌍", date: "11/06/2026", dir: "Steven Spielberg", cast: "Emily Blunt, Tom Holland, John David Washington", desc: "Um grupo de cientistas descobre um portal temporal que pode mudar o destino da Terra. Spielberg volta ao sci-fi com emoção, suspense e uma trilha sonora de arrepiar escrita por John Williams.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/pmff1wjKrgJi92PPr346lAifzlg.jpg"},
  {title: "Supergirl", genre: "Super-Herói", rating: "12", minAge: 12, emoji: "🦸‍♀️", date: "25/06/2026", dir: "Jenna Malone", cast: "Sasha Calle, Helen Slater, Michael Keaton", desc: "Kara Zor-El chega à Terra em um filme solo repleto de ação, identidade e luta por justiça. A história explora sua origem e o desafio de ser uma heroína sob a sombra do Superman.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/lJVug1z4VFIEAEopgiCxZy2yOzX.jpg"},
  {title: "Toy Story 5", genre: "Animação", rating: "L", minAge: 0, emoji: "🤠", date: "09/07/2026", dir: "Josh Cooley", cast: "Tom Hanks, Tim Allen, Annie Potts", desc: "Woody e Buzz retornam para uma nova aventura repleta de nostalgia. Quando Bonnie ganha um tablet misterioso, os brinquedos precisam salvar seu novo amigo e descobrir o verdadeiro significado de pertencimento.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/dlZR5AE2NfKeZYxCKAvLGKSjncS.jpg"},
  {title: "A Odisseia", genre: "Épico", rating: "14", minAge: 14, emoji: "🌊", date: "16/07/2026", dir: "Christopher Nolan", cast: "Timothée Chalamet, Zendaya, Oscar Isaac", desc: "Nolan reinventa o clássico de Homero como uma jornada grandiosa pelo Mediterrâneo. Guerreiros, monstros e deuses colidem em uma versão cinematográfica que promete emoção e suspense.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/lkShxOPlelgr3R7zYAcG00w6Z94.jpg"},
  {title: "Vingadores: Doutor Destino", genre: "Super-Herói", rating: "12", minAge: 12, emoji: "🦾", date: "17/12/2026", dir: "Sharmeen Obaid-Chinoy", cast: "Robert Downey Jr., Elizabeth Olsen, Patrick Stewart", desc: "Doutor Destino assume o controle das realidades em uma trama épica que junta X-Men, Quarteto Fantástico e Vingadores. Um evento de super-heróis com stakes cósmicos e traições inesperadas.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/i29O7K4n3z5qB2SAJmSc0kR5dPj.jpg"},
  {title: "Duna: Parte 3", genre: "Ficção Científica", rating: "14", minAge: 14, emoji: "🏜️", date: "17/12/2026", dir: "Denis Villeneuve", cast: "Timothée Chalamet, Zendaya, Florence Pugh", desc: "A conclusão da saga de Paul Atreides traz guerras interplanetárias, profecias e a luta pelo controle de Arrakis. Villeneuve entrega um final visualmente arrebatador e carregado de política e misticismo.", img: "https://media.themoviedb.org/t/p/w220_and_h330_face/b4wekkUaxExzOeGe7hKXzhnyXHt.jpg"}
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
const SEAT_ROWS = 'ABCDEFGHIJKLMNO'.split('');
const SEAT_COLS = Array.from({ length: 12 }, (_, i) => i + 1);
const SEAT_BOOKED = new Set([]); // todos os assentos agora estão desbloqueados
const PREFERENTIAL_ROW = 'H';
let selectedSeats = []; // array of seat codes
let seatTypes = {}; // code -> 'inteira'|'meia-estudante'|'meia-60'

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


/* ── AGE VERIFICATION ── */
let _pendingFilmId = null;
let _ageCallback = null;

function openAgeModal(filmId, callback) {
  _ageCallback = callback || null;
  const f = FILMS.find(x => x.id === filmId);
  if (!f) return;
  _pendingFilmId = filmId;
  const icon = f.minAge >= 18 ? '🔞' : f.minAge >= 16 ? '⚠️' : f.minAge >= 12 ? '🎬' : '✅';
  document.getElementById('age-modal-icon').textContent = icon;
  document.getElementById('age-modal-title').textContent = f.minAge === 0
    ? 'Filme Livre — Confirmar'
    : 'Classificação ' + f.rating + ' anos';
  document.getElementById('age-modal-desc').textContent = f.minAge === 0
    ? 'Confirme seu CPF para emitir o ingresso.'
    : 'Este filme exige ' + f.minAge + '+ anos. Confirme seu CPF e data de nascimento.';
  const today = new Date().toISOString().split('T')[0];
  document.getElementById('age-dob').max = today;
  document.getElementById('age-cpf').value = document.getElementById('b-cpf')?.value || '';
  document.getElementById('age-dob').value = '';
  document.getElementById('age-result').textContent = '';
  document.getElementById('age-confirm-btn').disabled = true;
  document.getElementById('age-modal').classList.add('on');
  document.body.style.overflow = 'hidden';
}

function closeAgeModal(e) {
  if (e && e.target !== document.getElementById('age-modal')) return;
  _doCloseAgeModal();
}
function _doCloseAgeModal() {
  document.getElementById('age-modal').classList.remove('on');
  document.body.style.overflow = '';
  _pendingFilmId = null;
}

function ageCheckLive() {
  const f = FILMS.find(x => x.id === _pendingFilmId);
  if (!f) return;
  const dob = document.getElementById('age-dob').value;
  const res = document.getElementById('age-result');
  const btn = document.getElementById('age-confirm-btn');
  if (!dob) { res.textContent = ''; btn.disabled = true; return; }
  const age = calcAgeFromDOB(dob);
  if (f.minAge === 0) {
    res.className = 'age-result ok';
    res.textContent = 'Filme livre — entrada permitida para todas as idades.';
    btn.disabled = false;
  } else if (age < 16) {
    res.className = 'age-result err';
    res.textContent = 'Idade mínima para comprar ingressos é 16 anos (você tem ' + age + ' anos).';
    btn.disabled = true;
  } else if (age < f.minAge) {
    res.className = 'age-result err';
    res.textContent = 'Você tem ' + age + ' anos. Este filme exige ' + f.minAge + '+ anos. Compra bloqueada.';
    btn.disabled = true;
  } else {
    res.className = 'age-result ok';
    res.textContent = 'Idade confirmada (' + age + ' anos). Compra autorizada.';
    btn.disabled = false;
  }
}

function calcAgeFromDOB(dob) {
  const [y, m, d] = dob.split('-').map(Number);
  const today = new Date();
  let age = today.getFullYear() - y;
  if (today.getMonth() + 1 < m || (today.getMonth() + 1 === m && today.getDate() < d)) age--;
  return age;
}

function confirmAge() {
  const f = FILMS.find(x => x.id === _pendingFilmId);
  if (!f) return;
  const dob = document.getElementById('age-dob').value;
  const cpf = document.getElementById('age-cpf').value;
  if (!dob) return;
  const age = calcAgeFromDOB(dob);
  if (f.minAge > 0 && age < Math.max(f.minAge, 16)) return;
  const btn = document.getElementById('age-confirm-btn');
  btn.disabled = true;
  btn.textContent = 'Verificando...';
  fetch(API_URL + '/api/age-verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ filmId: _pendingFilmId, cpf, dob })
  })
  .then(r => r.json())
  .then(data => {
    if (!data.ok) {
      const res = document.getElementById('age-result');
      res.className = 'age-result err';
      res.textContent = data.message || data.error;
      btn.disabled = false;
      btn.textContent = 'Confirmar';
      return;
    }
    if (cpf) document.getElementById('b-cpf').value = cpf;
    _doCloseAgeModal();
    if (_ageCallback) _ageCallback();
  })
  .catch(() => {
    if (cpf) document.getElementById('b-cpf').value = cpf;
    _doCloseAgeModal();
    if (_ageCallback) _ageCallback();
  });
}

/* ── CLOCK ── */
function tickClock() {
  try {
    const now = new Date();
    const hc = document.getElementById('hero-clock');
    const nt = document.getElementById('nav-time');
    if (hc) hc.textContent = '⏰ Agora: ' + now.toLocaleTimeString('pt-BR');
    if (nt) nt.textContent = now.toLocaleTimeString('pt-BR').slice(0, 5);
    const pr = isPromo();
    if (pr !== promoState) {
      promoState = pr;
      const dot = document.getElementById('nav-dot');
      if (dot) dot.className = pr ? 'dot on' : 'dot';
      const b = document.getElementById('promo-badge');
      if (b) {
        if (pr) { b.className = 'pb-badge on'; b.textContent = 'ATIVA'; }
        else { b.className = 'pb-badge off'; b.textContent = now.getHours() < 12 ? '12h–17h' : 'Encerrada'; }
      }
    }
    if (document.getElementById('b-film')?.value) {
      const pp = document.getElementById('price-preview');
      const pe = document.getElementById('price-est');
      if (pp) pp.style.display = 'flex';
      if (pe) pe.textContent = 'R$ ' + calcPrice().toFixed(2).replace('.', ',');
    }
  } catch(e) {}
}

/* ── NAVIGATION ── */
let _navStack = ['home'];
function go(name, pushToStack = true) {
  document.querySelectorAll('.pg').forEach(p => p.classList.remove('on'));
  document.querySelectorAll('.ntab').forEach(t => t.classList.remove('on'));
  const target = document.getElementById('pg-' + name);
  if (target) target.classList.add('on');
  const tabIndex = {home:0,soon:1,buy:2,snacks:3}[name];
  if (tabIndex !== undefined) document.querySelectorAll('.ntab')[tabIndex].classList.add('on');
  window.scrollTo({top: 0, behavior: 'smooth'});
  if (pushToStack && _navStack[_navStack.length - 1] !== name) _navStack.push(name);
}
function goBack() {
  if (_navStack.length > 1) { _navStack.pop(); go(_navStack[_navStack.length - 1], false); }
  else go('home', false);
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
  SOON.forEach((s, i) => {
    const [d, m, y] = s.date.split('/').map(Number);
    const dt = new Date(y, m - 1, d);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const diff = Math.round((dt - today) / 864e5);
    const cd = diff < 0 ? 'Em cartaz' : diff === 0 ? 'Hoje!' : diff === 1 ? 'Amanhã!' : diff + ' dias';
    const imgHtml = s.img ? `<img src="${s.img}" alt="${s.title}" loading="lazy" onerror="this.style.display='none';this.parentElement.querySelector('.scard-fallback').style.display='flex'">` : '';
    list.innerHTML += `
      <div class="scard" onclick="openSoonDetail(${i})">
        <div class="scard-ico">${imgHtml}<div class="scard-fallback" style="display:${s.img ? 'none' : 'flex'}">${s.emoji}</div></div>
        <div class="scard-info">
          <div class="scard-title">${s.title}</div>
          <div class="scard-genre">${s.genre}</div>
          <div class="scard-desc">${s.desc}</div>
        </div>
        <div class="scard-right">
          <div class="scard-date">📅 ${s.date}</div>
          <div class="scard-cd">⏳ ${cd}</div>
          ${s.rating ? `<div class="rating-badge r${s.rating}">${s.rating === "L" ? "Livre" : s.rating + " anos"}</div>` : ""}
        </div>
      </div>
    `;
  });
}
function openSoonDetail(index) {
  const s = SOON[index];
  if (!s) return;
  const img = document.getElementById('sd-img');
  const fb = document.getElementById('sd-fallback');
  fb.textContent = s.emoji;
  fb.style.display = 'none';
  img.onerror = () => {
    img.style.display = 'none';
    fb.style.display = 'flex';
  };
  if (s.img) {
    img.style.display = 'block';
    img.src = s.img;
  } else {
    img.style.display = 'none';
    fb.style.display = 'flex';
  }
  img.alt = s.title;
  document.getElementById('sd-title').textContent = s.title;
  document.getElementById('sd-sub').textContent = `${s.genre} · ${s.date}`;
  document.getElementById('sd-meta').textContent = `Direção: ${s.dir} · Elenco: ${s.cast}`;
  document.getElementById('sd-desc').textContent = s.desc;
  go('soon-detail');
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


function onFilmChange() {
  document.getElementById('price-preview').style.display = 'flex';
  refreshEstimate();
}
function calcPrice() {
  if (!selectedSeats.length) return 0;
  const pr = isPromo();
  const cat = document.getElementById('b-category').value;
  const extra = cat === 'vip' ? 10 : cat === 'imax' ? 18 : 0;
  const baseInteira = pr ? 12 : 28;
  const baseMeia = pr ? 6 : 14;
  return selectedSeats.reduce((sum, s) => {
    const t = seatTypes[s] || 'inteira';
    return sum + (t === 'inteira' ? baseInteira : baseMeia) + extra;
  }, 0);
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
  if (!filmId) return ['warn', 'Selecione um filme', 'Escolha o filme desejado.'];
  if (!sess) return ['warn', 'Selecione um horário', 'Escolha o horário da sessão.'];
  if (!selectedSeats.length) return ['warn', 'Selecione as poltronas', 'Escolha ao menos uma poltrona no mapa de assentos.'];
  if (!nm) return ['warn', 'Nome obrigatório', 'Informe seu nome completo.'];
  if (!em || !em.includes('@')) return ['warn', 'Email inválido', 'Informe um email válido.'];
  if (!validCPF(cpf)) return ['err', 'CPF inválido', 'O CPF informado não é válido. Verifique os dígitos e tente novamente.'];
  const f = FILMS.find(x => x.id === filmId);
  const age = ageFromCPF(cpf);
  if (f.minAge > 0 && age < f.minAge) return ['err', `🔞 Classificação ${f.rating} anos`, `CPF indica ${age} anos. Este filme exige ${f.minAge}+ anos.`];
  // RA check for meia-estudante seats
  const hasMeiaEstu = selectedSeats.some(s => (seatTypes[s] || 'inteira') === 'meia-estudante');
  if (hasMeiaEstu) {
    const ra = document.getElementById('b-ra')?.value?.trim();
    if (!ra || ra.length < 5) return ['err', 'RA obrigatório', 'Informe o RA (Registro Acadêmico) para ingressos meia-estudante.'];
  }
  return null;
}

/* ── PAYMENT ── */


function goToSeats() {
  buildSeatsPage();
  go('seats');
}
function confirmSeatChoice() {
  if (!selectedSeats.length) return alert('Selecione ao menos uma poltrona.');
  // default each seat to 'inteira' if not yet typed
  selectedSeats.forEach(s => { if (!seatTypes[s]) seatTypes[s] = 'inteira'; });
  document.getElementById('b-seat').value = selectedSeats.join(', ');
  document.getElementById('b-seat-display').textContent = selectedSeats.join(', ');
  closeSeatModal();
  renderSeatTypes();
  refreshEstimate();
}

function renderSeatTypes() {
  const box = document.getElementById('seat-types-box');
  const list = document.getElementById('seat-types-list');
  if (!selectedSeats.length) { box.style.display = 'none'; return; }
  box.style.display = 'block';
  list.innerHTML = selectedSeats.map(s => `
    <div class="seat-type-row">
      <span class="seat-type-label">Poltrona <strong>${s}</strong></span>
      <select class="fselect seat-type-sel" data-seat="${s}" onchange="onSeatTypeChange('${s}', this.value)">
        <option value="inteira" ${seatTypes[s]==='inteira'?'selected':''}>Inteira</option>
        <option value="meia-estudante" ${seatTypes[s]==='meia-estudante'?'selected':''}>Meia — Estudante</option>
        <option value="meia-60" ${seatTypes[s]==='meia-60'?'selected':''}>Meia — 60+ anos</option>
      </select>
    </div>`).join('');
  updateSeatSummary();
}

function onSeatTypeChange(seat, value) {
  seatTypes[seat] = value;
  updateSeatSummary();
  refreshEstimate();
  // Show RA field if any seat is meia-estudante
  const hasMeiaEstu = selectedSeats.some(s => (seatTypes[s] || 'inteira') === 'meia-estudante');
  const raBox = document.getElementById('ra-box');
  if (raBox) raBox.style.display = hasMeiaEstu ? 'block' : 'none';
}

function updateSeatSummary() {
  const cat = document.getElementById('b-category').value;
  const extra = cat === 'vip' ? 10 : cat === 'imax' ? 18 : 0;
  const pr = isPromo();
  const counts = { inteira: 0, 'meia-estudante': 0, 'meia-60': 0 };
  selectedSeats.forEach(s => counts[seatTypes[s] || 'inteira']++);
  const baseInteira = pr ? 12 : 28;
  const baseMeia = pr ? 6 : 14;
  const total = (counts.inteira * (baseInteira + extra))
              + ((counts['meia-estudante'] + counts['meia-60']) * (baseMeia + extra));
  const lines = [];
  if (counts.inteira) lines.push(`${counts.inteira}× Inteira — R$ ${(counts.inteira*(baseInteira+extra)).toFixed(2).replace('.',',')}`);
  if (counts['meia-estudante']) lines.push(`${counts['meia-estudante']}× Meia (Estudante) — R$ ${(counts['meia-estudante']*(baseMeia+extra)).toFixed(2).replace('.',',')}`);
  if (counts['meia-60']) lines.push(`${counts['meia-60']}× Meia (60+) — R$ ${(counts['meia-60']*(baseMeia+extra)).toFixed(2).replace('.',',')}`);
  const sb = document.getElementById('seat-summary-box');
  sb.innerHTML = lines.map(l => `<div class="seat-summary-line">${l}</div>`).join('')
    + `<div class="seat-summary-total">Total: <strong>R$ ${total.toFixed(2).replace('.',',')}</strong></div>`;
}
function buildSeatsPage() {
  const grid = document.getElementById('seats-full-grid');
  if (grid.dataset.ready) { updateSeatsPanel(); return; }
  grid.dataset.ready = 'true';
  const letters = 'ABCDEFGHIJKLMNO'.split('');
  const PREF = 'H';
  const BOOKED = new Set([]);
  letters.forEach(letter => {
    const rowEl = document.createElement('div');
    rowEl.className = 'sp-row';
    rowEl.innerHTML = `<div class="sp-row-label">${letter}</div><div class="sp-block" data-b="L"></div><div></div><div class="sp-block" data-b="R"></div><div class="sp-row-label">${letter}</div>`;
    const left = [8,7,6,5];
    const right = [4,3,2,1];
    left.forEach(n => addSpSeat(rowEl.querySelector('[data-b="L"]'), letter, n, BOOKED, PREF));
    right.forEach(n => addSpSeat(rowEl.querySelector('[data-b="R"]'), letter, n, BOOKED, PREF));
    grid.appendChild(rowEl);
  });
  // Mark already selected seats
  selectedSeats.forEach(code => {
    const sel = '[data-seat="' + code + '"]';
    const el = document.querySelector('.sp-seat' + sel);
    if (el) el.classList.add('sp-selected');
  });
  updateSeatsPanel();
}

function addSpSeat(container, letter, num, booked, pref) {
  const btn = document.createElement('div');
  const code = letter + num;
  btn.className = 'sp-seat' + (letter === pref ? ' sp-pref' : '') + (booked.has(code) ? ' sp-booked' : '');
  btn.textContent = num;
  btn.dataset.seat = code;
  if (!booked.has(code)) btn.onclick = () => toggleSpSeat(btn, code);
  container.appendChild(btn);
}

function toggleSpSeat(btn, code) {
  if (selectedSeats.includes(code)) {
    selectedSeats = selectedSeats.filter(s => s !== code);
    delete seatTypes[code];
    btn.classList.remove('sp-selected');
  } else {
    if (selectedSeats.length >= 12) return;
    selectedSeats.push(code);
    seatTypes[code] = 'inteira';
    btn.classList.add('sp-selected');
  }
  updateSeatsPanel();
}

function updateSeatsPanel() {
  const count = selectedSeats.length;
  const cat = document.getElementById('b-category')?.value || 'comum';
  const catLbl = cat === 'vip' ? 'VIP' : cat === 'imax' ? 'IMAX' : 'Comum';
  document.getElementById('sp-count').textContent = count || '0';
  document.getElementById('sp-codes').textContent = count ? selectedSeats.join(', ') : '—';
  document.getElementById('sp-category').textContent = catLbl;
  const priceRow = document.getElementById('sp-price-row');
  if (count > 0) {
    priceRow.style.display = 'flex';
    document.getElementById('sp-price').textContent = 'R$ ' + calcPrice().toFixed(2).replace('.', ',');
  } else {
    priceRow.style.display = 'none';
  }
}

function confirmSeatsAndReturn() {
  if (!selectedSeats.length) { alert('Selecione ao menos uma poltrona.'); return; }
  selectedSeats.forEach(s => { if (!seatTypes[s]) seatTypes[s] = 'inteira'; });
  document.getElementById('b-seat').value = selectedSeats.join(', ');
  document.getElementById('b-seat-display').textContent = selectedSeats.join(', ');
  renderSeatTypes();
  refreshEstimate();
  go('buy');
}

function openPay(target) {
  if (target === 'ticket') {
    const filmId = parseInt(document.getElementById('b-film').value);
    const f = FILMS.find(x => x.id === filmId);
    if (f && f.minAge > 0) {
      const err = validateTicketForm();
      if (err) { al('buy-al', err[0], err[1], err[2]); return; }
      openAgeModal(filmId, () => _proceedToPay(target));
      return;
    }
  }
  _proceedToPay(target);
}
function _proceedToPay(target) {
  hal('buy-al');
  hal('sk-al');
  if (target === 'ticket') {
    const err = validateTicketForm();
    if (err) { al('buy-al', ...err); return; }
    document.getElementById('pay-total-v').textContent = 'R$ ' + calcPrice().toFixed(2);
    document.getElementById('pay-sub').textContent = `${selectedSeats.length} ingresso(s) · ` + document.getElementById('b-session').value;
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
  const cat = document.getElementById('b-category').value;
  const nm = document.getElementById('b-name').value.trim();
  const email = document.getElementById('b-email').value.trim();
  const f = FILMS.find(x => x.id === filmId);
  const pr = isPromo();
  const extra = cat === 'vip' ? 10 : cat === 'imax' ? 18 : 0;
  const catLbl = cat === 'vip' ? 'VIP' : cat === 'imax' ? 'IMAX' : 'Comum';
  const baseInteira = pr ? 12 : 28;
  const baseMeia = pr ? 6 : 14;
  const counts = { inteira: 0, 'meia-estudante': 0, 'meia-60': 0 };
  selectedSeats.forEach(s => counts[seatTypes[s] || 'inteira']++);
  const total = calcPrice();
  const typeSummary = [
    counts.inteira ? `${counts.inteira}× Inteira` : '',
    counts['meia-estudante'] ? `${counts['meia-estudante']}× Meia-Estud.` : '',
    counts['meia-60'] ? `${counts['meia-60']}× Meia-60+` : ''
  ].filter(Boolean).join(' · ');
  document.getElementById('t-film').textContent = f.emoji + ' ' + f.title;
  document.getElementById('t-sess').textContent = sess;
  document.getElementById('t-seat').textContent = selectedSeats.join(', ');
  document.getElementById('t-type').textContent = catLbl + ' · ' + typeSummary;
  document.getElementById('t-name').textContent = nm;
  document.getElementById('t-price').textContent = 'R$ ' + total.toFixed(2).replace('.', ',');
  document.getElementById('t-code').textContent = genCode('CD');
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
createSeatChooser();
document.addEventListener("DOMContentLoaded", () => { tickClock(); setInterval(tickClock, 1000); });
