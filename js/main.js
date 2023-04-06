let productos = [];

fetch("./js/productos.json")
	.then((response) => response.json())
	.then((data) => {
		productos = data;
		cargarProductos(productos);
	});

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const contador = document.querySelector("#contador");

function cargarProductos(productosElegidos) {
	contenedorProductos.innerHTML = "";

	productosElegidos.forEach((producto) => {
		const div = document.createElement("div");
		div.classList.add("producto");
		div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}"><span class="span1"></span>Agregar<span class="span2"</span></button>
            </div>
        `;

		contenedorProductos.append(div);
	});
	actualizarBotonesAgregar();
}

botonesCategorias.forEach((boton) => {
	boton.addEventListener("click", (e) => {
		botonesCategorias.forEach((boton) => boton.classList.remove("active"));
		e.currentTarget.classList.add("active");

		if (e.currentTarget.id != "todos") {
			const productoCategoria = productos.find((producto) => producto.seccion.id === e.currentTarget.id);
			tituloPrincipal.innerText = productoCategoria.seccion.nombre.toUpperCase();
			const productosBoton = productos.filter((producto) => producto.seccion.id === e.currentTarget.id);
			cargarProductos(productosBoton);
		} else {
			tituloPrincipal.innerText = "TODOS LOS PRODUCTOS";
			cargarProductos(productos);
		}
	});
});

function actualizarBotonesAgregar() {
	botonesAgregar = document.querySelectorAll(".producto-agregar");

	botonesAgregar.forEach((boton) => {
		boton.addEventListener("click", agregarAlCarrito);
	});
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
	productosEnCarrito = JSON.parse(productosEnCarritoLS);
	contar();
} else {
	productosEnCarrito = [];
}

function agregarAlCarrito(e) {
	//Notificación al agregar
	Toastify({
		text: "Agregado al carrito!",
		duration: 3000,
		destination: "",
		newWindow: false,
		close: true,
		gravity: "top", // `top` or `bottom`
		position: "right", // `left`, `center` or `right`
		offset: {
			x: 0, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
			y: 80, // vertical axis - can be a number or a string indicating unity. eg: '2em'
		},
		stopOnFocus: true, // Prevents dismissing of toast on hover
		style: {
			background: "#17234d",
			color: "#959dff",
			borderRadius: "5px",
			boxShadow: "0px 5px 18px 5px rgba(0, 0, 0, 0.75)",
		},
		onClick: function () {}, // Callback after click
	}).showToast();

	//Resto del código
	const idBoton = parseFloat(e.currentTarget.id);
	const productoAgregado = productos.find((producto) => producto.id === idBoton);

	if (productosEnCarrito.some((producto) => producto.id === idBoton)) {
		const index = productosEnCarrito.findIndex((producto) => producto.id === idBoton);
		productosEnCarrito[index].cantidad++;
	} else {
		productoAgregado.cantidad = 1;
		productosEnCarrito.push(productoAgregado);
	}
	contar();

	localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function contar() {
	let numero = productosEnCarrito.reduce((acc, prod) => acc + prod.cantidad, 0);
	contador.innerText = numero;
}
