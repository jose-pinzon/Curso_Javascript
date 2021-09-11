"use strict";
/**
 * 1.- pedir 6 numeros por pantalla y meterlos en un array
 * 2.-Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola
 * 3.-Ordenarlo y mostrarlo
 * 4.-Invertir su orden y mostrarlo
 * 5.-mostrar cuantos elemntos tiene el array
 * 6.-buscar un valor introducido por el usuario , que nos diga si lo encuentra y su indice
 */






/********************MI SOLUCION AL PROBLEMA******************** */

// var numeros_guardados = [];

// do {
//     var numero = prompt("¿introduce un numero?");
//     if (numero != "") {
//         numeros_guardados.push(numero);
//     }else{
//         alert('console un numero')
//     }

// } while (numeros_guardados.length < 6);

// // numeros_guardados.pop();
// numeros_guardados.sort()//para ordenar
// console.log(numeros_guardados)
// document.write("<h1>"+numeros_guardados+"</h1>")
// document.write("<h1> cantidad: "+numeros_guardados.length+"</h1>")

// numeros_guardados.reverse();
// console.log(numeros_guardados)
// document.write("<h3>"+numeros_guardados+"</h3>")

// var dato_usuario = prompt('¿coloque el numero a buscar?')
// var  buscar = numeros_guardados.find(num => num == dato_usuario )
// var  buscar_in = numeros_guardados.findIndex(num => num == dato_usuario )

// console.log(buscar)
// console.log(buscar_in)






/******************** SOLUCION DEL CURSO ******************** */


// funcion que ayuda a recorrer el array
function mostrarArray(elementos, text = "") {
    document.write("<h1> Contenido del array "+text+ "</h1>")

    document.write("<ul>")

        elementos.forEach((elem, index) => {
        document.write("<li>" + elem + "</li>")

    document.write("</ul>")
  })
}



//pedir valores +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var num = new Array(6)  (primera forma paso 1) el 6 es para indicarle que el array tendra 6 datos
var num = []; //paso 2
for (let i = 0; i <= 5; i++) {
  // num[i] = parseInt(prompt('¿coloque un numero porfavor?',0)) (primera forma paso 2) con el indice se guardara en cada interaccion
  num.push(parseInt(prompt("¿coloque un numero porfavor?", 0))); //segunda forma
}




//mostrar en la consola+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(num);



//mostrar en el cuerpo+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
mostrarArray(num,"desordenado")
                    // document.write("<h1> Contenido del array </h1>")
                    // num.forEach((numero , index)=>{                                  se paso arriba  en la funcion
                    //     document.write("<strong>"+numero +"</strong></br>");
                    // })



//ordenar y mostrar++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
num.sort(function (a, b) {//esto sirve para poder ordenar los valores de menos a mayor
    return a-b
});



mostrarArray(num, "Ordenado");
console.log(num);


//revertidos ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
num.reverse()
mostrarArray(num , "reversa");


//contar elementos ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
document.write("Los datos son: "+ num.length)


//Busqueda ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var busqueda = parseInt(prompt("coloca el numero a buscar ", 0 ))
var posicion = num.findIndex(num => num == busqueda)

if(posicion && posicion != -1){
    document.write("<h1> Se encontro </h1> ")
    document.write("<h1> la posiscion de busqueda es:"+posicion+"</h1> ")
}else{
    alert('no se a encontrado')
}