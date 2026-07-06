document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    carregarEmpresa();

    carregarCatalogos();

}
function carregarEmpresa() {

    document.getElementById("empresa-nome").textContent =
        config.empresa.nome;

    document.getElementById("empresa-slogan").textContent =
        config.empresa.slogan;

}
function carregarCatalogos() {

    const container = document.getElementById("catalogos");

    container.innerHTML = "";

    config.catalogos.forEach(catalogo => {

        container.innerHTML += `

            <div class="catalogo">

                <h2>${catalogo.titulo}</h2>

                <p>${catalogo.descricao}</p>

                <button>Abrir</button>

            </div>

        `;

    });

}
function carregarCatalogos() {

    const container = document.getElementById("catalogos");

    container.innerHTML = "";

    config.catalogos.forEach(catalogo => {

        container.innerHTML += `

            <div class="catalogo">

                <h2>${catalogo.titulo}</h2>

                <p>${catalogo.descricao}</p>

                <button>Abrir</button>

            </div>

        `;

    });

}