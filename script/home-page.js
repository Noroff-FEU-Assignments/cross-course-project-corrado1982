const url = "https://issimo.one/games-hub/wp-json/wc/store/products";
const mostSold = document.querySelector(".most-sold-row");
const hotDeals = document.querySelector(".hot-deals-row");
const newArrived = document.querySelector(".new-arrived-row");

async function fetchApi() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    let nameGame = data[i].name;
    let cover = data[i].images[0].src;
    let price = data[i].prices.price;
    
    
    for(let a = 0; a < data[i].categories.length; a++) {
    let mostSoldCategory = "";
    let hotDealsCategory = "";
    let newArrivedCategory = "";
    let category = data[i].categories[a].id;
    console.log(nameGame);
    console.log(cover);
    console.log(price);
    console.log(category);

    if (category === 22) {
      mostSoldCategory = true;
    }
    if (category === 23) {
      hotDealsCategory = true;
    }
    if (category === 24) {
      newArrivedCategory = true;
    }

    if (mostSoldCategory) {
      // console.log("funge");
      mostSold.innerHTML += `<a href="detail.html?id=${data[i].id}" class="cards-background" >
     <h4 class="title-card">${nameGame}</h4>
     <img src="${cover}" alt="image of${nameGame}" class="item-img">
     <p>New: ${price} $</p>
     <p>Digital: ${price} $</p>
        
      </a>
       `;
    }
    if (hotDealsCategory) {
      // console.log("funge");
      hotDeals.innerHTML += `<a href="detail.html?id=${data[i].id}" class="cards-background" >
     <h4 class="title-card">${nameGame}</h4>
     <img src="${cover}" alt="image of${nameGame}" class="item-img">
     <p>New: ${price} $</p>
     <p>Digital: ${price} $</p>
        
      </a>
       `;
    }

    if (newArrivedCategory) {
      // console.log("funge");
      newArrived.innerHTML += `<a href="detail.html?id=${data[i].id}" class="cards-background" >
     <h4 class="title-card">${nameGame}</h4>
     <img src="${cover}" alt="image of${nameGame}" class="item-img">
     <p>New: ${price} $</p>
     <p>Digital: ${price} $</p>
        
      </a>
       `;
    }

    }}
  }

fetchApi()
