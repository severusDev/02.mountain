"use strict";

let navLinks = document.querySelectorAll(".nav__link");
let activeLink = document.querySelector(".nav__link--active");

navLinks.forEach(item => {
    item.addEventListener("click", (event) => {
        removeLink();
        toggleLink(event.currentTarget);
    });
});

function toggleLink(elem) {
    elem.classList.add("nav__link--active");
};

function removeLink() {
    navLinks.forEach(item => {
        item.classList.remove("nav__link--active")
    });
};