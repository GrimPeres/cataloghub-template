document.addEventListener("DOMContentLoaded", iniciar);

function iniciar(){

    //aplicarTema();

    carregarEmpresa();

    carregarCatalogos();

    //carregarContactos();

}
function carregarEmpresa() {

    document.getElementById("empresa-nome").textContent =
        config.empresa.nome;

    document.getElementById("empresa-slogan").textContent =
        config.empresa.slogan;

}
function carregarCatalogos(){

    const container = document.getElementById("catalogos");

    container.innerHTML = "";

    catalogos.forEach(catalogo => {

        container.innerHTML += `
            <div class="catalogo">

                <img src="${catalogo.capa}">

                <h2>${catalogo.titulo}</h2>

                <p>${catalogo.descricao}</p>

                <a href="${catalogo.pdf}" target="_blank">
                    Abrir catálogo
                </a>

            </div>
        `;

    });

}