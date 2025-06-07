document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".recipe-page");
  if (pages.length === 0) return;

  let currentPage = 0;
  const updatePages = () => {
    pages.forEach((page, index) => {
      page.classList.toggle("active", index === currentPage);
      page.classList.toggle("hidden", index !== currentPage);
    });
  };

  updatePages();

  document.querySelectorAll(".next").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentPage < pages.length - 1) currentPage++;
      updatePages();
    });
  });

  document.querySelectorAll(".back").forEach(btn => {
    btn.addEventListener("click", () => {
      if (currentPage > 0) currentPage--;
      updatePages();
    });
  });

  document.querySelectorAll(".end").forEach(btn => {
    btn.addEventListener("click", () => {
      window.location.href = "../index.html";
    });
  });
});
