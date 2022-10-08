const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const nameError = document.querySelector("#name-error");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error");
const userAddress = document.querySelector("#user-address");
const userAddressError = document.querySelector("#user-address--error");
const message = document.querySelector("#message");
const itemDetails = document.querySelector(".item-details");

function validateForm(event) {
  event.preventDefault();
  if (checkLength(userName.value, 0)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (checkLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(userAddress.value, 9)) {
    userAddressError.style.display = "none";
  } else {
    userAddressError.style.display = "block";
  }
  formCorrectlyValidated();
};

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  }
  else {
    return false;
  }
}

function checkEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateForm);

function formCorrectlyValidated() {
  if (checkLength(userName.value, 0) && (checkLength(subject.value, 9)) && (checkEmail(email.value)) && (checkLength(userAddress.value, 9))) {
    message.innerHTML = `<p class="success">Your message to main office has been sent.</p>`;
    form.reset();
  }
}