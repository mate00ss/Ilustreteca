// Menu de opções //
let menu_button = document.querySelector('#nav-button');
let opt_buttons_div = document.querySelector('.options-div');
let opt_buttons = document.querySelectorAll('.opt-buttons');
let main = document.querySelector('.main')

menu_button.addEventListener('click', function() {
    if (menu_button.style.height != "100%") {
        //AUMENTANDO O TAMANHO DO BOTÃO NA NAV
        menu_button.style.height = "100%"
        menu_button.style.width = "100%"
        menu_button.style.borderRadius = "0"
        menu_button.style.border = ".15rem solid #FFF0"
        menu_button.style.backgroundColor = "var(--cor-borda-botao)"
        
        //ABRINDO O MENU DE OPÇÕES
        opt_buttons_div.style.display = "flex"
        opt_buttons_div.style.animation = "options-div-open .5s ease-out 0s 1 forwards";

        //OPACIDADE DOS BOTÕES
        for (let i = 0; i < opt_buttons.length; i++) {
            opt_buttons[i].style.opacity = "100%"
            
        }

        //DIMINUINDO A DIV DE CONTEÚDO DO SITE
        main.style.margin = "1rem 1rem 1rem 15rem"
        main.style.width = "calc(100% - 16rem)"
    }
    else {
        //DIMINUINDO O TAMANHO DO BOTÃO DA NAV
        menu_button.style.height = "3rem"
        menu_button.style.width = "10rem"
        menu_button.style.borderRadius = ".8rem"
        menu_button.style.border = ".15rem solid var(--cor-borda-botao)"
        menu_button.style.backgroundColor = "#FFF0"

        //FECHANDO O MENU DE OPÇÕES
        opt_buttons_div.style.animation = "options-div-close .5s ease-out 0s 1 forwards";

        //OPACIDADE DOS BOTÕES
        for (let i = 0; i < opt_buttons.length; i++) {
            opt_buttons[i].style.opacity = "0"
            
        }

        //AUMENTANDO A DIV DE CONTEÚDO DO SITE
        main.style.margin = "1rem 1rem 1rem 1rem"
        main.style.width = "calc(100% - 2rem)"
    }
})

// Troca de Tema
// let nav = document.querySelector('nav');
// let body = document.querySelector('body');
// let theme_button = document.querySelector('.theme-changer');


// theme_button.addEventListener('click', function() {
//     nav.style.backgroundColor = "#f0f"
// })


function navigate(target) {
    var url = location.href;
    base_url = url.split("/")[0];
    
    window.location.href = `${base_url}/${target}`;
}
