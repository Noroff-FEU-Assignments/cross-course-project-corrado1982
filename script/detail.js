console.log("ciao");
const detailLeft = document.querySelector(".product-page_left");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

const url = "http://127.0.0.1:5500/ps5-games.html/" + id;
console.log(url);
// async function fetchGame() {
//   const response = await fetch(url);
//   const details = await response.json();
//   console.log(details);
// }

detailLeft.innerHTML = `<img src="${games[i].image}" alt="image of${nameGame}" class="item-img">`;
