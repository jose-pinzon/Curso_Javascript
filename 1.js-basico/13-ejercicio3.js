'use strict'

/*
Hacer un programa que muestre todos los numeros entre 2 numeros introducidos por el usuario
*/

var numI =parseInt( prompt('introduce un numero que este al inicio'))
var numF =  parseInt(prompt('introduce un numero que este al final'))
var total = 0;

document.write("<h1>Del"+' '+numI+' '+"a"+' '+numF+' '+"existen estos numeros</h1>")//este es para poder poner los datos en la pagina principal

for (var i = numI; i <=numF ; i++) {
	document.write(i+"</br>")
}

	
