'use strict'
/**
 * Muestre todos los numero divisores de un mumero que se introduce en un prompt
 */

var Num = parseInt(prompt('Coloque un numero'))

for(var i = 1 ; i <= Num ;i++ ){
    if(Num% i == 0){
        console.log(i +'es divisor')
    }
}