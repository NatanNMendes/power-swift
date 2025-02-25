// Captura o botão de menu e o menu móvel
const menuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

// Adiciona o evento de clique para alternar o menu
menuButton.addEventListener('click', () => {
  // Alterna a classe 'hidden' no menu
  mobileMenu.classList.toggle('hidden');
});