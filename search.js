// Mock Data for Anime List
const animeList = [
    { name: "Naruto", image: "images/naruto.jpg", link: "anime1.html" },
    { name: "Attack on Titan", image: "images/aot.jpg", link: "anime2.html" },
    { name: "One Piece", image: "images/onepiece.jpg", link: "anime3.html" },
    { name: "My Hero Academia", image: "images/mha.jpg", link: "anime4.html" },// Mock Data for Anime List
const animeList = [
    { name: "Naruto", image: "images/naruto.jpg", link: "anime1.html" },
    { name: "Attack on Titan", image: "images/aot.jpg", link: "anime2.html" },
    { name: "One Piece", image: "images/onepiece.jpg", link: "anime3.html" },
    { name: "My Hero Academia", image: "images/mha.jpg", link: "anime4.html" },
    { name: "Demon Slayer", image: "images/demonslayer.jpg", link: "anime5.html" },
    { name: "Fullmetal Alchemist", image: "images/fma.jpg", link: "anime6.html" },
    { name: "Tokyo Ghoul", image: "images/tokyoghoul.jpg", link: "anime7.html" }
];

// Function to display search results
function searchAnime() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsContainer = document.getElementById("animeResults");
    resultsContainer.innerHTML = '';  // Clear previous results

    if (query.trim() === "") {
        resultsContainer.innerHTML = '<p>Please enter an anime name to search.</p>';
        return;
    }

    const filteredAnime = animeList.filter(anime =>
        anime.name.toLowerCase().includes(query)
    );

    if (filteredAnime.length === 0) {
        resultsContainer.innerHTML = '<p>No results found.</p>';
        return;
    }

    filteredAnime.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.classList.add('anime-card');

        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.name}">
            <h3>${anime.name}</h3>
            <a href="${anime.link}">Watch Now</a>
        `;

        resultsContainer.appendChild(animeCard);
    });
}

// Enable search on pressing "Enter"
document.getElementById("searchInput").addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
        searchAnime();
    }
});
