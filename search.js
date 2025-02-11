// Toggle Menu for Mobile
function toggleMenu() {
    const burger = document.querySelector('.burger-icon');
    const navList = document.querySelector('nav ul');
    
    navList.classList.toggle('active');
    burger.classList.toggle('active');
}

// Search functionality for anime
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    if (query) {
        searchAnime(query);
    }
});

function searchAnime(query) {
    // For now, hard-coded anime data (can be fetched from a database or an API)
    const animeList = [
        { title: 'Anime 1', img: 'anime1.jpg', link: 'anime-detail.html?anime=1' },
        { title: 'Anime 2', img: 'anime2.jpg', link: 'anime-detail.html?anime=2' },
        { title: 'Anime 3', img: 'anime3.jpg', link: 'anime-detail.html?anime=3' },
    ];

    const results = animeList.filter(anime => anime.title.toLowerCase().includes(query));
    displayResults(results);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';  // Clear previous results

    if (results.length > 0) {
        results.forEach(anime => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.innerHTML = `
                <img src="${anime.img}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <a href="${anime.link}">უყურე ახლა</a>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>არ მოიძებნა შესაბამისი შედეგები</p>';
    }
}
