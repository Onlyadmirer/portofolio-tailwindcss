


// navbar fixed
window.onscroll = function(){
  const header = document.querySelector('header');
  const navFix = header.offsetTop;

  if (window.pageYOffset > navFix) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};



// hamburger action
const hamburger = document.querySelector('#hamburger');
const navbarLink = document.querySelector('#navbar-list');

hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navbarLink.classList.toggle('hidden');
  
});

window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navbarLink) {
    hamburger.classList.remove('hamburger-active');
    navbarLink.classList.add('hidden');
  }
});



