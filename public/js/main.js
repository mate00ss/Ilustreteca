// Menu de opções //
let menu_button = document.querySelector('#nav-button');
let opt_buttons_div = document.querySelector('.opt-buttons-div');

menu_button.addEventListener('click', function() {
    if (menu_button.style.height != "100%") {

        menu_button.style.height = "100%"
        menu_button.style.width = "100%"
        menu_button.style.borderRadius = "0"

        opt_buttons_div.style.display = "flex"
        opt_buttons_div.style.animation = "opt-buttons-div-open .5s ease 0s 1 forwards";
    }
    else {
        menu_button.style.height = "3rem"
        menu_button.style.width = "10rem"
        menu_button.style.borderRadius = ".4rem"

        opt_buttons_div.style.animation = "opt-buttons-div-close .5s ease 0s 1 forwards";
        
    }
})

// Troca de Tema //

let nav = document.querySelector('nav');
let body = document.querySelector('body');
let theme_button = document.querySelector('.theme-changer');


theme_button.addEventListener('click', function() {
    nav.style.transition = "1s"
    nav.style.backgroundColor = "#f00"
})
