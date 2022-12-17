import { games } from "./array-games.js";

const leftCart = document.querySelector(".left-cart");
const price = document.querySelector(".cart-price");
const subTotatl = document.querySelector(".cart-subtotal");
const total = document.querySelector(".cart-total");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const foundGame = games.find(findGame);

function findGame(foundGame) {
  if (foundGame.id == id) {
    return foundGame.id;
  }
}

leftCart.innerHTML += `
<h3>${foundGame.title}</h3>
<img class="cart-image" src="${foundGame.image}" alt="image of${foundGame.title}" class="item-img">
`;

// price.innerHTML = `<p class="p-plus">${games[index].newPrice}</p>`;
// subTotatl.innerHTML = `<p">${games[index].newPrice}</p>`;
// total.innerHTML = `<p">${games[index].newPrice}</p>`;
