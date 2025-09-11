// JavaScript Document
console.log("hi");



/******************************/
/* menu openen de MENU button */
/******************************/

let sluitMenuButton = document.querySelector("header nav button")

sluitMenuButton.addEventListener("click", sluitMenu);

function sluitMenu() {
  let deNav = document.querySelector("header nav");
  deNav.classList.remove("is-open");
}

/************************************/
/* menu sluiten met de sluit button */
/************************************/

let openMenuButton = document.querySelector("header > button")

openMenuButton.addEventListener("click", openMenu);

function openMenu() {
  let deNav = document.querySelector("header > nav");
  deNav.classList.add("is-open");
}