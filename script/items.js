// const games = [
//   {
//     id: 01,
//     title: "Furious",
//     image: "images/games img/cover-furious.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: false,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Furious is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 02,
//     title: "Super Duper",
//     image: "images/games img/cover-superduper.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Super Duper is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 03,
//     title: "Boxer",
//     image: "images/games img/cover-boxer.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Boxer is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 04,
//     title: "Cyberpunk",
//     image: "images/games img/cover-cyberpunk.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Cyberpunk is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 05,
//     title: "Forgelegend",
//     image: "images/games img/cover-forgelegend.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Forgelegend is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 06,
//     title: "Ping Pong",
//     image: "images/games img/cover-pingpong.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Ping Pong is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 07,
//     title: "Racing",
//     image: "images/games img/cover-racing.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Racing is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 08,
//     title: "Space War",
//     image: "images/games img/cover-spacewar.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Space War is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 09,
//     title: "Black",
//     image: "images/games img/cover-black.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Black is a game where you can challange your ability alone or with friends.",
//   },
//   {
//     id: 10,
//     title: "Assassin",
//     image: "images/games img/cover-assassins.jpg",
//     pXboxOne: true,
//     pXbox: true,
//     pPs4: true,
//     pPs5: true,
//     pNintendo: true,
//     pPc: true,
//     newPrice: 16,
//     usedPrice: 9,
//     digitalPrice: 10,
//     description:
//       "Assassin is a game where you can challange your ability alone or with friends.",
//   },
// ];

import { games } from "./array-games.js";
console.log("ok");
const htmlContainer = document.querySelector(".ps5-page");
// const detailLeft = document.querySelector(".product-page_left");

for (let i = 0; i < games.length; i++) {
  let nameGame = games[i].title;
  let cover = games[i].image;
  let priceNew = games[i].newPrice;
  let priceUsed = games[i].usedPrice;
  let priceDigital = games[i].digitalPrice;
  //   let descript = games[i].description;

  // if (games[i].pPs5 === false) {
  //   continue;
  // }

  htmlContainer.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
  <h4 class="title-card">${nameGame}</h4>
  <img src="${cover}" alt="image of${nameGame}" class="item-img">
  <p>New: ${priceNew} $</p>
  <p>Digital: ${priceDigital} $</p>
  
  </a>
  `;
  console.log(games[i]);
}
// function insertPicture() {
//   detailLeft.innerHTML = `<img src="${cover}" alt="image of${nameGame}" class="item-img">`;
// }
// insertPicture();
