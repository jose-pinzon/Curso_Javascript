'use strict'

var pelicula = {
	nombre: "goku",
	año: 2019,
	autor: 'felipe'
}

var peliculas = [{
	nombre: "titanes",
	año: 2018,
	autor: 'guillermo'
},
pelicula
]

pelicula.nombre = "titanes del pacifico" ; //asi se puede cambiar el valor de un dato de un json u objeto
var caja = document.querySelector("#caja1");

for (var i in peliculas) {
	let p = document.createElement("p");
	p.append(peliculas[i].nombre,"-",peliculas[i].año);
	caja.append(p);
	
}