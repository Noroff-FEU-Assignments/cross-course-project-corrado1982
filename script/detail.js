import { games } from "./array-games.js";

const detailLeft = document.querySelector(".product-page_left");
const addToCart = document.querySelector("#add-cart_detailpage");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
// const index = id - 1;

console.log(id);

for (let i = 0; i < games.length; i++) {
  if (games[i].id == id) {
    detailLeft.innerHTML = `<img class="product-page_image" src="${games[i].image}" alt="image of${games[i].title}" class="item-img">
        <h3>${games[i].title}</h3>
        <p class="game-description">${games[i].description}</p>
        `;
    addToCart.innerHTML = `<a href="cart.html?id=${games[i].id}" class="cta buy-button">Add to cart</a>`;
  }
}

// detailLeft.innerHTML = `<img class="product-page_image" src="${games[index].image}" alt="image of${games[index].title}" class="item-img">
// <h3>${games[index].title}</h3>
// <p class="game-description">${games[index].description}</p>
// `;
// addToCart.innerHTML = `<a href="cart.html?id=${games[i].id}" class="cta buy-button">Add to cart</a>`;
