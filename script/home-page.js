import { games } from "./array-games.js";
console.log("ok");
const mostSold = document.querySelector(".most-sold-row");
const hotDeals = document.querySelector(".hot-deals-row");
const newArrived = document.querySelector(".new-arrived-row");
// const htmlContainer = document.querySelector(".ps5-page");
// const detailLeft = document.querySelector(".product-page_left");

for (let i = 0; i < games.length; i++) {
  let nameGame = games[i].title;
  let cover = games[i].image;
  let priceNew = games[i].newPrice;
  //   let priceUsed = games[i].usedPrice;
  let priceDigital = games[i].digitalPrice;
  //   let descript = games[i].description;

  if (games[i].hotDeals === true) {
    hotDeals.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
  <h4 class="title-card">${nameGame}</h4>
  <img src="${cover}" alt="image of${nameGame}" class="item-img">
  <p>New: ${priceNew} $</p>
  <p>Digital: ${priceDigital} $</p>
  
  </a>
  `;
  }
  if (games[i].mostSold === true) {
    mostSold.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
  <h4 class="title-card">${nameGame}</h4>
  <img src="${cover}" alt="image of${nameGame}" class="item-img">
  <p>New: ${priceNew} $</p>
  <p>Digital: ${priceDigital} $</p>
  
  </a>
  `;
  }
  if (games[i].newArrived === true) {
    newArrived.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
  <h4 class="title-card">${nameGame}</h4>
  <img src="${cover}" alt="image of${nameGame}" class="item-img">
  <p>New: ${priceNew} $</p>
  <p>Digital: ${priceDigital} $</p>
  
  </a>
  `;
  }
  console.log(games[i]);
}
console.log("prova");
// function insertPicture() {
//   detailLeft.innerHTML = `<img src="${cover}" alt="image of${nameGame}" class="item-img">`;
// }
// insertPicture();
