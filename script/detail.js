import { games } from "./array-games.js";

const detailLeft = document.querySelector(".product-page_left");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const index = id - 1;

console.log(id);

detailLeft.innerHTML = `<img class="product-page_image" src="${games[index].image}" alt="image of${games[index].title}" class="item-img">
<h3>${games[index].title}</h3>
<p class="game-description">${games[index].description}</p>
`;
