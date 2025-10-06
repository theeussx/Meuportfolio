const nomeCompleto = [
  { texto: "Mateus", cor: "#4aa3ff" }
];
const textoTopo = nomeCompleto.map(p => p.texto).join("");
const typedTopo = document.getElementById("typed-name");

let indexTopo = 0;
let reverseTopo = false;

function typeTopo() {
  if (!reverseTopo) {
    indexTopo++;
    if (indexTopo > textoTopo.length) {
      reverseTopo = true;
      setTimeout(typeTopo, 2000);
      return;
    }
  } else {
    indexTopo--;
    if (indexTopo < 0) {
      reverseTopo = false;
      setTimeout(typeTopo, 1200);
      return;
    }
  }

  const currentText = textoTopo.substring(0, indexTopo);
  let result = '';
  let start = 0;
  for (const part of nomeCompleto) {
    const end = start + part.texto.length;
    const visible = currentText.substring(start, end);
    if (visible) {
      result += `<span style="color: ${part.cor}">${visible}</span>`;
    }
    start = end;
    if (start >= indexTopo) break;
  }

  typedTopo.innerHTML = result;
  setTimeout(typeTopo, reverseTopo ? 100 : 150);
}
typeTopo();


const nomeGithub = [
  { texto: "GitHub", cor: "#0000ff" }
];
const textoGithub = nomeGithub.map(p => p.texto).join("");
const typedGithub = document.getElementById("typed-github");

let indexGithub = 0;
let reverseGithub = false;

function typeGithub() {
  if (!reverseGithub) {
    indexGithub++;
    if (indexGithub > textoGithub.length) {
      reverseGithub = true;
      setTimeout(typeGithub, 2000);
      return;
    }
  } else {
    indexGithub--;
    if (indexGithub < 0) {
      reverseGithub = false;
      setTimeout(typeGithub, 1200);
      return;
    }
  }

  const currentText = textoGithub.substring(0, indexGithub);
  let result = '';
  let start = 0;
  for (const part of nomeGithub) {
    const end = start + part.texto.length;
    const visible = currentText.substring(start, end);
    if (visible) {
      result += `<span style="color: ${part.cor}">${visible}</span>`;
    }
    start = end;
    if (start >= indexGithub) break;
  }

  typedGithub.innerHTML = result;
  setTimeout(typeGithub, reverseGithub ? 100 : 150);
}
typeGithub();


// Scroll reveal animation
const scrollElements = document.querySelectorAll('.scroll');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  scrollElements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Tema claro/escuro
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggleBtn.textContent = document.body.classList.contains('light') ? '☀️' : '🌙';
});
