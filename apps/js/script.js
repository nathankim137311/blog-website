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