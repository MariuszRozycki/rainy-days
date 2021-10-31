'use strict';

/* .login-container button | moving to log-in.html */
let button = document.querySelector('.login-container button');

button.addEventListener('click', () => {
  location.href = '/layout/log-in.html';
});


/* .social-media | alert regarding to missing elements */
let socialMedia = document.querySelectorAll('.social-media');

for (let element of socialMedia) {
  element.addEventListener('click', function (e) {
    e.preventDefault();
    let message = element.id[0].toUpperCase() + element.id.slice(1) + ` isn't connected yet to website.`;
    alert(message);
  });
}