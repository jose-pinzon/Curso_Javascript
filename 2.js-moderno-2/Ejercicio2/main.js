'use strict'


window.addEventListener('load',function(){



var fomulario = document.querySelector('#formulario');
formulario.addEventListener('submit',function(e){
	e.preventDefault();
	let nombre = document.querySelector('#nombre').value;
	let edad = document.querySelector('#edad').value;
	let alerta = document.querySelector('#alert_nombre'); 
	let alert2 = document.querySelector('#alert_edad'); 
	// var input_buscar = document.querySelector('#input_buscar').value;
	var lis_peliculas = document.querySelector('#cajapelicula');

	
	while(nombre.trim() == null ||nombre.length < 4 ){
		// alert('incorrecto');
		alerta.innerHTML = "nombre no correcto";
		
		return false;
	}
		alerta.style.display = 'none';
	

	while(edad.trim() == null ||edad.length <= 0 || isNaN(edad)){
		alert2.innerHTML = "edad incorrecta";
		return false;
	}
		alert2.style.display = 'none';


var peliculas = ['Spider Man', 'Superman', 'Dragon Ball Super', 'La era del hielo','Thor'];
lis_peliculas.style.border='1px solid black';
lis_peliculas.style.width = '500px';
lis_peliculas.style.padding = '40px';
lis_peliculas.style.margin = '0px auto'
lis_peliculas.style.marginTop = '20px'

let input_buscar = document.createElement("input");

console.log(input_buscar.value);

for(let i in peliculas){
	let li = document.createElement("Li");
	li.append(peliculas[i]);
	lis_peliculas.append(li);
	lis_peliculas.append(input_buscar);
}



	
});























});
