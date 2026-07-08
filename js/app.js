document.addEventListener("DOMContentLoaded", iniciar);
document.getElementById("hero").innerHTML = criarHero();

function iniciar(){

    aplicarTema();

    carregarHeader();

    carregarCatalogos();

    carregarFooter();

}