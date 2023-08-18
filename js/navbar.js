const navBar = document.getElementById ("mainNavBar")
const searchBtn = document.getElementById ("mainSearchBtn")
const menuBtn = document.getElementById ("mainMenuBtn")

const openMenu = () => {
    menuBtn.onclick = () => {
        navBar.classList.toggle("menu-open")
        menuBtn.classList.toggle("menu-open")
    }
}

openMenu()