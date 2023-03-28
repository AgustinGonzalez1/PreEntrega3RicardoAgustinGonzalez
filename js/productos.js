const productos = [
	{
		id: 1,
		nombre: "Campera acolchada",
		precio: 5000,
		imagen: "../assets/img/a1.jpg",
	},
	{
		id: 2,
		nombre: "Chaqueta",
		precio: 3000,
		imagen: "../assets/img/a2.jpg",
	},
	{
		id: 3,
		nombre: "Chaqueta abrigada",
		precio: 4000,
		imagen: "../assets/img/a3.jpg",
	},
	{
		id: 4,
		nombre: "Campera de abrigo",
		precio: 6000,
		imagen: "../assets/img/a4.jpg",
	},
	{
		id: 5,
		nombre: "Campera deportiva",
		precio: 2500,
		imagen: "../assets/img/a5.jpg",
	},
	{
		id: 6,
		nombre: "Pantalón beige",
		precio: 2700,
		imagen: "../assets/img/p1.jpg",
	},
	{
		id: 7,
		nombre: "Pantalón blanco",
		precio: 2500,
		imagen: "../assets/img/p2.jpg",
	},
	{
		id: 8,
		nombre: "Pantalón negro",
		precio: 2500,
		imagen: "../assets/img/p3.jpg",
	},
	{
		id: 9,
		nombre: "Jean negro",
		precio: 3200,
		imagen: "../assets/img/p4.jpg",
	},
	{
		id: 10,
		nombre: "Pantalón de vestir",
		precio: 3500,
		imagen: "../assets/img/p5.jpg",
	},
	{
		id: 11,
		nombre: "Remera azul",
		precio: 2000,
		imagen: "../assets/img/r1.jpg",
	},
	{
		id: 12,
		nombre: "Remera TROPIC blanca",
		precio: 2700,
		imagen: "../assets/img/r2.jpg",
	},
	{
		id: 13,
		nombre: "Remera GROUND blanc",
		precio: 2700,
		imagen: "../assets/img/r3.jpg",
	},
	{
		id: 14,
		nombre: "Remera roja",
		precio: 2000,
		imagen: "../assets/img/r4.jpg",
	},
	{
		id: 15,
		nombre: "Remera marron",
		precio: 2000,
		imagen: "../assets/img/r5.jpg",
	},
	{
		id: 16,
		nombre: "Remera roja",
		precio: 2000,
		imagen: "../assets/img/r6.jpg",
	},
	{
		id: 17,
		nombre: "Remera azul",
		precio: 2000,
		imagen: "../assets/img/r7.jpg",
	},
	{
		id: 18,
		nombre: "Remera celeste",
		precio: 2000,
		imagen: "../assets/img/r8.jpg",
	},
];

function guardarProductosEnLS(productos) {
	localStorage.setItem("productos", JSON.stringify(productos));
}

function cargarProductosEnLS() {
	return JSON.parse(localStorage.getItem("productos")) || [];
}

guardarProductosEnLS(productos);
