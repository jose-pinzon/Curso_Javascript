
/*
programa que pida 2 numeros y que diga cual es mayor , cual es menor , y si so iguales
PLUS: Si los numeros no son un numero o son menores o iguales  cero ,nos lo vuelva a pedir
*/

// var num1 = parseInt(prompt('Pon un numero',0))
// var num2 = parseInt(prompt('Pon otro numero',0))


//mi solucion
// if(num1 && num2 >= 1  && typeof(Number)){
// 	if (num1 > num2 ) {
// 		console.log('El numero'+ ' '+num1+ ' '+'es mayor que el '+' '+num2 )
// 	}else if (num1 < num2) {
// 		console.log('El numero'+ ' '+num2+ ' '+'es mayor que el '+' '+num1)
// 	}else{ 
// 		console.log('son iguales los numeros')
// 	}
// }else{
// 	alert('por favor coloque solo numeros o un valor mayor que 0')
// }


//solucion del curso 

while(num1 <= 0 ||	num2<=0 ||isNaN(num1) ||isNaN(num2)){   //el isNaN no servira para poder verificar si los datos son numeros o son string y dara un resultado true o false
	// dependiendo _ si es string sera true y volvera  preguntar si es false porque ya es numero pasara al siguiente pregunta
	var num1 = parseInt(prompt('Pon un numero',0))
	var num2 = parseInt(prompt('Pon otro numero',0))
}	

if (num1 == num2) {
	alert('los numero son iguales')
}else if(num1 > num2){
	alert('EL NUMERO MAYOR ES :' + num1)
	alert('EL NUMERO MENOR ES:' + num2)
}else if (num2 > num1) {
	alert('EL NUMERO MAYOR ES :' + num2)
	alert('EL NUMERO MENOR ES:' + num1)
}else{
	alert('introduscar un numero ')
}