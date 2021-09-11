'use strict'

if (typeof(Storage) !== 'undefined') {
	console.log('si esta disponible')
}else {
	console.log('no esta disponible')
}

// Guardar
localStorage.setItem("titulo","este es un dato para el storage")


//mostrar
document.querySelector("#caja1").innerHTML =  localStorage.getItem("titulo");


// Guardar objetos
/*
Cuando se hacen peticiones http los json no pueden ir de manera pura por lo que hay que convertirlos a JSONstring
*/

var usuario = {
	nombre:'jose',
	edad :17,
	email:'ebjose781@gmail.com'
}

localStorage.setItem("usuario", JSON.stringify(usuario));//como no se pueden enviar los json de manera pura se tiene que usar el metodo JSON.stringify


// Traer el objeto
var Json_usuario =  JSON.parse(localStorage.getItem("usuario"));//con el JSON.parse se puede hacer que el objeto del local se pueda usar

document.querySelector("#caja2").append(Json_usuario.nombre+' - '+Json_usuario.email)


// Eliminar localStorage
/* Si se eliminar el storage despues de crearse lo datos que muestran estos lo seguiran haciendo porque cada vez que la pagina primero se creara
y se mostrara y por ultimo se eliminara*/
// localStorage.removeItem("usuario");

// Se pueden eliminar todos los datos del storage como se muestra abajo
localStorage.clear();

console.log(Json_usuario)