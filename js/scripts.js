// scripts.js — small interactive bits (all client-side)

// Fill footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Build a simple visual chessboard (no engine) using Unicode pieces for demo
const boardEl = document.getElementById('board');
function createBoard(){
  boardEl.innerHTML = '';
  // Use a simple starting layout with kings and pawns to keep it friendly
  const pieces = [
    ['r','n','b','q','k','b','n','r'],
    ['p','p','p','p','p','p','p','p'],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['P','P','P','P','P','P','P','P'],
    ['R','N','B','Q','K','B','N','R']
  ];

  for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
      const sq = document.createElement('div');
      sq.className = 'square '+(((r+c)%2===0)?'light':'dark');
      sq.dataset.r = r;
      sq.dataset.c = c;
      const p = pieces[r][c];
      if(p){
        const span = document.createElement('span');
        span.textContent = pieceUnicode(p);
        span.className = 'piece';
        sq.appendChild(span);
      }
      boardEl.appendChild(sq);
    }
  }
}

function pieceUnicode(symbol){
  // Basic mapping for demo - uppercase = white, lowercase = black
  const map = {
    'K':'♔','Q':'♕','R':'♖','B':'♗','N':'♘','P':'♙',
    'k':'♚','q':'♛','r':'♜','b':'♝','n':'♞','p':'♟'
  };
  return map[symbol] || '';
}

createBoard();

// Reset button
const resetBtn = document.getElementById('resetBoard');
resetBtn.addEventListener('click', ()=>{
  createBoard();
});

// Simple signup - stores signups to localStorage as a working demo (no server)
const form = document.getElementById('signupForm');
form.addEventListener('submit', e=>{
  e.preventDefault();
  const data = {
    name: document.getElementById('name').value.trim(),
    email: document.getElementById('email').value.trim(),
    age: document.getElementById('age').value.trim(),
    course: document.getElementById('courseSelect').value
  };

  if(!data.name || !data.email){
    alert('Нэр ба имэйл оруулна уу');
    return;
  }

  // Save locally as demo only
  const all = JSON.parse(localStorage.getItem('mch_signups')||'[]');
  all.push({data,created:new Date().toISOString()});
  localStorage.setItem('mch_signups', JSON.stringify(all));

  alert('Таны бүртгэл хийгдлээ. Төлбөр хийхийн тулд QR/банк мэдээллийг харах боломжтой.');
  form.reset();
});

// Bank modal
const bankModal = document.getElementById('bankModal');
const payBtn = document.getElementById('payBtn');
const closeBtn = document.querySelector('.modal-close');

function showBankModal(){
  bankModal.setAttribute('aria-hidden','false');
}
function hideBankModal(){
  bankModal.setAttribute('aria-hidden','true');
}

payBtn.addEventListener('click', ()=>{
  showBankModal();
});
closeBtn.addEventListener('click', hideBankModal);
bankModal.addEventListener('click', (e)=>{ if(e.target===bankModal) hideBankModal(); });

// Card buttons: start/enroll
[...document.querySelectorAll('.card .btn.primary')].forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const course = btn.dataset.course || 'Курс';
    // prefill select
    document.getElementById('courseSelect').value = course;
    window.location.hash = '#contact';
    window.scrollTo({top: document.getElementById('contact').offsetTop-20, behavior:'smooth'});
  });
});

// Note: login and payment confirmation features require a backend server and are not implemented in this static starter.
