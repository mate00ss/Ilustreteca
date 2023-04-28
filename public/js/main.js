// Menu de opções //
let menu_button = document.querySelector('#nav-button');
let opt_buttons_div = document.querySelector('.opt-buttons-div');
let atalho = document.querySelector('.atalho')

menu_button.addEventListener('click', function() {
    if (menu_button.style.height != "100%") {
        //AUMENTANDO O TAMANHO DO BOTÃO NA NAV
        menu_button.style.height = "100%"
        menu_button.style.width = "100%"
        menu_button.style.borderRadius = "0"
        
        //ABRINDO O MENU DE OPÇÕES
        opt_buttons_div.style.display = "flex"
        opt_buttons_div.style.animation = "opt-buttons-div-open .5s ease-out 0s 1 forwards";

        //DIMINUINDO A DIV DE CONTEÚDO DO SITE
        atalho.style.margin = "1rem 1rem 1rem 15rem"
        atalho.style.width = "calc(100% - 16rem)"
    }
    else {
        //DIMINUINDO O TAMANHO DO BOTÃO DA NAV
        menu_button.style.height = "3rem"
        menu_button.style.width = "10rem"
        menu_button.style.borderRadius = ".4rem"
        
        //FECHANDO O MENU DE OPÇÕES
        opt_buttons_div.style.animation = "opt-buttons-div-close .5s ease-out 0s 1 forwards";

        //AUMENTANDO A DIV DE CONTEÚDO DO SITE
        atalho.style.margin = "1rem 1rem 1rem 1rem"
        atalho.style.width = "calc(100% - 2rem)"
    }
})

// Troca de Tema
let nav = document.querySelector('nav');
let body = document.querySelector('body');
let theme_button = document.querySelector('.theme-changer');


theme_button.addEventListener('click', function() {
    nav.style.backgroundColor = "#f8a"
    nav.style.transition = ".5s"
})
