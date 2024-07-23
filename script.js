document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const cards = document.querySelectorAll('.card');

    searchBar.addEventListener('input', () => {
        const searchTerm = searchBar.value.toLowerCase();

        cards.forEach(card => {
            const actorName = card.getAttribute('data-name').toLowerCase();
            if (actorName.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
