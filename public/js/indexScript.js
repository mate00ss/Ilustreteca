function changeIndexTabTo(tab) {
    var formDiv = document.querySelector(".forms");
    var activeTab = formDiv.getAttribute("data-state");

    var livrosButton = document.querySelector(".adicionar-livro-button");
    var fichasButton = document.querySelector(".adicionar-ficha-button");
    
    var fichasDiv = document.querySelector(".add-ficha");
    var livrosDiv = document.querySelector(".add-livro");

    //Debug
    console.log(activeTab)
    console.log(tab)
    //

    if (activeTab != tab) {
        if (tab == "addFicha") {
            //Debug
            console.log("Trocando para Fichas");
            //

            formDiv.setAttribute("data-state", "addFicha");

            livrosButton.setAttribute("data-active", "true");
            fichasButton.setAttribute("data-active", "false");
            
            fichasDiv.style.zIndex = 1
            livrosDiv.style.zIndex = 0
            return 0;
        }
        if (tab == "addLivro") {
            //Debug
            console.log("Trocando para Livros");
            //
            
            formDiv.setAttribute("data-state", "addLivro");
            fichasButton.setAttribute("data-active", "true");
            livrosButton.setAttribute("data-active", "false");
            
            livrosDiv.style.zIndex = 1
            fichasDiv.style.zIndex = 0
            return 0;
        }
    }

    console.log("Já está aqui!")
    return 0;
}