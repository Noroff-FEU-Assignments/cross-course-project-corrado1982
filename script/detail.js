import { games } from "./array-games.js";

const detailLeft = document.querySelector(".product-page_left");
const addToCart = document.querySelector("#add-cart_detailpage");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const index = id - 1;

console.log(id);

detailLeft.innerHTML = `<img class="product-page_image" src="${games[index].image}" alt="image of${games[index].title}" class="item-img">
<h3>${games[index].title}</h3>
<p class="game-description">${games[index].description}</p>
`;
addToCart.innerHTML = `<a href="cart.html?id=${games[index].id}" class="cta buy-button" >`;
