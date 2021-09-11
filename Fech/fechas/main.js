
'use strict'
window.addEventListener("load",function(){
	var fecha = new Date(); // nos sacar todos los datos que podemos tener en una fecha

	let año = fecha.getFullYear();
	let mes = fecha.getMonth();
	let dia = fecha.getDate();
	let hora = fecha.getHours();



	console.log(fecha);

	var Datos_fechas = `
	El año es: ${año}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es:${hora} `;
	console.log(Datos_fechas);



	//Funciones matematicas en javascript
	var num_aleatorio = Math.random();

	console.log(num_aleatorio);

});