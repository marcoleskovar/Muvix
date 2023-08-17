const header = document.getElementById('mainHeader')

const hideHeaderScrollDown = () => {
    let lastScrollY = window.scrollY
    window.onscroll = ()=>{
        lastScrollY < window.scrollY ? header.classList.add('hidden') : header.classList.remove('hidden')
        lastScrollY = window.scrollY
    }
}
hideHeaderScrollDown()