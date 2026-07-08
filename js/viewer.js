const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

console.log(id);