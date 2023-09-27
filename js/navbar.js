const navBar = document.getElementById ("mainNavBar")
const menuBtn = document.getElementById ("mainMenuBtn")
const searchBtn = document.getElementById ("mainSearchBtn")

//OPEN AND CLOSE MENU
const openMenu = () => {
    let overflowHidden = false
    menuBtn.onclick = () => {
        navBar.classList.toggle("menu-open")
        menuBtn.classList.toggle("menu-open")
        searchBtn.classList.toggle('search-hidden')
        mainHeader.classList.toggle('fixed-pos')
        contentList.classList.toggle('hidden-fixed')
        overflowHidden = !overflowHidden
        overflowHidden ? document.documentElement.style.overflow="hidden" : document.documentElement.style.overflow="visible"
    }
}

openMenu()