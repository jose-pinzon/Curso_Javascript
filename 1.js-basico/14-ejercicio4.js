'use strict'

/**
 * Mostrar todos los numero impares introducidos por el usuario
 */

    var Numero1 = parseInt(prompt('¿Coloca un numero ?'))
    var Numero2 = parseInt(prompt('¿Cual es tu segundo numero?'))


    //mostrar numero impares 

//     while(Numero1 < Numero2){
//         Numero1 ++
//         if(Numero1%2 != 0 ){
//         document.write(Numero1 + ' es impar'+"<br>")
//     }
// }

    //mostrar numero pares
    while(Numero1 < Numero2){
        Numero1 ++
        if(Numero1%2 == 0){
            console.log(Numero1 +'es par')
        }
    }