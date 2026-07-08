function iniciar() {

    aplicarTema();

    document.getElementById("hero").innerHTML = criarHero();

    carregarCatalogos();

    document.getElementById("footer").innerHTML = criarFooter();

}