'use strict'

// window.addEventListener("Load",function(){


var form = document.querySelector("#FormPeliculas");
form.addEventListener("submit", function(){
	var input = document.querySelector('#pelicula').value;
	if(input.length > 0){
		localStorage.setItem(input,input);
	}
});



let caja_mostrar = document.querySelector('#insert_pelicula');
for (var i in localStorage) {
	if (typeof localStorage[i] == "string") {
		let li = document.createElement("li");
		li.append(localStorage[i]);
		caja_mostrar.append(li);
	}
}


var formb = document.querySelector("#FormPeliculasEliminar");
formb.addEventListener("submit", function(){
	var peliculaEliminar = document.querySelector('#peliculaBorrar').value;
	if(peliculaEliminar.length > 0){
		localStorage.removeItem(peliculaEliminar);
	}
});

// });