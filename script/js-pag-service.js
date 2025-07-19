// Navegação entre serviços
document.querySelectorAll('.servico-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    // Remove classe ativo de todos os links
    document.querySelectorAll('.servico-link').forEach(el => {
      el.classList.remove('ativo');
    });

    // Adiciona classe ativo ao link clicado
    this.classList.add('ativo');

    // Esconde todas as páginas de serviço
    document.querySelectorAll('.pagina-servico').forEach(pagina => {
      pagina.classList.remove('ativo');
    });

    // Mostra a página correspondente
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).classList.add('ativo');
  });
});


/* Barra de navegação */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});