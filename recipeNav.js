document.addEventListener('DOMContentLoaded', () => {
  const pages = document.querySelectorAll('.page');
  let currentPage = 0;

  function showPage(index) {
    pages.forEach((page, i) => {
      page.classList.toggle('active', i === index);
    });
  }

  document.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentPage < pages.length - 1) {
        currentPage++;
        showPage(currentPage);
      }
    });
  });

  document.querySelectorAll('.back').forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        showPage(currentPage);
      }
    });
  });

  document.querySelector('.finish')?.addEventListener('click', () => {
    window.location.href = "https://kokusz00.github.io/Recipes/";
  });

  showPage(currentPage);
});
