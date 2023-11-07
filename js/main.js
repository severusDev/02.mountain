"use strict";

let navLinks = document.querySelectorAll(".nav__link");
let activeLink = document.querySelector(".nav__link--active");
let eventItems = document.querySelectorAll(".event__item");
let likeIcons = document.querySelectorAll(".like__icon");

// navigation

navLinks.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
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


// cards like

likeIcons.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        toggleStyleIcon(event.currentTarget);
    });
});

function toggleStyleIcon(elem) {
    elem.classList.toggle("like__icon--active");
};
