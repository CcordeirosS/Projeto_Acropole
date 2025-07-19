/* Barra de navegação */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


const popup = document.getElementById('popupForm');

function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const checkboxes = document.querySelectorAll('.checkbox-group input:checked');

  let servicos = [];
  checkboxes.forEach(cb => servicos.push(cb.value));

  const mensagem = `Olá, meu nome é ${nome}.%0AMeu Email: ${email}%0ATelefone: ${telefone}%0AEstou interessado nos seguintes serviços:%0A- ${servicos.join('%0A- ')}`;

  const numeroWhatsApp = '5592985490996'; // Substitua pelo número com DDD e código do país
  const url = `https://wa.me/${numeroWhatsApp}?text=${mensagem}`;

  window.open(url, '_blank');
});

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const carousel = document.getElementById('carousel');

function showSlide(index) {
  if (index < 0) currentIndex = totalSlides - 1;
  else if (index >= totalSlides) currentIndex = 0;
  else currentIndex = index;

  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

// Auto play
let autoPlay = setInterval(nextSlide, 4000); // 4 segundos

// Pausar ao passar o mouse (opcional)
document.querySelector('.carousel-container').addEventListener('mouseenter', () => {
  clearInterval(autoPlay);
});

document.querySelector('.carousel-container').addEventListener('mouseleave', () => {
  autoPlay = setInterval(nextSlide, 4000);
});

// Iniciar com o primeiro slide
showSlide(currentIndex);

// Navegação entre serviços
document.querySelectorAll('.servico-link').forEach(link => {
  link.addEventListener('click', function(e) {
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