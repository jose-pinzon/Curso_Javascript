//condicional if

var edad1 = 24
var edad2 = 72
var nombre = "luis"
/*
operadoeres relacionales 

Mayor = >
Menor = <
mayor o igua : >=
menor o igual: <=
diferente : != 
iguale : =

*/



if (edad2>= 20 ) {
	alert( "ya eres un adulto "+ nombre )
	if (edad2 == 24) {
		// alert("a esta edad de "+ edad1+' ' + nombre +' '+ "ya debiste de  haber terminado la universidad");
	}
}else{
	// alert('todavia eres un niño')
}


//condicionales  con && o con || 

var num1 = 50
var num2 = 109

if (num1 > 100 || (num1 >= 50 && num1 <= 100) ) {//el parentesis extra es para poder hacer prioridad en una condicion
	// console.log('el numero paso ')
}else{
	// console.log('el numero no paso')
}


// condicional swich


