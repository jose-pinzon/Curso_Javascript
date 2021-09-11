'use strict '

/*
Calculadora :
-Pida 2 numeros por pantalla
-Si metemos 1 mal que lo vuelva a pedir
-mostar en el cuerpo de la pagina , un una alerta y por consola el resultado de sumar, restar , dividir y multiplicar
*/


var num1 = parseInt(prompt('¿Coloque el primer numero?'))
var num2 = parseInt(prompt('¿Coloque el segundo numero?'))



///Mi solucion
        while (isNaN(num1) && isNaN(num2)) {
            alert('solo se aceptan numeros')
        }

        document.write(num1 + num2 + "<br>")

        document.write(num1 * num2+ "<br>")

        document.write(num1 / num2+ "<br>")

        document.write(num1 - num2+ "<br>")


//Solucion del curso 

// while (num1 <= 0 || num2 <=0 || isNaN(num1) || isNaN(num2)) {
//     var num1 = parseInt(prompt('¿Coloque el primer numero?'))
//     var num2 = parseInt(prompt('¿Coloque el segundo numero?'))
// }

// var resultado = "La suma es:"+(num1 + num2)+ "<br>"+
//                 "La resta es:"+(num1 - num2)+ "<br>"+
//                 "La division es:"+(num1 / num2)+ "<br>"+
//                 "La multiplicacion es:"+(num1 * num2)+ "<br>"


// // este segundo nos servira para poder mostrarlo en una alerta o en el console ya que el br solo es un salto de linea en html pero en la consola y en los alerts se tiene problemas                
// var resultado2 = "La suma es:"+(num1 + num2)+ "\n "+
//                 "La resta es:"+(num1 - num2)+ "\n"+
//                 "La division es:"+(num1 / num2)+ "\n"+
//                 "La multiplicacion es:"+(num1 * num2)+ "\n"


// console.log(resultado2)
// alert(resultado2)
// document.write(resultado)

