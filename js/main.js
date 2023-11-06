"use strict";

let navLinks = document.querySelectorAll(".nav__link");
let activeLink = document.querySelector(".nav__link--active");
let eventItems = document.querySelectorAll(".event__item");


// navigation

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


// events

eventItems.forEach(item => {
    item.addEventListener("click", (event) => {
        removeStyleEvent();
        addStyleEvent(event.currentTarget);
    });
});

function addStyleEvent(elem) {
    elem.classList.add("event__item--active");
};

function removeStyleEvent() {
    eventItems.forEach(item => {
        item.classList.remove("event__item--active")
    });
};