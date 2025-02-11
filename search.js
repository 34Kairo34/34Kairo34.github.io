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

// Mouse move event to track position for background blur effect
const searchSection = document.querySelector('.search-section');

searchSection.addEventListener('mousemove', (e) => {
    // Get mouse position relative to the section
    const x = e.clientX / window.innerWidth * 100; // Position X as a percentage of window width
    const y = e.clientY / window.innerHeight * 100; // Position Y as a percentage of window height

    // Apply these values to control the blur intensity and shift
    searchSection.style.setProperty('--mouse-x', x + '%');
    searchSection.style.setProperty('--mouse-y', y + '%');
});

// Function to perform the search
function searchAnime(query) {
    // Hard-coded anime data (can be fetched from an API)
    const animeList = [
        { title: 'Anime 1', img: 'anime1.jpg', link: 'anime-detail.html?anime=1' },
        { title: 'Anime 2', img: 'anime2.jpg', link: 'anime-detail.html?anime=2' },
        { title: 'Anime 3', img: 'anime3.jpg', link: 'anime-detail.html?anime=3' },
    ];

    const results = animeList.filter(anime => anime.title.toLowerCase().includes(query));
    displayResults(results);
}

// Display search results
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
