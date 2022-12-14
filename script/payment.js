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
const expiryMonth = document.querySelector("#expire-month");
const expiryMonthError = document.querySelector("#month-error");
const expirYear = document.querySelector("#expire-year");
const expirYearError = document.querySelector("#year-error");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvv-error");
const everywere = document.querySelector("main");
const leftForm = document.querySelector(".left-form");
const radioNoSub = document.querySelector("#no-sub-pay");
const radioSub = document.querySelector("#sub-pay");
const bodyPayment = document.querySelector(".body-payment");
const payFeedback = document.querySelector("#pay-feedback");

radioNoSub.onclick = function () {
  leftForm.style.display = "none";
};
radioSub.onclick = function () {
  leftForm.style.display = "block";
};

function validateInput() {
  event.preventDefault();
  if (validateTextInput(fullName.value, 0, 2)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (email.value.trim().length === 0 || validateEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (validateTextInput(address.value, 0, 3)) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (addNumber.value.trim().length === 0 || !isNaN(addNumber.value.trim())) {
    addNumberError.style.display = "none";
  } else {
    addNumberError.style.display = "block";
  }
  if (validateTextInput(city.value, 0, 2)) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (validateNumberInput(zipCode.value, 0, 4)) {
    zipCodeError.style.display = "none";
  } else {
    zipCodeError.style.display = "block";
  }
  if (validateTextInput(country.value, 0, 3)) {
    countryError.style.display = "none";
  } else {
    countryError.style.display = "block";
  }
  if (validateTextInput(cardHolder.value, 0, 3)) {
    cardHolderError.style.display = "none";
  } else {
    cardHolderError.style.display = "block";
  }
  if (validateNumberInput(cardNumber.value, 0, 16)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
  if (validateNumberInput(cvv.value, 0, 3)) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
  // if (expiryMonth.value === "month") {
  //   expiryMonthError.style.display = "block";
  // } else {
  //   expiryMonthError.style.display = "none";
  // }
  // if (expirYear.value === "year") {
  //   expirYearError.style.display = "block";
  // } else {
  //   expirYearError.style.display = "none";
  // }
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
fullName.addEventListener("click", validateInput);
email.addEventListener("click", validateInput);
address.addEventListener("click", validateInput);
addNumber.addEventListener("click", validateInput);
city.addEventListener("click", validateInput);
zipCode.addEventListener("click", validateInput);
country.addEventListener("click", validateInput);
cardHolder.addEventListener("click", validateInput);
cardNumber.addEventListener("click", validateInput);
// expire.addEventListener("click", validateInput);
cvv.addEventListener("click", validateInput);
// everywere.addEventListener("mouseout", validateInput);

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
submit.onclick = function () {
  // event.preventDefault();
  if (expiryMonth.value === "month") {
    expiryMonthError.style.display = "block";
  } else {
    expiryMonthError.style.display = "none";
  }
  if (expirYear.value === "year") {
    expirYearError.style.display = "block";
  } else {
    expirYearError.style.display = "none";
  }
  if (validateTextInput(cardHolder.value, 3, 3)) {
    cardHolderError.style.display = "none";
  } else {
    cardHolderError.style.display = "block";
  }
  if (validateNumberInput(cardNumber.value, 16, 16)) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
  if (validateNumberInput(cvv.value, 3, 3)) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }

  if (
    expiryMonth.value !== "month" &&
    expirYear.value !== "year" &&
    validateNumberInput(cvv.value, 3, 3) &&
    validateTextInput(cardHolder.value, 3, 3) &&
    validateNumberInput(cardNumber.value, 16, 16)
  ) {
    //Experiment
    bodyPayment.style.display = "none";
    payFeedback.style.display = "block";
    //End Experiment
    // expiryMonthError.style.display = "none";
    // expirYearError.style.display = "none";
    console.log("ok");
  } else {
    console.log("not ok");
  }
};
expiryMonth.onclick = function () {
  if (expiryMonth.value !== "month") {
    expiryMonthError.style.display = "none";
  }
};
expirYear.onclick = function () {
  if (expirYear.value !== "year") {
    expirYearError.style.display = "none";
  }
};
