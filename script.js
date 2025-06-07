document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const recipeCards = document.querySelectorAll('.recipe-card');

  searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();
    recipeCards.forEach(card => {
      const title = card.querySelector('h2')?.textContent.toLowerCase() || '';
      card.style.display = title.includes(searchTerm) ? 'flex' : 'none';
    });
  });
});
