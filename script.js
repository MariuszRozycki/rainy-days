let button = document.querySelector('.login-container button');

button.addEventListener('click', () => {
  location.href = 'log-in.html';
});

let youTube = document.querySelector('.youtube');
let instagram = document.querySelector('.instagram');
let facebook = document.querySelector('.facebook');
let messenger = document.querySelector('.messenger');
let twitter = document.querySelector('.twitter');

youTube.addEventListener('click', () => {
  alert(`You have clicked icon of YouTube kanal of our shop, but website isn't ready yet. So you are transfered to YouTube home page!`);
});
instagram.addEventListener('click', () => {
  alert(`You have clicked icon of Instagram of our shop, but website isn't ready yet. So you are transfered to home Instagram page!`);
});
facebook.addEventListener('click', () => {
  alert(`You have clicked icon of Facebook website of our shop, but website isn't ready yet. So you are transfered to Facebook home page!`);
});
messenger.addEventListener('click', () => {
  alert(`You have clicked icon of messenger of our shop, but messenger isn't connected yet. So you are transfered to Messenger home page!`);
});
twitter.addEventListener('click', () => {
  alert(`You have clicked icon of Twitter, but Twitter account isn't ready yet. So you are transfered to Twitter home page!`);
});





