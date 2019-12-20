"use strict";

const goToPage2Listener = document.querySelector(".body-button_goPage2");
const goToPage3Listener = document.querySelector(".body-button_goPage3");
const goToPage4Listener = document.querySelector(".body-button_goPage4");
const backToTopListener = document.querySelector(".body-button_backToTop");
const goBackPage1 = document.querySelector(".body-button_goBackPage1");
const goBackPage2 = document.querySelector(".body-button_goBackPage2");
const goBackPage3 = document.querySelector(".body-button_goBackPage3");
const scrollListener = document.querySelector(".body_main");
const menuWhatWeDo = document.querySelector(".body-header_menu_WhatWeDo");
const menuLocations = document.querySelector(".body-header_menu_Locations");
const menuContact = document.querySelector(".body-header_menu_Contact");

let i = 0;

goToPage2Listener.addEventListener("click", goToPage2);
goToPage3Listener.addEventListener("click", goToPage3);
goToPage4Listener.addEventListener("click", goToPage4);
goBackPage1.addEventListener("click", goToTop);
goBackPage2.addEventListener("click", goToPage2);
goBackPage3.addEventListener("click", goToPage3);
backToTopListener.addEventListener("click", goToTop);
scrollListener.addEventListener("wheel", scroll);
menuWhatWeDo.addEventListener("click", goToPage2)
menuLocations.addEventListener("click", goToPage3)
menuContact.addEventListener("click", goToPage4)

function goToPage2(e) {
    e.preventDefault();
    window.scrollTo(0, 720);
    i = 1;
}

function goToPage3(e) {
    e.preventDefault();
    window.scrollTo(0, 1440);
    i = 2;
}

function goToPage4(e) {
    e.preventDefault();
    window.scrollTo(0, 2170);
    i = 3;
}

function goToTop(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
    i = 0;
}

function scroll(e) {
    const scrollDown = e.deltaY;

    //Scroll Down
    if (scrollDown >= 125){
        if (i === 0) {
            window.scrollTo(0, 720);
            i++;
            return;
        }
        if (i === 1) {
            window.scrollTo(0, 1440);
            i++;
            return;
        }
        if (i === 2) {
            window.scrollTo(0, 2170);
            i++;
        }
    }
    //Scroll Up
    if (scrollDown < 125){
        if (i === 0) {
            window.scrollTo(0, 0);
            return;
        }
        if (i === 1) {
            window.scrollTo(0, 0);
            i--;
            return;
        }
        if (i === 2) {
            window.scrollTo(0, 720);
            i--;
            return;
        }
        if (i === 3) {
            window.scrollTo(0, 1440);
            i--;
        }
    };
}
