function carregarHeader(){

    document.getElementById("header").innerHTML = `

        <div class="container py-5 text-center">

            <img src="${config.empresa.logo}"
                 class="img-fluid mb-3"
                 style="max-height:80px">

            <h1>${config.empresa.nome}</h1>

            <p class="lead">

                ${config.empresa.slogan}

            </p>

        </div>

    `;

}
function carregarCatalogos(){

    const container = document.getElementById("catalogos");

    container.innerHTML = "";

    catalogos.forEach(catalogo=>{

        container.innerHTML += `

            <div class="col-12 col-sm-6 col-lg-4">

                <div class="card h-100 shadow-sm">

                    <img
                        src="${catalogo.capa}"
                        class="card-img-top"
                        alt="${catalogo.titulo}">

                    <div class="card-body">

                        <h5>

                            ${catalogo.titulo}

                        </h5>

                        <p>

                            ${catalogo.descricao}

                        </p>

                    </div>

                    <div class="card-footer bg-white border-0">

                        <a
                            href="${catalogo.pdf}"
                            target="_blank"
                            class="btn btn-dark w-100">

                            Abrir catálogo

                        </a>

                    </div>

                </div>

            </div>

        `;

    });

}
function carregarFooter(){

    document.getElementById("footer").innerHTML=`

        <div class="container text-center py-5">

            <small>

                ${config.empresa.nome}

            </small>

        </div>

    `;

}