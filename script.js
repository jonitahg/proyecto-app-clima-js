//* ====== ENDPOINT ====== *//

const api_key = '3cb96ca15e1220a958157841fc901f16';
const endpoint = `https://api.openweathermap.org/data/2.5/weather`;

//* ====== ELEMENTOS DOM ====== *//

const btn = document.querySelector('#botonBusqueda');
const data_container = document.querySelector('#datosClima');

btn.addEventListener('click', buscarClima);

function buscarClima() {
	let city = document.querySelector('#ciudadEntrada').value;
	fetch(`${endpoint}?q=${city}&appid=${api_key}`)
		.then((response) => response.json())
		.then((data) => {
			// VACIAR
			data_container.innerHTML = '';
			// CREACION DE ELEMENTOS
			let cityTitle = document.createElement('h2');
			let cityDescription = document.createElement('p');
			let climateImg = document.createElement('img');

			//CONTENIDO
			cityTitle.innerHTML = `${data.name}, ${data.sys.country}`;
			temp = Math.round(data.main.temp - 273.15); // convercion K a C
			cityDescription.innerHTML = `Temperatura: ${temp} C°`;
			climateImg.setAttribute(
				'src',
				`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
			);
			// AGREGANDO A CONTENEDOR
			data_container.appendChild(cityTitle);
			data_container.appendChild(cityDescription);
			data_container.appendChild(climateImg);
		})
		.catch(() => alert('No se encontro la ciudad deseada...'));
}
