const header = document.getElementById('mainHeader')

const hideHeaderScrollDown = () => {
    let lastScrollY = window.scrollY
    window.onscroll = ()=>{
        lastScrollY < window.scrollY ? header.classList.add('nav-hidden') : header.classList.remove('nav-hidden')
        lastScrollY = window.scrollY
    }
}
hideHeaderScrollDown()