import buscadorImdb from './api.js';

const searchSection = document.getElementById ('mainSearchBar')
const searchBarForm = document.getElementById('searchBarForm');
const searchBarInput = document.getElementById('searchBarInput');
const searchResults = document.getElementById('searchResults');
const menuBtn = document.getElementById ('mainMenuBtn')
const deleteSearchBtn = document.getElementById ('deleteSearch')

//OPEN AND CLOSE SEARCH
const openSearch = () => {
    mainSearchBtn.onclick = () => {
        searchSection.classList.toggle("search-open")
        menuBtn.classList.toggle('menu-hidden')
    }
}

openSearch()

//SHOW AND HIDE DELETE BUTTON
const deleteSearch = () => {
    searchBarInput.value.length ? deleteSearchBtn.classList.add('delete-show') : deleteSearchBtn.classList.remove('delete-show');
    searchBarInput.value.length == 0 ? searchBarInput.classList.add('delete-hidden') : searchBarInput.classList.remove('delete-hidden')
    searchBarInput.oninput = deleteSearch;
}

deleteSearch();

//EXECUTE API SEARCH
const searchBar = async () => {
    searchBarForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const term = searchBarInput.value;
    
        try {
            if (term.length != 0) {
                const movieResults = await buscadorImdb(term);
                displayResults(movieResults);
            }else{
                searchResults.textContent = 'No se encontraron resultados.';
                return;
            }
        } catch (error) {
            console.error(error);
        }
    });
};

//SHOW SEARCH RESULTS
const displayResults = (results) => {
    searchResults.innerHTML = '';

    

    const ul = document.createElement('ul');
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        ul.appendChild(li);
    });

    searchResults.appendChild(ul);
};

searchBar();