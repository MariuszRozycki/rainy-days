'use strict';

/* .login-container button | moving to log-in.html */
let button = document.querySelector('.login-container button');

button.addEventListener('click', (e) => {
  e.preventDefault();
  location.href = '/layout/log-in.html';
});

/* button LOG IN .log-in */
if (document.querySelector('title').innerText === 'Rainy Days | Log In') {
  let buttonLogIn = document.querySelector('button[value="Log In"]');

  buttonLogIn.addEventListener('click', () => {
    location.href = 'logged.html';
  });
}

/* button LOG UT .log-in */
if (document.querySelector('title').innerText === 'Rainy Days | Logged') {
  let buttonLogIn = document.querySelector('button[value="Log In"]');

  buttonLogIn.addEventListener('click', () => {
    location.href = 'log-in.html';
  });
}

/* button SIGN UP in - shows place, where U are in shop | sign-up.html */
if (document.querySelector('title').innerText === 'Rainy Days | Sign Up') {
  let buttonSignUp = document.querySelector('.btn_sign-up');

  buttonSignUp.addEventListener('click', () => {
    location.href = 'sign-up.html';
  });
}

/* button CREATE PROFILE to sign up in shop | sign-up.html */
if (document.querySelector('title').innerText === 'Rainy Days | Sign Up') {
  let buttonSignUp = document.querySelector('button[value="Create Profile"]');

  buttonSignUp.addEventListener('click', () => {
    location.href = 'log-in.html';
  });
}

/* button next .cart */
if (document.querySelector('title').innerText === 'Rainy Days | Cart') {
  let buttonNext = document.querySelector('button[type="submit"]');

  buttonNext.addEventListener('click', () => {
    location.href = 'cart-payment.html';
  });
}

/* button back.cart-payment */
if (document.querySelector('title').innerText === 'Rainy Days | Cart Payment') {
  const buttonBack = document.querySelector('.btn-back');

  buttonBack.addEventListener('click', () => {
    location.href = 'cart.html';
  });

  /* button next .cart-payment */
  const buttonNext = document.querySelector('.next');

  buttonNext.addEventListener('click', () => {
    location.href = 'cart-success.html';
  });
}

/* BACK btn-go-to-our-jackets from cart */
if (document.querySelector('title').innerText === 'Rainy Days | Empty Cart' || document.querySelector('title').innerText === 'Rainy Days | Cart') {
  const buttonToOurJackets = document.querySelector('.go-to-our-jackets');

  buttonToOurJackets.addEventListener('click', () => {
    location.href = '/layout/our-jackets.html';
  });
}

/* HOME .go-to-main-site from transaction accomplished */
if (document.querySelector('title').innerText === 'Rainy Days | Cart Transaction Success') {
  const home = document.querySelector('.go-to-main-site');
  console.log(home);
  home.addEventListener('click', () => {
    location.href = '../index.html';
  });
}

/* .social-media | alert regarding to missing elements */
let socialMedia = document.querySelectorAll('.social-media');

for (let element of socialMedia) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    let message = element.id[0].toUpperCase() + element.id.slice(1) + ` isn't connected yet to website.`;
    alert(message);
  });
}

// cart container in nav
function generateItemsInCart() {
  const cartContainer = document.querySelector('.shopping-cart');
  if (JSON.parse(localStorage.getItem("TOTAL_ITEMS")) === null) {
    return cartContainer.innerHTML = "";
  } else {
    cartContainer.innerHTML += `<div class="item-quantity">${JSON.parse(localStorage.getItem("TOTAL_ITEMS"))}</div>`;
  }
}
generateItemsInCart();
