const submit = document.querySelector(".buy-button");
// const name = document.querySelector("#full-name");
const nameError = document.querySelector("#name-error");
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
const allInput = document.querySelectorAll("input");

// function validateInput() {
//   event.preventDefault;
//   if (fullName.value.length === 0 || fullName.value.length > 10) {
//     nameError.style.display = "none";
//   } else {
//     nameError.style.display = "block";
//   }
//   console.log(fullName.value.length);
// }
// email.addEventListener("click", validateInput);

function validateInput() {
  event.preventDefault();
  if (fullName.value.length === 0 || fullName.value.length > 10) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
}

// function validateInput() {
//   event.preventDefault();
//   if (value.trim().length === 0 || value.trim().length > minLen) {
//     return true;
//   } else {
//     return false;
//   }
//   console.log(value.length);
// }

email.addEventListener("click", validateInput);
