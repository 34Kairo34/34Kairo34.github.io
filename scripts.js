// Placeholder for future functionality like form validation, user interaction, etc.
console.log("Anime Streaming Site Loaded");

// Example of a search functionality
document.querySelector('.cta-btn').addEventListener('click', function() {
    alert("დაიწყეთ თქვენი საყვარელი ანიმე!");
});

// Example of a login redirect
document.querySelector('.login-btn').addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to login page
});

// Example of an anime item click event
const animeItems = document.querySelectorAll('.anime-item');
animeItems.forEach(item => {
    item.addEventListener('click', function() {
        alert("გთხოვთ აირჩიოთ ანიმე");
    });
});
