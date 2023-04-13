const div = document.querySelector("#mostrar-nav");
const asideTienda = document.querySelector("#aside-tienda");
const linea1 = document.querySelector(".linea1");
const linea2 = document.querySelector(".linea2");
const linea3 = document.querySelector(".linea3");

div.addEventListener("click", mostrar);

function mostrar() {
	asideTienda.classList.toggle("height");
	linea1.classList.toggle("linea11");
	linea2.classList.toggle("linea22");
	linea3.classList.toggle("linea33");
}
