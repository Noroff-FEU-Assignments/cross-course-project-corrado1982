import { games } from "./array-games.js";

const leftCart = document.querySelector(".left-cart");
const price = document.querySelector(".cart-price");
const subTotatl = document.querySelector(".cart-subtotal");
const total = document.querySelector(".cart-total");
const removeItem = document.querySelector(".remove-item");
const removeAll = document.querySelector(".cart-filled");
const cartIcon = document.querySelector(".cart-icon");
const empltyMessage = document.querySelector(".empty-message");
const breadCrubName = document.querySelector(".this-game");
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

if (parsedSrorage === null) {
  removeAll.style.display = "none";
  empltyMessage.style.display = "block";
} else {
  empltyMessage.style.display = "none";
}
//breadCrubName.innerHTML = `<a href"detail.html?id=${parsedSrorage.id}>${parsedSrorage.title}</a>`;
leftCart.innerHTML += `
<h3>${parsedSrorage.title}</h3>
<img class="cart-image" src="${parsedSrorage.image}" alt="image of${parsedSrorage.title}" class="item-img">
`;
removeItem.onclick = function () {
  leftCart.innerHTML = "";
  removeAll.innerHTML = "";
  removeAll.innerHTML = `<h2 class="empty-message">Your cart is empty!</h2>`;
  localStorage.removeItem("foundGame");
};
console.log(parsedSrorage);
// leftCart.innerHTML += `
// <h3>${foundGame.title}</h3>
// <img class="cart-image" src="${foundGame.image}" alt="image of${foundGame.title}" class="item-img">
// `;
