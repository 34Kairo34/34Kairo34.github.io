// Mock Data for Featured Anime
const featuredAnime = [
    { name: "Naruto", image: "images/naruto.jpg", link: "anime1.html", description: "A young ninja's journey." },
    { name: "Attack on Titan", image: "images/aot.jpg", link: "anime2.html", description: "Humans vs Titans." },
    { name: "One Piece", image: "images/onepiece.jpg", link: "anime3.html", description: "Pirates seeking the One Piece treasure." },
    { name: "My Hero Academia", image: "images/mha.jpg", link: "anime4.html", description: "Heroes in training." },
    { name: "Demon Slayer", image: "images/demonslayer.jpg", link: "anime5.html", description: "Fighting demons to save loved ones." },
    { name: "Fullmetal Alchemist", image: "images/fma.jpg", link: "anime6.html", description: "Two brothers searching for the Philosopher's Stone." },
    { name: "Tokyo Ghoul", image: "images/tokyoghoul.jpg", link: "anime7.html", description: "A boy turns into a half-ghoul." }
];

// Function to Display Anime Cards
function displayAnime() {
    const animeContainer = document.getElementById("animeContainer");

    featuredAnime.forEach(anime => {
        const animeCard = document.createElement("div");
        animeCard.classList.add("anime-card");

        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.name}">
            <h3>${anime.name}</h3>
            <p>${anime.description}</p>
            <a href="${anime.link}">Watch Now</a>
        `;

        animeContainer.appendChild(animeCard);
    });
}

// Call the function to display anime cards
displayAnime();
