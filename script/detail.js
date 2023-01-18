//inizio ad editare la pagina dei dettagli
//attenzione fermarsi qui

// const url = "https://issimo.one/games-hub/wp-json/wc/store/products" + id ;
// const mostSold = document.querySelector(".most-sold-row");
// const hotDeals = document.querySelector(".hot-deals-row");
// const newArrived = document.querySelector(".new-arrived-row");



// import { games } from "./array-games.js";

const detailLeft = document.querySelector(".product-page_left");
const addToCart = document.querySelector("#add-cart_detailpage");
const breadCrubName = document.querySelector(".this-game");



const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);
const url = "https://issimo.one/games-hub/wp-json/wc/store/products/" + id ;


// const foundGame = data.find(findGame);

// function findGame(foundGame) {
//   if (foundGame.id == id) {
//     return foundGame.id;
//   }
// }
async function fetchApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  

// breadCrubName.innerHTML = `${foundGame.title}`;
detailLeft.innerHTML = `<img class="product-page_image" src="${data.images[0].src}" alt="image of${data.title}" class="item-img">
              <h3>${data.name}</h3>
              <p class="game-description">${data.description}</p>
      `;
addToCart.innerHTML += `<a href="cart.html?id=${data.id}" class="cta buy-button">Add to cart</a>`;
addToCart.onclick = function () {
  localStorage.setItem("dataStored", JSON.stringify(data));
}
;}
fetchApi();


addToCart.onclick = function () {
  localStorage.setItem("foundGame", JSON.stringify(foundGame));
}




//try
// addToCart.forEach((button) => {
//   button.addEventListener("click", collectGames);
// });
// function collectGames() {
//   localStorage.setItem("foundGame", JSON.stringify(foundGame));
// }
//TIL HERE

//OLD
// for (let i = 0; i < games.length; i++) {
//   if (games[i].id == id) {
//     detailLeft.innerHTML = `<img class="product-page_image" src="${games[i].image}" alt="image of${games[i].title}" class="item-img">
//         <h3>${games[i].title}</h3>
//         <p class="game-description">${games[i].description}</p>
//         `;
//     addToCart.innerHTML = `<a href="cart.html?id=${games[i].id}" class="cta buy-button">Add to cart</a>`;
//   }
// }
