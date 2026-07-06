function carregarHeader() {

    const header = document.getElementById("header");

    header.innerHTML = `
        <img src="${config.empresa.logo}" alt="${config.empresa.nome}">

        <h1>${config.empresa.nome}</h1>

        <p>${config.empresa.slogan}</p>
    `;

}
function carregarFooter() {

    const footer = document.getElementById("footer");

    footer.innerHTML = `
        <p>${config.contactos.email}</p>
        <p>${config.contactos.telefone}</p>
    `;

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