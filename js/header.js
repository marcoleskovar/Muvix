//ESCONDER Y MOSTRAR HEADER CON SCROLL
const header = document.getElementById('mainHeader');
let actualScroll = 0;
let ultimoScroll = 0;

const scrollHideHeader = () => {
    actualScroll = window.scrollY;
    actualScroll > ultimoScroll + 10 ? header.classList.add('nav-hidden') : (actualScroll < ultimoScroll - 5 ? header.classList.remove('nav-hidden') : false)
    ultimoScroll = actualScroll; 
};

window.onscroll = scrollHideNav;