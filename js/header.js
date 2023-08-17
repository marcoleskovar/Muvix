const header = document.getElementById('mainHeader');
let currentScrollY = 0;
let lastScrollY = 0;

const handleScroll = () => {
    currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY + 10) {
        header.classList.add('nav-hidden');
    } else if (currentScrollY < lastScrollY - 10) {
        header.classList.remove('nav-hidden');
    }

    lastScrollY = currentScrollY;
};

window.addEventListener('scroll', handleScroll);