document.addEventListener("DOMContentLoaded", iniciar);

function iniciar(){

    aplicarTema();

	document.getElementById("hero").innerHTML = criarHero();

    carregarCatalogos();

    carregarFooter();

}