const resultado = document.querySelector(".resultado");
const form = document.querySelector(".obtener-clima");
const nombreCiudad = document.querySelector("#ciudad");
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
  <p>Min: ${min}°C</p>
  <P>Max: ${max}°C</P>
  `;
}

function kelvinACentigrados(temp) {
	return parseInt(temp - 273.15);
}

function traerProvincias(value) {
	switch (value) {
		case "AR":
			provincia1.innerText = `Buenos Aires`;
			provincia2.innerText = `Córdoba`;
			provincia3.innerText = `Santa Fe`;
			provincia4.innerText = `San Salvador de Jujuy`;
			provincia5.innerText = `Neuquén`;
			break;
		case "ES":
			provincia1.innerText = `Madrid`;
			provincia2.innerText = `Barcelona`;
			provincia3.innerText = `Valencia`;
			provincia4.innerText = `Sevilla`;
			provincia5.innerText = `Málaga`;
			break;
		case "CO":
			provincia1.innerText = `Bogotá`;
			provincia2.innerText = `Antioquia`;
			provincia3.innerText = `Amazonas`;
			provincia4.innerText = `Atlántico`;
			provincia5.innerText = `Santander`;
			break;
		case "CR":
			provincia1.innerText = `San José`;
			provincia2.innerText = `Limón`;
			provincia3.innerText = `Heredia`;
			provincia4.innerText = `Guanacaste`;
			provincia5.innerText = `Alajuela`;
			break;
		case "US":
			provincia1.innerText = `California`;
			provincia2.innerText = `Texas`;
			provincia3.innerText = `Florida`;
			provincia4.innerText = `New York`;
			provincia5.innerText = `Illinois`;
			break;
		case "MX":
			provincia1.innerText = `Ciudad de México`;
			provincia2.innerText = `Nuevo León`;
			provincia3.innerText = `Jalisco`;
			provincia4.innerText = `Puebla`;
			provincia5.innerText = `Guerrero`;
			break;
		case "PE":
			provincia1.innerText = `Lima`;
			provincia2.innerText = `Arequipa`;
			provincia3.innerText = `Cusco`;
			provincia4.innerText = `Trujillo`;
			provincia5.innerText = `Chiclayo`;
			break;
	}
}

nombrePais.addEventListener("change", (e) => {
	traerProvincias(e.target.value);
});
