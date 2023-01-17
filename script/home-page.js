// import { games } from "./array-games.js";
// console.log("ok");

const url = "https://issimo.one/games-hub/wp-json/wc/store/products";
// const mostSold = document.querySelector(".most-sold-row");
// const hotDeals = document.querySelector(".hot-deals-row");
// const newArrived = document.querySelector(".new-arrived-row");

async function fetchApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let nameGame = data[i].name;
    let cover = data[i].images[0].src;
    let price = data[i].prices.price;
    let category = data[i].categories[0].slug;

    console.log(nameGame);
    console.log(cover);
    console.log(price);
    console.log(category);
  }
}
fetchApi()
//   let cover = data[i].image;
//   let priceNew = data[i].newPrice;
//   let priceDigital = data[i].digitalPrice;
  
//   if (category == most-sold) {
//     hotDeals.innerHTML += `<a href="detail.html?id=${nameGame}" class="cards-background" >
//   <h4 class="title-card">${nameGame}</h4>
//   <img src="${cover}" alt="image of${nameGame}" class="item-img">
//   <p>New: ${priceNew} $</p>
//   <p>Digital: ${priceDigital} $</p>
  
// //   </a>
// //   `;
//   }
//   if (games[i].mostSold === true) {
//     mostSold.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
//   <h4 class="title-card">${nameGame}</h4>
//   <img src="${cover}" alt="image of${nameGame}" class="item-img">
//   <p>New: ${priceNew} $</p>
//   <p>Digital: ${priceDigital} $</p>
  
//   </a>
//   `;
//   }
//   if (games[i].newArrived === true) {
//     newArrived.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
//   <h4 class="title-card">${nameGame}</h4>
//   <img src="${cover}" alt="image of${nameGame}" class="item-img">
//   <p>New: ${priceNew} $</p>
//   <p>Digital: ${priceDigital} $</p>
  
//   </a>
//   `;
//   }
//   console.log(games[i]);
// }
// console.log("prova");

