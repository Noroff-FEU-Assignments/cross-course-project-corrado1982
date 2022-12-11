console.log("ciao");
const name = document.querySelector("#full-name");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const addNumber = document.querySelector("#address-number");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zip-code");
const country = document.querySelector("#country");

const cardHolder = document.querySelector("#cardholder");
const cardNumber = document.querySelector("#card-number");
const expire = document.querySelector("#expire");
const cvv = document.querySelector("#cvv");

const fullName = document.querySelector("#full-name");

function validateForm() {
  if (fullName.value.length < 10) {
    console.log("write your name!");
  }
}
validateForm();
