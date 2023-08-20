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
    searchBarInput.oninput = deleteSearch;
}

deleteSearch();

//DELETE RESULTS
const deleteResults = () => {
    deleteSearchBtn.onclick = () => {
        searchResults.innerHTML = ''
    }
}

deleteResults ()

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

    const list = document.createElement('ul');
    results.forEach(result => {
        if (result.image && result.image.url) {
            const listItem = document.createElement('li');
            const image = document.createElement('img');

            image.src = result.image.url;
            listItem.appendChild(image);
            list.appendChild(listItem);
        }
    });
    searchResults.appendChild(list);
};

searchBar();