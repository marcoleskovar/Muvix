const header = document.getElementById('mainHeader');
const navBar = document.getElementById('mainNavBar')
let actualScroll = 0;
let lastScroll = 0;

//HIDE AND SHOW HEADER WHEN SCROLLING
const scrollHideHeader = () => {
    if (!navBar.classList.contains('menu-open')){
        actualScroll = window.scrollY;
        actualScroll > lastScroll + 10 ? header.classList.add('nav-hidden') : (actualScroll < lastScroll - 5 ? header.classList.remove('nav-hidden') : false)
        lastScroll = actualScroll; 
    }
};

window.onscroll = scrollHideHeader;