console.log('hello everybody!'); 

//Sticky navigation bar 
window.onscroll = function() {stickyBar()};

const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function stickyBar () {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
//getElementsByClassName returns an array and not an element
//window sizing 
//variables 
const searchBar = document.querySelector('.search-bar'); 
const viewWidth = window.matchMedia('(min-width: 700px)');

//eventlisteners
//functions
viewWidth.addEventListener('change', event => {
  if (viewWidth.matches) {
    searchBar.style.display = 'block';
  } else {
    searchBar.style.display = 'none';
  }
})