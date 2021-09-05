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

//list of links dissappear 

//link list headers and paragraph headers

const newUl = document.createElement("ul");
const newLi = document.createElement("li");
const newA = document.createElement("a");

newUl.appendChild(newLi);
newLi.appendChild(newA); 

const list = document.getElementById("content-headings");
list.appendChild(newUl); 

const section = document.querySelectorAll('h3').length; 
const headingText = document.getElementById("content-headings"); 

function generateListItems () {
  let newUl = document.createElement("ul");
  let list = document.getElementById("content-headings");
  newUl.appendChild(newLi);
  for (let i = 0; i < section; i++) {
    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    newLi.appendChild(newA);
    list.appendChild(newUl);
  }
}
