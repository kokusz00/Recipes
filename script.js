const searchBar = document.getElementById('searchBar');
const recipeList = document.getElementById('recipeList');
const recipes = Array.from(recipeList.children).filter(el => !el.classList.contains('empty'));

searchBar.addEventListener('input', () => {
  const query = searchBar.value.toLowerCase();
  recipes.forEach(recipe => {
    const title = recipe.querySelector('h2').textContent.toLowerCase();
    recipe.style.display = title.includes(query) ? 'block' : 'none';
  });
});
