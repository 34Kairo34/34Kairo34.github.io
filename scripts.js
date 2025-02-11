// Sample data for Anime list
const animeList = [
    { title: 'Anime 1', img: 'anime1.jpg', link: 'anime1.html' },
    { title: 'Anime 2', img: 'anime2.jpg', link: 'anime2.html' },
    { title: 'Anime 3', img: 'anime3.jpg', link: 'anime3.html' },
    { title: 'Anime 4', img: 'anime4.jpg', link: 'anime4.html' },
    { title: 'Anime 5', img: 'anime5.jpg', link: 'anime5.html' },
    { title: 'Anime 6', img: 'anime6.jpg', link: 'anime6.html' },
    { title: 'Anime 7', img: 'anime7.jpg', link: 'anime7.html' },
    { title: 'Anime 8', img: 'anime8.jpg', link: 'anime8.html' },
    { title: 'Anime 9', img: 'anime9.jpg', link: 'anime9.html' },
    { title: 'Anime 10', img: 'anime10.jpg', link: 'anime10.html' },
    { title: 'Anime 11', img: 'anime11.jpg', link: 'anime11.html' },
    { title: 'Anime 12', img: 'anime12.jpg', link: 'anime12.html' },
];

const itemsPerPage = 4; // Number of items to show per page
let currentPage = 1;

// Function to render the anime items for the current page
function renderAnimeList(page) {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentItems = animeList.slice(startIndex, endIndex);

    const animeItemsContainer = document.getElementById('anime-items');
    animeItemsContainer.innerHTML = '';

    currentItems.forEach(anime => {
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime-item');
        animeDiv.innerHTML = `
            <img src="${anime.img}" alt="${anime.title}">
            <h3>${anime.title}</h3>
            <a href="${anime.link}">უყურე ახლა</a>
        `;
        animeItemsContainer.appendChild(animeDiv);
    });

    renderPagination(page);
}

// Function to render the pagination buttons
function renderPagination(page) {
    const totalPages = Math.ceil(animeList.length / itemsPerPage);
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    // "Previous" Button
    const prevButton = document.createElement('a');
    prevButton.href = '#';
    prevButton.textContent = '← წინა';
    prevButton.classList.add(page === 1 ? 'disabled' : '');
    prevButton.addEventListener('click', () => {
        if (page > 1) {
            renderAnimeList(page - 1);
        }
    });
    paginationContainer.appendChild(prevButton);

    // Page Buttons
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement('a');
        pageButton.href = '#';
        pageButton.textContent = i;
        pageButton.classList.add(i === page ? 'active' : '');
        pageButton.addEventListener('click', () => renderAnimeList(i));
        paginationContainer.appendChild(pageButton);
    }

    // "Next" Button
    const nextButton = document.createElement('a');
    nextButton.href = '#';
    nextButton.textContent = '→ შემდეგი';
    nextButton.classList.add(page === totalPages ? 'disabled' : '');
    nextButton.addEventListener('click', () => {
        if (page < totalPages) {
            renderAnimeList(page + 1);
        }
    });
    paginationContainer.appendChild(nextButton);
}

// Initial Render
renderAnimeList(currentPage);
