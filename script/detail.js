import { games } from "./array-games.js";

const detailLeft = document.querySelector(".product-page_left");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const idGame = params.get("id");
const id = idGame - 1;

console.log(idGame);
console.log(games[id]);
detailLeft.innerHTML = `<img src="${games[id].image}" alt="image of${games[id].title}" class="item-img">`;
