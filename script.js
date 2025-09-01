/* ---------------- js/script.js (resposta automática) ---------------- */
document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('contactForm');
const resposta = document.getElementById('resposta');


if(form){
form.addEventListener('submit', (e) => {
e.preventDefault();
resposta.textContent = 'Olá! Obrigado por entrar em contato. Recebi sua mensagem e vou responder o mais rápido possível.';
form.reset();
});
