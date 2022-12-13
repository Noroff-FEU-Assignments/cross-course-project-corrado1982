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
const leftForm = document.querySelector(".left-form");
const radioNoSub = document.querySelector("#no-sub-pay");
const radioSub = document.querySelector("#sub-pay");

radioNoSub.onclick = function () {
  leftForm.style.display = "none";
};
radioSub.onclick = function () {
  leftForm.style.display = "block";
};

function validateInput() {
  event.preventDefault();
  if (
    validateTextInput(fullName.value, 0, 7)
    // fullName.value.trim().length === 0 || fullName.value.trim().length > 7
  ) {
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

  if (
    validateTextInput(address.value, 0, 5)
    // address.value.trim().length === 0 || address.value.trim().length > 10
  ) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (addNumber.value.trim().length === 0 || !isNaN(addNumber.value.trim())) {
    addNumberError.style.display = "none";
  } else {
    addNumberError.style.display = "block";
  }
  if (
    validateTextInput(city.value, 0, 2)
    // city.value.trim().length === 0 || city.value.trim().length > 2
  ) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (
    validateNumberInput(zipCode.value, 0, 4)
    // zipCode.value.trim().length === 0 ||
    // (zipCode.value.trim().length === 4 && !isNaN(zipCode.value.trim()))
  ) {
    zipCodeError.style.display = "none";
  } else {
    zipCodeError.style.display = "block";
  }
  if (
    validateTextInput(country.value, 0, 3)
    // country.value.trim().length === 0 || country.value.trim().length > 3
  ) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
  if (
    validateTextInput(cardHolder.value, 0, 3)

    // cardHolder.value.trim().length === 0 ||
    // cardHolder.value.trim().length > 3
  ) {
    cardHolderError.style.display = "none";
  } else {
    cardHolderError.style.display = "block";
  }
  if (
    validateNumberInput(cardNumber.value, 0, 16)
    // cardNumber.value.trim().length === 0 ||
    // (cardNumber.value.trim().length === 16 && !isNaN(cardNumber.value.trim()))
  ) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
  if (
    validateNumberInput(cvv.value, 0, 3)
    // cvv.value.trim().length === 0 ||
    // (cvv.value.trim().length === 3 && !isNaN(cvv.value.trim()))
  ) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
}
function validateTextInput(value, zero, minLen) {
  if (value.trim().length === zero || value.trim().length > minLen) {
    return true;
  } else {
    return false;
  }
}
function validateNumberInput(value, zero, len) {
  if (
    value.trim().length === zero ||
    (value.trim().length === len && !isNaN(value.trim()))
  ) {
    return true;
  } else {
    return false;
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
