'use strict'

function ambito(valor1, dividir, multiplicar){
var textlocal = "no se puede llamar fuera de la funcion"


    var num1 = []//p
    var num1 = 4 + 5 //p


    console.log(typeof num1.toString())//con tostring podemos convertir un numero a string
    console.log(dividir(num1));//prueba
    console.log(multiplicar(num1))
} 


var texto = "soy un texto cualquiera"
var text2 = "soy texto 2 llamado desde no parametro"
ambito(texto , 

    dividir =>{
    return "division :" + (dividir/2)//prueba
},

multiplica => {
    return "multiplicacion :" + (multiplica*2)
}

)