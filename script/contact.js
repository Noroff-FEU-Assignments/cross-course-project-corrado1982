const emailContact = document.querySelector("#e-mail");
const emailContactError = document.querySelector("#email-contact_error");
const textMessage = document.querySelector("#text-messsage");
const subMessageButton = document.querySelector("#submit-message");

textMessage.addEventListener("click", validateSubmission);
subMessageButton.addEventListener("click", validateSubmission);

function validateSubmission() {
  if (
    emailContact.value.trim().length === 0 ||
    validateEmail(emailContact.value)
  ) {
    emailContactError.style.display = "none";
  } else {
    emailContactError.style.display = "block";
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
}
