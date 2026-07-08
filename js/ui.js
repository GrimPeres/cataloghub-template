// ========================================
// HEADER
// ========================================

function criarHero() {

    return `

        <section class="hero">

            <div class="container hero-content">

                <img
                    src="${config.empresa.logo}"
                    alt="${config.empresa.nome}"
                    class="hero-logo">

                <h1 class="hero-title">
                    ${config.empresa.nome}
                </h1>

                <p class="hero-slogan">
                    ${config.empresa.slogan}
                </p>

                <p class="hero-description">
                    ${config.empresa.descricao}
                </p>

                <a
                    href="${catalogo.pdf}"
                    target="_blank"
                    class="catalog-button">

                    Abrir Catálogo

                </a>

            </div>

        </section>

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
                        class="catalog-button w-100">
                        href="${catalogo.pdf}"
                        target="_blank"


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