const div = document.querySelector("#mostrar-nav");
const asideTienda = document.querySelector("#aside-tienda");

div.addEventListener("click", mostrar);

function mostrar() {
	asideTienda.classList.toggle("height");
}
