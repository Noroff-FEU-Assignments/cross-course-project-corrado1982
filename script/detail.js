import { games } from "./array-games.js";
import { foundGame } from "./to-find.js";
import { findGame } from "./to-find.js";

const detailLeft = document.querySelector(".product-page_left");
const addToCart = document.querySelector("#add-cart_detailpage");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// const foundGame = games.find(findGame);

// function findGame(foundGame) {
//   if (foundGame.id == id) {
//     return foundGame.id;
//   }
// }

detailLeft.innerHTML = `<img class="product-page_image" src="${foundGame.image}" alt="image of${foundGame.title}" class="item-img">
              <h3>${foundGame.title}</h3>
              <p class="game-description">${foundGame.description}</p>
      `;
addToCart.innerHTML = `<a href="cart.html?id=${foundGame.id}" class="cta buy-button">Add to cart</a>`;
// for (let i = 0; i < games.length; i++) {
//   if (games[i].id == id) {
//     detailLeft.innerHTML = `<img class="product-page_image" src="${games[i].image}" alt="image of${games[i].title}" class="item-img">
//         <h3>${games[i].title}</h3>
//         <p class="game-description">${games[i].description}</p>
//         `;
//     addToCart.innerHTML = `<a href="cart.html?id=${games[i].id}" class="cta buy-button">Add to cart</a>`;
//   }
// }
