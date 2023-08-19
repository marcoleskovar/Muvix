const navBar = document.getElementById ("mainNavBar")
const menuBtn = document.getElementById ("mainMenuBtn")
const searchBtn = document.getElementById ("mainSearchBtn")

//OPEN AND CLOSE MENU
const openMenu = () => {
    menuBtn.onclick = () => {
        navBar.classList.toggle("menu-open")
        menuBtn.classList.toggle("menu-open")
        searchBtn.classList.toggle('search-hidden')
    }
}

openMenu()