const productos = [
	{
		id: 1,
		titulo: "Campera acolchada",
		precio: 5000,
		imagen: "./assets/img/a1.jpg",
		seccion: {
			nombre: "Camperas",
		},
	},
	{
		id: 2,
		titulo: "Chaqueta",
		precio: 3000,
		imagen: "./assets/img/a2.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 3,
		titulo: "Chaqueta abrigada",
		precio: 4000,
		imagen: "./assets/img/a3.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 4,
		titulo: "Campera de abrigo",
		precio: 6000,
		imagen: "./assets/img/a4.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 5,
		titulo: "Campera deportiva",
		precio: 2500,
		imagen: "./assets/img/a5.jpg",
		seccion: {
			nombre: "Camperas",
			id: "camperas",
		},
	},
	{
		id: 6,
		titulo: "Pantalón beige",
		precio: 2700,
		imagen: "./assets/img/p1.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 7,
		titulo: "Pantalón blanco",
		precio: 2500,
		imagen: "./assets/img/p2.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 8,
		titulo: "Pantalón negro",
		precio: 2500,
		imagen: "./assets/img/p3.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 9,
		titulo: "Jean negro",
		precio: 3200,
		imagen: "./assets/img/p4.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 10,
		titulo: "Pantalón de vestir",
		precio: 3500,
		imagen: "./assets/img/p5.jpg",
		seccion: {
			nombre: "Pantalones",
			id: "pantalones",
		},
	},
	{
		id: 11,
		titulo: "Remera azul",
		precio: 2000,
		imagen: "./assets/img/r1.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 12,
		titulo: "Remera TROPIC blanca",
		precio: 2700,
		imagen: "./assets/img/r2.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 13,
		titulo: "Remera GROUND blanc",
		precio: 2700,
		imagen: "./assets/img/r3.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 14,
		titulo: "Remera roja",
		precio: 2000,
		imagen: "./assets/img/r4.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 15,
		titulo: "Remera marron",
		precio: 2000,
		imagen: "./assets/img/r5.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 16,
		titulo: "Remera roja",
		precio: 2000,
		imagen: "./assets/img/r6.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 17,
		titulo: "Remera azul",
		precio: 2000,
		imagen: "./assets/img/r7.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 18,
		titulo: "Remera celeste",
		precio: 2000,
		imagen: "./assets/img/r8.jpg",
		seccion: {
			nombre: "Remeras",
			id: "remeras",
		},
	},
	{
		id: 19,
		titulo: "Short hojas",
		precio: 2400,
		imagen: "./assets/img/s1.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 20,
		titulo: "Short flores",
		precio: 2500,
		imagen: "./assets/img/s2.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 21,
		titulo: "Short palmeras",
		precio: 2800,
		imagen: "./assets/img/s3.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 22,
		titulo: "Short plantas",
		precio: 2500,
		imagen: "./assets/img/s4.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 23,
		titulo: "Short florecer azul",
		precio: 2200,
		imagen: "./assets/img/s5.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 24,
		titulo: "Short florecer rojo",
		precio: 2200,
		imagen: "./assets/img/s6.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
	{
		id: 25,
		titulo: "Short tucán",
		precio: 2900,
		imagen: "./assets/img/s7.jpg",
		seccion: {
			nombre: "Shorts",
			id: "shorts",
		},
	},
];

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
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

		contenedorProductos.append(div);
	});
	actualizarBotonesAgregar();
}

cargarProductos(productos);

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
