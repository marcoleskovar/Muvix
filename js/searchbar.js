import buscadorImdb from './api.js';

//OPEN AND CLOSE SEARCH
const openSearch = () => {
    mainSearchBtn.onclick = () => {
        mainSearchBar.classList.toggle("search-open")
        mainMenuBtn.classList.toggle('menu-hidden')
        mainHeader.classList.toggle('fixed-pos')
        contentList.classList.toggle('hidden-fixed')
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
        deleteSearchBtn.classList.remove('delete-show')
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