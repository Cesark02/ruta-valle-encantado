// =========== Hace una copia a la div que tiene los logos del slider =========== //
var copy = document.querySelector('.logos-slide').cloneNode(true);
        document.querySelector('.logos').appendChild(copy);


// =========== Menu cambia de color al hacer scroll =========== //
window.addEventListener("scroll", function () {
    const header = document.querySelector(".nav-container");
    const botones = document.querySelectorAll(".nav-botones");
    console.log(botones);
    if (window.scrollY > 500) {
        header.classList.add("nav-white");
    } else {
        header.classList.remove("nav-white");
    }
    if (window.scrollY > 2782) {
        header.classList.add("nav-black");
        botones.classList.add("navbtn-white");
    } else {
        header.classList.remove("nav-black");
        botones.classList.remove("navbtn-white");
    }
});


// =========== Menu hamburguesa para resoluciones bajas =========== //
// Obtén los elementos del DOM
const navMenu = document.getElementById('nav__menu');
const navOpen = document.getElementById('nav__toggle');
const navClose = document.getElementById('nav__close');
// Verifica si el elemento 'navOpen' existe antes de añadir el evento
if (navOpen) {
    navOpen.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}
// Verifica si el elemento 'navClose' existe antes de añadir el evento
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


// =========== Cambio del color de letras del nav al scrollear hacia abajo =========== //
function handleScroll() {
    const navBotones = document.querySelectorAll('.nav-botones');
    const scrollPosition = window.scrollY;
    const scrollThreshold = 2782;
    navBotones.forEach(btn => {
        if (scrollPosition > scrollThreshold) {
            btn.classList.add('navbtn-white');
        } else {
            btn.classList.remove('navbtn-white');
        }
    });
}
window.addEventListener('scroll', handleScroll);