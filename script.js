document.addEventListener('DOMContentLoaded', () => {
    const animeItems = document.querySelectorAll('.anime-item');
    
    animeItems.forEach(item => {
        item.addEventListener('click', () => {
            alert('You clicked on ' + item.querySelector('h3').innerText);
        });
    });
});
