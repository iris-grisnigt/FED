// JavaScript Document

/************************************/
/* menu sluiten met de sluit button */
/************************************/
/* in de les
let openMenuButton = document.querySelector("header > button")

openMenuButton.addEventListener("click", openMenu);

function openMenu() {
  let deNav = document.querySelector("header > nav");
  deNav.classList.add("is-open");
}

let menuButton = document.querySelector ("button");

menuButton.addEventListener("click", toggleMenu); 

function toggleMenu() {
    menuButton.classList.toggle("is-open");
}
*/


//in de les gedaan
let menuButton = document.querySelector("header > button");

const body = document.querySelector("body"); //studentassistent hulp

let navMenu = document.querySelector("header nav");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    menuButton.classList.toggle("is-open");
    navMenu.classList.toggle("is-open"); // dit opent/sluit het menu
    body.classList.toggle("remove-scrolling"); // studentassisent hulp
}



//bron 2: https://stackoverflow.com/questions/63902512/js-show-hide-header-on-scroll-effect-but-only-after-the-header-has-scrolled

let vorigeScroll = window.scrollY; //verticale scroll
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  let huidigeScroll = window.scrollY;

  if (huidigeScroll > vorigeScroll) { 
    // naar beneden scrollen -> header vervaagt weg
    header.style.opacity = "0";
  } else {
    // naar boven scrollen -> header komt terug
    header.style.opacity = "1";
  }

  vorigeScroll = huidigeScroll;
});
