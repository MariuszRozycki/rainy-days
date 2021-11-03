'use strict';

/* .login-container button | moving to log-in.html */
let button = document.querySelector('.login-container button');

button.addEventListener('click', () => {
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
    location.href = 'logg-in.html';
  });
}

/* button next .cart */
if (document.querySelector('title').innerText === 'Rainy Days | Cart') {
  let buttonNext = document.querySelector('button[type="submit"]');

  buttonNext.addEventListener('click', () => {
    location.href = 'cart-payment.html';
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
