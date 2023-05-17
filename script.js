const meuBotao = document.getElementById('meuBotao');

meuBotao.addEventListener('click', function() {
  const maxX = window.innerWidth - meuBotao.offsetWidth;
  const maxY = window.innerHeight - meuBotao.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  meuBotao.style.position = 'fixed';
  meuBotao.style.left = randomX + 'px';
  meuBotao.style.top = randomY + 'px';
});