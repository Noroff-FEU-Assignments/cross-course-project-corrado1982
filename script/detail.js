import { games } from "./items";

console.log("ciao");
const detailLeft = document.querySelector(".product-page_left");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

// const url = "http://127.0.0.1:5500/ps5-games.html";

// async function fetchGame() {
//   const response = await fetch(url);
//   console.log(response);
//}
