"use strict";

let navLinks = document.querySelectorAll(".nav__link");
let activeLink = document.querySelector(".nav__link--active");

console.log(navLinks);

navLinks.forEach(item => {
    item.addEventListener("click", (e)=> {
        toggleLink(e.target);
    });
});

function toggleLink(elem) {
    elem.classList.add("nav__link--active");
}