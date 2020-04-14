const body = document.querySelector("body");
const menuIconSize = document.querySelector(".menu_icon_size");
const nav = document.querySelector("nav");
const menuIcon = document.querySelector(".menu_icon");


body.addEventListener("click", (event) => {
    nav.classList.remove("nav_activ");
    menuIcon.classList.remove("menu_icon_activ");
    
    event.path.forEach(el => {
        if (el === menuIconSize) {
            console.log(event.path)
            nav.classList.toggle("nav_activ");
            menuIcon.classList.toggle("menu_icon_activ");
        }
    });
} )
