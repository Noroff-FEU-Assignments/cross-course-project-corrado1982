const url = "https://issimo.one/games-hub/wp-json/wc/store/products";

const htmlContainer = document.querySelector(".ps5-page");
const addCart = document.querySelector("#add-cart");

async function fetchApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let nameGame = data[i].name;
    let cover = data[i].images[0].src;
    let price = data[i].prices.price;
    
    
    // for(let a = 0; a < data[i].tags.length; a++) {
    // let category = data[i].tags[a].id;
    // console.log(nameGame);
    // console.log(cover);
    // console.log(price);
    // console.log(category);

    htmlContainer.innerHTML += `<a href="detail.html?id=${data[i].id}" class="cards-background" >
    <h4 class="title-card">${nameGame}</h4>
    <img src="${cover}" alt="image of${nameGame}" class="item-img">
    <p>New: ${price} $</p>
    <p>Digital: ${price} $</p>
    </a>
    `;
}
  };
    // }
    fetchApi();



// const detailLeft = document.querySelector(".product-page_left");

// for (let i = 0; i < games.length; i++) {
//   let nameGame = games[i].title;
//   let cover = games[i].image;
//   let priceNew = games[i].newPrice;
//   let priceUsed = games[i].usedPrice;
//   let priceDigital = games[i].digitalPrice;
  //   let descript = games[i].description;

  // if (games[i].pPs5 === false) {
  //   continue;
  // }

//   htmlContainer.innerHTML += `<a href="detail.html?id=${games[i].id}" class="cards-background" >
//   <h4 class="title-card">${nameGame}</h4>
//   <img src="${cover}" alt="image of${nameGame}" class="item-img">
//   <p>New: ${priceNew} $</p>
//   <p>Digital: ${priceDigital} $</p>
//   </a>
//   `;
// }
