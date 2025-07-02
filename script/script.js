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

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('whatsapp-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('phone').value;

    const servicosSelecionados = Array.from(document.querySelectorAll('input[name="service"]:checked'))
      .map(el => el.value)
      .join(', ');

    const mensagem = `Olá, estou interessado nos seus serviços!%0A
Meu nome é: ${nome}%0A
E estou interessado nos seguintes serviços: ${servicosSelecionados}`;

    const numeroDestino = '5592985490996';
    const url = `https://wa.me/${numeroDestino}?text=${mensagem}`;

    window.open(url, '_blank');
  });
});

mobileNavbar.init();