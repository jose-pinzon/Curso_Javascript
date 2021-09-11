'use strict'

window.addEventListener('load',function(){

var form = document.querySelector("#formulario");
var box = document.querySelector(".box");

box.style.display = 'none';

form.addEventListener("submit",function(e){
	// e.preventDefault();

	let nombre = document.querySelector("#nombre").value;//el value es para sacar el valor de lo seleccionado
	let apellido = document.querySelector("#apellido").value;
	let edad = document.querySelector("#edad").value;

	if (nombre.trim() == null || nombre.length == 0 ) {
		alert(' el nombre no es valido')
		let error = document.querySelector("#error").innerHTML = "el nombre no es valido";
		return false; // para no poder continuar ejecutadose
	}
	if (apellido.trim() == null || apellido.length == 0 ) {
		alert(' el apellido no es valido')
		return false;
	}

	if (edad == null || edad <= 0 || isNaN(edad) ) {
		alert(' la edad no es valida')
		return false;
	}



	box.style.display = 'block';
	let p_nombre = document.querySelector('#p_nombre  span'); //le colocamos span para selecionarlo porque esta dentro de nuestra p con esta id
	let p_apellido = document.querySelector('#p_apellido  span');
	let p_edad = document.querySelector('#p_edad  span');

	p_nombre.innerHTML =nombre; //el innerHTML sirve para colocar los datos del dom a  html
	p_apellido.innerHTML = apellido;
	p_edad.innerHTML = edad;







	//-----------------------------Segunda forma de agregar los datos al otro select-------------------------------------------------------------------

	// var datos_form = [nombre, apellido,edad];
	// for(let i in datos_form){
	// 	var parrafo = document.createElement("p");
	// 	parrafo.append(datos_form[i]) // solo seleccionaremos el indice del dato a guardar
	// 	box.append(parrafo);
	// }






//el append sirve para agregar los datos a una variable es casi como un push
// ----------------------manera 1 de agregar los datos al otro select---------------------------------------
	// var parrafo = document.createElement("p");
	// parrafo.append(nombre);
	// parrafo.append(apellido);
	// parrafo.append(edad);

	// box.append(parrafo);
})

});