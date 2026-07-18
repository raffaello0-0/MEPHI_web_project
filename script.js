const navPanel = document.querySelector("#navigation");
const menu = document.querySelector("#menu");
const header = document.querySelector("#header");
const pageTitle = document.querySelector("#page-title");
menu.addEventListener("click", openNavPanel);
function openNavPanel(){
    navPanel.classList.toggle("open");
    menu.classList.toggle("open");
}