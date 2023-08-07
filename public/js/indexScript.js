function changeIndexTabTo(tab) {
    var formDiv = document.querySelector('.forms')
    var activeTab = formDiv.getAttribute("data-state");

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
            return 0;
        }
        if (tab == "addLivro") {
            //Debug
            console.log("Trocando para Livros");
            //
            
            formDiv.setAttribute("data-state", "addLivro");
            return 0;
        }
    }

    console.log("Já está aqui!")
    return 0;
}