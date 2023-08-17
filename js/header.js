const header = document.getElementById('mainHeader');
let actualScroll = 0;
let ultimoScroll = 0;

const scrollHideNav = () => {
    actualScroll = window.scrollY;

    if (actualScroll > ultimoScroll + 10) {
        header.classList.add('nav-hidden');
    } else if (actualScroll < ultimoScroll - 5) {
        header.classList.remove('nav-hidden');
    }
    ultimoScroll = actualScroll;
};

window.onscroll = scrollHideNav;