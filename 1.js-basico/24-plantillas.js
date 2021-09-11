'use strict'

var nombre = prompt('pon nombre')
var apellido = prompt('pon apellido')

/*
Forma no muy conveniente
document.write('bienvenido' +' '+ nombre +' '+ apellido);

*/

// Mejor forma es hacerlo con platillas porque se pueden enlazar con las variables y haci como esta en el codigo haci estara en la vista

var text = `
<h1>plantilla</h1>
<p> el nombre es ${nombre} y el apellido es ${apellido}</p>
`


// document.write(text);