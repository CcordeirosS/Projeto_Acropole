class MobileNavbar {
    constructor(mobileMenu, navList, navLinks){
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClick = this.handleClick.bind(this);
    }

    animateLinks(){
        this.navLinks.forEach((link) => {
            link.style.animation
                ? (link.style.animation = "")
                : (link.style.animation = 'navLinkFade 0.5s ease forwards 0.3s');
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }

    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    init(){
        if (this.mobileMenu){
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li"
);

const popup = document.getElementById('popupForm');

function openPopup() {
  popup.style.display = 'block';
}

function closePopup() {
  popup.style.display = 'none';
}

document.getElementById('whatsappForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const checkboxes = document.querySelectorAll('.checkbox-group input:checked');

  let servicos = [];
  checkboxes.forEach(cb => servicos.push(cb.value));

  const mensagem = `Olá, meu nome é ${nome}%0AEmail: ${email}%0ATelefone: ${telefone}%0AEstou interessado nos seguintes serviços:%0A- ${servicos.join('%0A- ')}`;

  const numeroWhatsApp = '5599999999999'; // Substitua pelo número com DDD e código do país
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
mobileNavbar.init();