const pages = [
  {
    text: `<strong>Ingredients:</strong><br>
      - 15 dkg flour<br>
      - 1 egg<br>
      - 3 dl milk<br>
      - 1 dl soda<br>
      - 1 tbsp sugar<br>
      - 1 pinch salt<br>
      - Oil for frying`,
    img: "https://i.imgur.com/UWbwFAT.jpg"
  },
  {
    text: "Beat the eggs in a bowl, add the sugar, salt, and whisk with a whisk.",
    img: "https://i.imgur.com/Usl9ZsH.jpg"
  },
  {
    text: "Add the flour and 2 dl of milk to the eggs, and whisk until smooth.",
    img: "https://i.imgur.com/ykKmYZ8.jpg"
  },
  {
    text: "When it is almost lump-free, gradually dilute it with the remaining milk and soda.",
    img: "https://i.imgur.com/Zom9Ssa.jpg"
  },
  {
    text: "Let the pancake batter rest for at least half an hour.",
    img: "https://i.imgur.com/mKlG6KO.jpg"
  },
  {
    text: "After resting, stir the batter, it should have the consistency of cream.",
    img: "https://i.imgur.com/fpPvV0f.jpg"
  },
  {
    text: "Heat a little oil in a pan, spread it over the surface of the pan with a spatula.",
    img: "https://i.imgur.com/kKzhNZk.jpg"
  },
  {
    text: "When the oil is hot, pour a ladleful into the pancake pan, swirl it to cover.",
    img: "https://i.imgur.com/yAupjT1.jpg"
  },
  {
    text: "If the edge separates, lift it with a spatula and flip it over carefully.",
    img: "https://i.imgur.com/3M1Nbe8.jpg"
  },
  {
    text: "Cook the other side too. It cooks faster. Stack finished pancakes on a plate.",
    img: "https://i.imgur.com/TqJMBsv.jpg"
  }
];

let currentPage = 0;
const contentDiv = document.getElementById('pageContent');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const finishBtn = document.getElementById('finishBtn');

function renderPage() {
  const page = pages[currentPage];
  contentDiv.innerHTML = `
    <p>${page.text}</p>
    <img src="${page.img}" style="max-width: 300px; float: right; margin-left: 20px;">
  `;
  prevBtn.style.display = currentPage === 0 ? 'none' : 'inline-block';
  nextBtn.style.display = currentPage === pages.length - 1 ? 'none' : 'inline-block';
  finishBtn.style.display = currentPage === pages.length - 1 ? 'inline-block' : 'none';
}

prevBtn.onclick = () => {
  if (currentPage > 0) {
    currentPage--;
    renderPage();
  }
};

nextBtn.onclick = () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    renderPage();
  }
};

renderPage();
