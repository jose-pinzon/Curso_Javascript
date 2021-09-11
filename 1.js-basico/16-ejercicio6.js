'use strict'

/*
Que nos diga si un numero es par o impar 
1.-Ventana prompt
2.-Si no es valido que nos pida de nuevo el numero 
*/

var numero = parseInt(prompt('Introduce un numero'))


//Mi solucion

    // if(isNaN(numero)){
    //     alert('coloque un numero por favor')
    // }else{
    //     if(numero % 2 ==0 ){
    //         document.write(numero + ' es par');
    //     }else if(numero %2 != 0){
    //         document.write(numero + 'es impar')
        
    //     }
    // }


 
//Solucion del curso

while(isNaN(numero)){
    numero = parseInt(prompt('Introduce un numero'))
}

if(numero%2 == 0 ){
    alert('el numero es par')

}else {
    alert('es impar')
}

