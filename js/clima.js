const resultado = document.querySelector(".resultado");
const form = document.querySelector(".obtener-clima");
let nombreCiudad = document.querySelector("#ciudad");
const nombrePais = document.querySelector("#paises");
const mostrarOcultar = document.querySelector("#mostrar-ocultar");
const ocultarLuego = document.querySelector("#ocultarLuego");

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

	contenido.innerHTML = `
  <h5>Clima en ${name}, ${country}</h5>
  <img src="https://openweathermap.org/img/wn/${arr.icon}@2x.png" alt="${arr.main}">
  <h2>${actual}°C</h2>
  <div class="flex">
  <small>Min: ${min}°C</small>
  <small>Max: ${max}°C</small>
  </div>
  `;
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
	nombreCiudad.innerHTML = `<option class="option" value="" selected disabled>Seleccione su país</option>`;
	traerProvincias(e.target.value);
});

function recorrerPais(pais) {
	if (nombreCiudad.value === "") {
		pais.forEach((prov) => (nombreCiudad.innerHTML += `<option class="option">${prov}</option>`));
	} else {
		nombreCiudad.innerHTML = "";
	}
}
