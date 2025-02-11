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

// Create a div for the mouse blur effect
const mouseBlur = document.createElement('div');
mouseBlur.classList.add('mouse-blur');
searchSection.appendChild(mouseBlur);

// Mousemove event to follow the mouse and apply effect
searchSection.addEventListener('mousemove', (e) => {
    // Get mouse position relative to the section
    const x = e.clientX - searchSection.offsetLeft;
    const y = e.clientY - searchSection.offsetTop;

    // Position the blur circle at the mouse position
    mouseBlur.style.left = `${x - 25}px`;  // Center the circle
    mouseBlur.style.top = `${y - 25}px`;  // Center the circle

    // Activate the blur effect when the mouse moves
    searchSection.classList.add('active');
});

// Deactivate the blur effect when mouse leaves the area
searchSection.addEventListener('mouseleave', () => {
    searchSection.classList.remove('active');
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
