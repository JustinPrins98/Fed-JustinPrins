// JavaScript Document
console.log("hi");


var menuButton = document.querySelector("header nav button");

menuButton.addEventListener("click", menuOpenen);

function menuOpenen(){
    var deUl = document.querySelector("ul");
    deUl.classList.toggle("menuOpen");
}