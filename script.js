/* .login-container button | moving to log-in.html */
let button = document.querySelector('.login-container button');

button.addEventListener('click', () => {
  location.href = '/layout/log-in.html';
});


/* .social-media | alert regarding to missing elements */
let socialMedia = document.querySelectorAll('.social-media');

for (let element of socialMedia) {
  element.addEventListener('click', () => {
    let message = element.name[0].toUpperCase() + element.name.slice(1) + ` isn't connected yet to website.`;
    alert(message);
  });
}


/* .btn__show-iten | alert regarding to missing elements */
let showItems = document.querySelectorAll('.btn__show-item');

for (let item of showItems) {
  item.addEventListener('click', function (e) {
    e.preventDefault();
    alert(item.name);
  });
}

/* .products .item | displaying more items i section */
let buttonMoreItems = document.querySelector('.btn__more-items');
buttonMoreItems.innerHTML = 'More items'
let items = document.querySelectorAll('.item');

for (let item of items) {
  buttonMoreItems.addEventListener('click', () => {
    item.classList.toggle('hide');
  });
}


/* .products .item .more-items | changing text of button fron 'MORE ITEMS' to 'LESS ITEMS' */
let flag = true;
buttonMoreItems.addEventListener('click', function () {
  flag = !flag;
  flag ? this.innerHTML = 'more items' : this.innerHTML = 'less items';
});






