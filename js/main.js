function renderProductos() {
	const productos = cargarProductosEnLS();
	let salida = "";
	for (producto of productos) {
		salida += `      <div class="producto">
    <img src="${"img/" + producto.imagen}" alt="">
    <div class="detalles">
      <h3 class="producto-titulo">TITULO</h3>
      <p class="producto-precio">$500</p>
      <button class="producto-agregar">Agregar</button>
    </div>
  </div>`;
	}

	document.querySelector("#contenedor-carrito").innerHTML = salida;
}

renderProductos();
