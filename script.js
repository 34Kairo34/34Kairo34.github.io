document.addEventListener('DOMContentLoaded', () => {
    const animeItems = document.querySelectorAll('.anime-item');
    
    animeItems.forEach(item => {
        item.addEventListener('click', () => {
            // Here you can define the behavior when an anime item is clicked, e.g., show more details.
            alert('You clicked on ' + item.querySelector('h3').innerText);
        });
    });
});
