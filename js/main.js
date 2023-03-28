function renderProductos() {
	const productos = cargarProductosEnLS();
	let salida = "";
	for (producto of productos) {
		salida += `      <div class="producto">
    <img src="${"img/" + producto.imagen}" alt="${producto.nombre}">
    <div class="detalles">
      <h3 class="producto-titulo">${producto.nombre}</h3>
      <p class="producto-precio">$${producto.precio}</p>
      <button class="producto-agregar" id="boton-agregar">Agregar</button>
    </div>
  </div>`;
	}

	document.querySelector("#contenedor-carrito").innerHTML = salida;
}

renderProductos();
