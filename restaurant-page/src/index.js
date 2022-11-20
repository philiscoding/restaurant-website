import {
    pageLoad
} from "./home";

import {
    menuLoad
} from "./menu";

import {
    contactLoad
} from "./contact";

pageLoad.makeNav();
pageLoad.makeContent();
pageLoad.makeLandingSection();
pageLoad.makeMidSection();
pageLoad.makeFooter();

const home = document.querySelector(".home");
home.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.remove();
    pageLoad.makeContent();
    pageLoad.makeLandingSection();
    pageLoad.makeMidSection();
    pageLoad.makeFooter();
});
const menu = document.querySelector(".menu");
menu.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.remove();
    menuLoad.makeContent();
    menuLoad.makeMenu();

});
const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
    const content = document.querySelector(".content");
    content.remove();
    contactLoad.makeContent();
    contactLoad.makeHeadingSection();
    contactLoad.makeForm();
    contactLoad.makeBottomSection();

});