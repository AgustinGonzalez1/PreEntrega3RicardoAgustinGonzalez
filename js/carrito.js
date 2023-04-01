let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelector(".carrito-producto-eliminar");
const botonVaciarCarrito = document.querySelector("#vaciar-carrito");
const total = document.querySelector("#total");
const botonComprar = document.querySelector("#comprar-carrito");

function cargarProductosCarrito() {
	if (productosEnCarrito && productosEnCarrito.length > 0) {
		contenedorCarritoVacio.classList.add("displayNone");
		contenedorCarritoProductos.classList.remove("displayNone");
		contenedorCarritoAcciones.classList.remove("displayNone");
		contenedorCarritoComprado.classList.add("displayNone");

		contenedorCarritoProductos.innerHTML = "";

		productosEnCarrito.forEach((producto) => {
			const div = document.createElement("div");
			div.classList.add("carrito-producto");
			div.innerHTML = `
      <img src="${"." + producto.imagen}" alt="${producto.titulo}">
            <div class="carrito-producto-nombre">
              <h3>Nombre</h3>
              <p>${producto.titulo}</p>
            </div>
            <div class="carrito-producto-cantidad">
              <h3>Cantidad</h3>
              <p>${producto.cantidad}</p>
            </div>
            <div class="carrito-producto-precio">
              <h3>C/U</h3>
              <p>$${producto.precio}</p>
            </div>
            <div class="carrito-producto-subtotal">
              <h3>Subtotal</h3>
              <p>$${producto.precio * producto.cantidad}</p>
            </div>
            <button class="carrito-producto-eliminar" id:"${producto.id}"><i class="fa-solid fa-x"></i></button>
      `;

			contenedorCarritoProductos.append(div);
		});
	} else {
		contenedorCarritoVacio.classList.remove("displayNone");
		contenedorCarritoProductos.classList.add("displayNone");
		contenedorCarritoAcciones.classList.add("displayNone");
		contenedorCarritoComprado.classList.add("displayNone");
	}

	actualizarBotonesEliminar();
	actualizarTotal();
}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
	botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

	botonesEliminar.forEach((boton) => {
		boton.addEventListener("click", eliminarDelCarrito);
	});
}

function eliminarDelCarrito(e) {
	const idBoton = parseFloat(e.currentTarget.id);

	const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);

	productosEnCarrito.splice(index, 1);
	cargarProductosCarrito();

	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

botonVaciarCarrito.addEventListener("click", vaciarCarrito);

function vaciarCarrito() {
	productosEnCarrito.length = 0;
	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
	cargarProductosCarrito();
}

function actualizarTotal() {
	const totalCalculado = productosEnCarrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
	total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);

function comprarCarrito() {
	productosEnCarrito.length = 0;
	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

	contenedorCarritoVacio.classList.add("displayNone");
	contenedorCarritoProductos.classList.add("displayNone");
	contenedorCarritoAcciones.classList.add("displayNone");
	contenedorCarritoComprado.classList.remove("displayNone");
}
