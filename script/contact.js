const emailContact = document.querySelector("#e-mail");
const emailContactError = document.querySelector("#email-contact_error");
// const textMessage = document.querySelector("#text-messsage");
// const textMessageError = document.querySelector("#text-error");
const subMessageButton = document.querySelector("#submit-message");
const mainContact = document.querySelector("#contact-form");
const feedback = document.querySelector("#contact-feedback");

subMessageButton.addEventListener("click", validateSubmission);

feedback.style.display = "none";

function validateSubmission() {
  if (validateEmail(emailContact.value)) {
    emailContactError.style.display = "none";
    mainContact.style.display = "none";
    feedback.style.display = "inline-block";
  } else {
    emailContactError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
