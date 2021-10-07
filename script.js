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
  alert(`You have clicked icon of YouTube kanal of our shop, but website isn't ready yet!`);
});
instagram.addEventListener('click', () => {
  alert(`You have clicked icon of Instagram of our shop, but website isn't ready yet!`);
});
facebook.addEventListener('click', () => {
  alert(`You have clicked icon of Facebook website of our shop, but website isn't ready yet!`);
});
messenger.addEventListener('click', () => {
  alert(`You have clicked icon of messenger of our shop, but messenger isn't connected yet!`);
});
twitter.addEventListener('click', () => {
  alert(`You have clicked icon of Twitter, but Twitter account isn't ready yet!`);
});





