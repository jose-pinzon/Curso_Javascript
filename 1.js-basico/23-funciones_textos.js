'use strict'


var texto1 = "este es el primer texto "
var texto2 = "este es el segundo texto"
var numero = 212

var datoMostrar = numero.toString();//este metodo tostring es para poder convertir nunmeros a string
    datoMostrar = texto1.toUpperCase();//este es para convertirlo a mayusculas
    datoMostrar = texto2.toLowerCase();//este para convertir todos a minusculas
    
// document.write(typeof datoMostrar)
// document.write( datoMostrar)
//calcular longitud del texto se usa .length solo cuenta string , esto nos ayudara con los arrays



var texto3 = 'jose es un futuro ingeniero de software  dentro de unos años futuro';
var texto3_1 =texto3.trim(); //esto es para que el length no cuente hasta los espacios porque con el trim se elimina eso
var partes = ['palabra1','palabra2', 'palabra3'];
document.write(partes.length);










///////////------------------------------------------Busqueda -------------------------------------------------------

var  buscar = texto3.indexOf("futuro") // y nos pasara la primera coincidencia que aparesca tambien se puede usar search
var busqueda = texto3.lastIndexOf("futuro")//este buscara la ultima coincidencia
var busqueda2 = texto3.match(/futuro/g)//este nos traira los elementos en un array el g nos servira para poder mostrar todos los elementos
var busqueda3 = texto3.substr(15 , 8)//este nos permite decir donde y cuantos elemntos queremos que saque

/**
 * metodos existentes :
 * 
 * startsWith es para buscar al inicio las palabra que pongamos 
 * endWith este es para poder buscar si la palabra se encuentra al final
 * includes es para poder buscar una palabra dentro del string  y devuelve true o false dependiendo si existe o no la palabra
 */
document.write(buscar);
document.write(busqueda);
console.log(busqueda2);
console.log(busqueda3);


///////////------------------------------------------Remplasar textos  -------------------------------------------------------


var text = "En la clasificación científica de los seres vivos, los animales Metazoa constituyen un reino que reúne un amplio grupo de organismos que son eucariota "

var remplazar = text.replace("clasificación", "clasificar") // este sirve para poder remplazar una palabra del estring a uno que tengamos
var cortar = text.slice(5 , 50) // sirve para decir de donde a donde queremos que corte el texto 
var string  = text.split(" ") // sirve para poner datos en un array y si se quieres se puede poner separadores que queramos en el parentesis
// el trim es para quitar espacios


console.log(remplazar)
console.log(cortar)
console.log(string)
