let actualScroll = 0;
let lastScroll = 0;

//HIDE AND SHOW HEADER WHEN SCROLLING
const scrollHideHeader = () => {
    if (!mainNavBar.classList.contains('menu-open') && !mainSearchBar.classList.contains('search-open')){
        actualScroll = window.scrollY;
        actualScroll > lastScroll + 10 ? mainHeader.classList.add('nav-hidden') : (actualScroll < lastScroll - 5 ? mainHeader.classList.remove('nav-hidden') : false)
        lastScroll = actualScroll;
    }
};

window.addEventListener ('scroll', scrollHideHeader)