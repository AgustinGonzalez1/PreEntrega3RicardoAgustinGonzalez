const resultado = document.querySelector(".resultado");
const form = document.querySelector(".obtener-clima");
let nombreCiudad = document.querySelector("#ciudad");
const nombrePais = document.querySelector("#paises");
const mostrarOcultar = document.querySelector("#mostrar-ocultar");
const ocultarLuego = document.querySelector("#ocultarLuego");
const contenidoClima = document.querySelector(".contenido-clima");

/* input provincias */
const provincia1 = document.querySelector("#provincia1");
const provincia2 = document.querySelector("#provincia2");
const provincia3 = document.querySelector("#provincia3");
const provincia4 = document.querySelector("#provincia4");
const provincia5 = document.querySelector("#provincia5");
/* input provincias */

form.addEventListener("submit", (e) => {
	e.preventDefault();

	ocultarLuego.classList.add("displayNone");
	callApi(nombreCiudad.value, nombrePais.value);
	form.reset();
	nombreCiudad.innerHTML = `<option class="option" value="" selected disabled>Seleccione su provincia</option>`;
});

function error(mensaje) {
	mostrarOcultar.innerText = mensaje;
	setTimeout(() => {
		mostrarOcultar.innerText = "";
	}, 3000);
}

function callApi(ciudad, pais) {
	const apiId = "b003522e68b1533c23c7f316ec882f71";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiId}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			if (data.cod === "404") {
				error("ERROR: ciudad no encontrada");
			} else {
				mostrarClima(data);
			}
		})
		.catch((error) => console.log(error));
}

function mostrarClima(data1) {
	const {
		name,
		main: { temp, temp_min, temp_max },
		weather: [arr],
		sys: { country },
	} = data1;
	const contenido = document.querySelector("#contenido");

	const actual = kelvinACentigrados(temp);
	const min = kelvinACentigrados(temp_min);
	const max = kelvinACentigrados(temp_max);
	contenido.classList.add("center");
	contenido.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

	setTimeout(() => {
		contenido.innerHTML = `
    <h5>Clima en ${name}, ${country}</h5>
    <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="${arr.main}">
    <h2 id="tempAct" class="">${actual}°C</h2>
    <div class="flex">
    <small id="tempMin" class="">Min: ${min}°C</small>
    <small id="tempMax" class="">Max: ${max}°C</small>
    </div>
    `;
		const tempAct = document.querySelector("#tempAct");
		cambiarColor(actual, tempAct);

		const tempMin = document.querySelector("#tempMin");
		cambiarColor(min, tempMin);

		const tempMax = document.querySelector("#tempMax");
		cambiarColor(max, tempMax);

		contenido.classList.remove("center");
	}, 3000);
}

function kelvinACentigrados(temp) {
	return Math.ceil(parseFloat(temp - 273.15));
}

const ar = ["Buenos Aires", "Córdoba", "Santa Fe", "San Salvador de Jujuy", "Neuquén"];
const co = ["Bogotá", "Bolívar", "Amazonas", "Atlántico", "Santander"];
const es = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Málaga"];
const cr = ["San José", "Limón", "Heredia", "Guanacaste", "Alajuela"];
const us = ["California", "Texas", "Florida", "New York", "Illinois"];
const mx = ["Ciudad de México", "Nuevo León", "Jalisco", "Puebla", "Guerrero"];
const pe = ["Lima", "Arequipa", "Cusco", "Trujillo", "Chiclayo"];

function traerProvincias(value) {
	switch (value) {
		case "AR":
			recorrerPais(ar);
			break;
		case "CO":
			recorrerPais(co);
			break;
		case "ES":
			recorrerPais(es);
			break;
		case "CR":
			recorrerPais(cr);
			break;
		case "US":
			recorrerPais(us);
			break;
		case "MX":
			recorrerPais(mx);
			break;
		case "PE":
			recorrerPais(pe);
			break;
	}
}

nombrePais.addEventListener("change", (e) => {
	nombreCiudad.innerHTML = `<option class="option" value="" selected disabled>Seleccione su provincia</option>`;
	traerProvincias(e.target.value);
});

function recorrerPais(pais) {
	if (nombreCiudad.value === "") {
		pais.forEach((prov) => (nombreCiudad.innerHTML += `<option class="option">${prov}</option>`));
	} else {
		nombreCiudad.innerHTML = "";
	}
}

function cambiarColor(tipo, destino) {
	if (tipo <= 10) {
		destino.classList.add("menorA10");
	} else if (tipo >= 11 && tipo <= 12) {
		destino.classList.add("entre11y12");
	} else if (tipo >= 13 && tipo <= 14) {
		destino.classList.add("entre13y14");
	} else if (tipo >= 15 && tipo <= 16) {
		destino.classList.add("entre15y16");
	} else if (tipo >= 17 && tipo <= 18) {
		destino.classList.add("entre17y18");
	} else if (tipo >= 19 && tipo <= 20) {
		destino.classList.add("entre19y20");
	} else if (tipo >= 21 && tipo <= 22) {
		destino.classList.add("entre21y22");
	} else if (tipo >= 23 && tipo <= 24) {
		destino.classList.add("entre23y24");
	} else if (tipo >= 25 && tipo <= 26) {
		destino.classList.add("entre25y26");
	} else if (tipo >= 27 && tipo <= 28) {
		destino.classList.add("entre27y28");
	} else if (tipo >= 29 && tipo <= 30) {
		destino.classList.add("entre29y30");
	} else if (tipo >= 31 && tipo <= 32) {
		destino.classList.add("entre31y32");
	} else if (tipo >= 33 && tipo <= 34) {
		destino.classList.add("entre33y34");
	} else if (tipo >= 35 && tipo <= 36) {
		destino.classList.add("entre35y36");
	} else if (tipo >= 37 && tipo <= 38) {
		destino.classList.add("entre37y38");
	} else if (tipo >= 39 && tipo <= 40) {
		destino.classList.add("entre39y40");
	} else if (tipo >= 41 && tipo <= 42) {
		destino.classList.add("entre41y42");
	} else if (tipo >= 43 && tipo <= 44) {
		destino.classList.add("entre43y44");
	} else {
		destino.classList.add("mayorA45");
	}
}
