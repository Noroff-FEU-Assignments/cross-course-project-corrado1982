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
const everywere = document.querySelector("main");

function validateInput() {
  event.preventDefault();
  if (fullName.value.trim().length === 0 || fullName.value.trim().length > 10) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  //EMAIL VALIDATION HERE
  if (email.value.trim().length === 0 || validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (address.value.trim().length === 0 || address.value.trim().length > 10) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
  // const num1 = addNumber.value;
  if (addNumber.value.trim().length === 0 || !isNaN(addNumber.value.trim())) {
    addNumberError.style.display = "none";
  } else {
    addNumberError.style.display = "block";
  }
  if (city.value.trim().length === 0 || city.value.trim().length > 2) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (
    zipCode.value.trim().length === 0 ||
    (zipCode.value.trim().length === 4 && !isNaN(zipCode.value.trim()))
  ) {
    zipCodeError.style.display = "none";
  } else {
    zipCodeError.style.display = "block";
  }
  if (country.value.trim().length === 0 || country.value.trim().length > 3) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
  if (
    cardHolder.value.trim().length === 0 ||
    cardHolder.value.trim().length > 3
  ) {
    cardHolderError.style.display = "none";
  } else {
    cardHolderError.style.display = "block";
  }
  if (
    cardNumber.value.trim().length === 0 ||
    (cardNumber.value.trim().length === 16 && !isNaN(cardNumber.value.trim()))
  ) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
  if (
    cvv.value.trim().length === 0 ||
    (cvv.value.trim().length === 3 && !isNaN(cvv.value.trim()))
  ) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
}

// fullName.addEventListener("click", validateInput);
// email.addEventListener("click", validateInput);
// address.addEventListener("click", validateInput);
// addNumber.addEventListener("click", validateInput);
// city.addEventListener("click", validateInput);
// zipCode.addEventListener("click", validateInput);
// country.addEventListener("click", validateInput);
// cardHolder.addEventListener("click", validateInput);
// cardNumber.addEventListener("click", validateInput);
// expire.addEventListener("click", validateInput);
// cvv.addEventListener("click", validateInput);
everywere.addEventListener("mouseout", validateInput);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
