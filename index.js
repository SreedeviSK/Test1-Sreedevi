document.querySelectorAll(".carousel").forEach((carousel) => {
    const items = carousel.querySelectorAll(".carousel__item");
    const buttonsHtml = Array.from(items, () => {
      return `<span class="carousel__button"></span>`;
    });
  
    carousel.insertAdjacentHTML(
      "beforeend",
      `
          <div class="carousel__nav">
              ${buttonsHtml.join("")}
          </div>
      `
    );
  
    const buttons = carousel.querySelectorAll(".carousel__button");
  
    buttons.forEach((button, i) => {
      button.addEventListener("click", () => {
        items.forEach((item) =>
          item.classList.remove("carousel__item--selected")
        );
        buttons.forEach((button) =>
          button.classList.remove("carousel__button--selected")
        );
  
        items[i].classList.add("carousel__item--selected");
        button.classList.add("carousel__button--selected");
      });
    });
  
    items[0].classList.add("carousel__item--selected");
    buttons[0].classList.add("carousel__button--selected");
  });

  const cardData = [
    { imageUrl: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/i/n/indian_basa_cubes.jpg', title: 'Fresh Indian Baasa / Pangasius / Pangas - Cube (480g to 500g',price:"$3" },
    { imageUrl: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/t/o/tomato-chutney.jpg', title: 'Tomato Onion Chutney (150g)',price:"$3"},
    { imageUrl: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/f/t/fth-dosa-classic.jpg', title: 'Idly / Dosa Batter (Freshly Stone-ground, no added',price:"$3" },
    { imageUrl: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/t/o/tomato-chutney.jpg', title: 'Tomato Onion Chutney (150g)',price:"$3",price:"$3" },
    { imageUrl: 'https://static.freshtohome.com/cdn-cgi/image/width=600/https://static.freshtohome.com/media/catalog/product/f/t/fth-dosa-classic.jpg', title: 'Idly / Dosa Batter (Freshly Stone-ground, no added',price:"$3"}
];

function createCard(card) {
    const cardContainer = document.getElementById('cardContainer');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${card.imageUrl}" alt="Card Image">
        <h2>${card.title}</h2>
        <h2>${card.price}</h2>
    `;
    cardContainer.appendChild(div);
}

cardData.forEach(card => createCard(card));
