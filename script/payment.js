const submit = document.querySelector(".buy-button");
const fullName = document.querySelector("#full-name");
const nameError = document.querySelector("#name-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const address = document.querySelector("#address");
const addressError = document.querySelector("#address-error");
const addNumber = document.querySelector("#address-number");
const addNumberError = document.querySelector("#addNumberError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#city-error");
const zipCode = document.querySelector("#zip-code");
const zipCodeError = document.querySelector("#zip-error");
const country = document.querySelector("#country");
const countryError = document.querySelector("#country-error");
const cardHolder = document.querySelector("#cardholder");
const cardHolderError = document.querySelector("#cardholder-error");
const cardNumber = document.querySelector("#card-number");
const cardNumberError = document.querySelector("#card-number-error");
const expire = document.querySelector("#expire");
const expireError = document.querySelector("#expire-error");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvv-error");

function validateInput() {
  event.preventDefault();
  if (fullName.value.length === 0 || fullName.value.length > 10) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  //EMAIL VALIDATION HERE

  if (address.value.length === 0 || fullName.value.length > 10) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  // const num1 = addNumber.value;
  if (addNumber.value.length === 0 || !isNaN(addNumber.value)) {
    addNumberError.style.display = "none";
  } else {
    addNumberError.style.display = "block";
  }
}
fullName.addEventListener("click", validateInput);
email.addEventListener("click", validateInput);
address.addEventListener("click", validateInput);
addNumber.addEventListener("click", validateInput);
city.addEventListener("click", validateInput);
zipCode.addEventListener("click", validateInput);
country.addEventListener("click", validateInput);
cardHolder.addEventListener("click", validateInput);
cardNumber.addEventListener("click", validateInput);
expire.addEventListener("click", validateInput);
cvv.addEventListener("click", validateInput);
