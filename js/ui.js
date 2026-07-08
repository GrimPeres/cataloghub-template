// ========================================
// HEADER
// ========================================

function carregarHeader() {

    const header = document.getElementById("header");

    header.innerHTML = `

        <div class="container py-5 text-center">

            <img
                src="${config.empresa.logo}"
                alt="${config.empresa.nome}"
                class="logo mb-4">

            <h1 class="display-5 fw-bold">

                ${config.empresa.nome}

            </h1>

            <p class="lead text-secondary">

                ${config.empresa.slogan}

            </p>

        </div>

    `;

}

// ========================================
// TEMA
// ========================================

function aplicarTema(){

    const root = document.documentElement;

    root.style.setProperty("--primary", theme.cores.primaria);

    root.style.setProperty("--secondary", theme.cores.secundaria);

    root.style.setProperty("--accent", theme.cores.destaque);

    root.style.setProperty("--background", theme.cores.fundo);

    root.style.setProperty("--surface", theme.cores.superficie);

    root.style.setProperty("--text", theme.cores.texto);

    root.style.setProperty("--text-light", theme.cores.textoClaro);

}

// ========================================
// CATÁLOGOS
// ========================================

function carregarCatalogos() {

    const container = document.getElementById("catalogos");

    container.innerHTML = "";

    catalogos.forEach(catalogo => {

        container.innerHTML += criarCard(catalogo);

    });

}
function criarCard(catalogo) {

    return `

        <div class="col-12 col-sm-6 col-lg-4">

            <div class="catalog-card h-100 shadow-sm">

                <img
                    src="${catalogo.capa}"
                    class="card-img-top"
                    alt="${catalogo.titulo}">

                <div class="card-body">

                    <h5 class="card-title">
                        ${catalogo.titulo}
                    </h5>

                    <p class="card-text">
                        ${catalogo.descricao}
                    </p>

                </div>

                <div class="card-footer bg-white border-0">

                    <a
                        href="${catalogo.pdf}"
                        target="_blank"
                        class="btn btn-dark w-100">

                        Abrir Catálogo

                    </a>

                </div>

            </div>

        </div>

    `;

}
// ========================================
// FOOTER
// ========================================
function carregarFooter(){

    document.getElementById("footer").innerHTML=`

        <div class="container text-center py-5">

            <small>

                ${config.empresa.nome}

            </small>

        </div>

    `;

}