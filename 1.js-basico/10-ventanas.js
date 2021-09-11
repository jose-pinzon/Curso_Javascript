'use strict'



///alertas - para dar un mensaje al usuario 

// alert('esta pagina no es segura')
// alert('bienvenido')


//Confirmacion - estos son para hacer la confirmacion que si querenmos hacer algo 

// var confirmacion = confirm('¿desea eliminar este objeto?')
// console.log(confirmacion)


//Ingreso de datos - estos son para poder poner informacion y poder guardarlos , todos los datos que se ingresen en este seran string si queremos que sean
// enteros entonces podermos usar parseint ,parseFloat , Number

var valor = prompt('¿que edad tienes ?' , 18)//el 18 es el valor por defecto que se guardara si no se cambia

let valor2 = parseInt(valor)
console.log(typeof valor2)