const buscadorImdb = async (term) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4504495cd2msh6be68f31a7ff871p138eb2jsnc9f858a42ada',
            'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(`https://online-movie-database.p.rapidapi.com/title/find?q=${encodeURIComponent(term)}`, options);
        const data = await response.json();

        if (data && data.results) {
            const movieResults = data.results.filter(result => result.titleType === 'movie');
            console.log(movieResults);
            return movieResults;
        } else {
            console.error('No se encontraron resultados válidos');
            return [];
        }
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default buscadorImdb
