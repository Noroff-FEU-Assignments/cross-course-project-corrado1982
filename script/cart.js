import { games } from "./array-games.js";

const leftCart = document.querySelector(".left-cart");
const price = document.querySelector(".cart-price");
const subTotatl = document.querySelector(".cart-subtotal");
const total = document.querySelector(".cart-total");
const removeItem = document.querySelector(".remove-item");
const removeAll = document.querySelector(".cart-filled");
// const queryString = document.location.search;
// const params = new URLSearchParams(queryString);
// const id = params.get("id");

// const foundGame = games.find(findGame);

// function findGame(foundGame) {
//   if (foundGame.id == id) {
//     return foundGame.id;
//   }
// }
const gamesInSorage = localStorage.getItem("foundGame");
const parsedSrorage = JSON.parse(gamesInSorage);

leftCart.innerHTML += `
<h3>${parsedSrorage.title}</h3>
<img class="cart-image" src="${parsedSrorage.image}" alt="image of${parsedSrorage.title}" class="item-img">
`;
removeItem.onclick = function () {
  leftCart.innerHTML = "";
  removeAll.innerHTML = "";
  removeAll.innerHTML = `<h2>Your cart is empty!</h2>`;
  localStorage.removeItem("foundGame");
};

// leftCart.innerHTML += `
// <h3>${foundGame.title}</h3>
// <img class="cart-image" src="${foundGame.image}" alt="image of${foundGame.title}" class="item-img">
// `;
