    'use strict'

//Funciones
//una funcion es una agrupacion reutilizable de un conjunto de instrucciones


//definicion   
// se pueden poner parametros que no sean obligatorios como el "mostrar ya que en este tendra un valor por defecto"




// ------------------------------------------------------------------------------------------------------------------------------------------------------
                                        // function calculadora(num1,num2,mostrar= false) {//dentro de los parentesis va los parametros que nos serviran para que nuestra funcion tenga datos dinamicos
                                        //     //consunto de instruciones
                                        //     if (mostrar== false) {
                                        //         console.log("suma :"+ (num1 + num2))
                                        //         console.log("resta :" + (num1 - num2))
                                        //         console.log("multiplicacion :"+ (num1 * num2))
                                        //         console.log("division :"+ (num1 / num2))
                                        //     }else{ 
                                        //         document.write("suma :"+ (num1 + num2)+"<br>")
                                        //         document.write("resta :" + (num1 - num2)+"<br>")
                                        //         document.write("multiplicacion :"+ (num1 * num2)+"<br>")
                                        //         document.write("division :"+ (num1 / num2)+"<br>")
                                        //     }

                                        //     // return num1 + num2
                                        // }
// ------------------------------------------------------------------------------------------------------------------------------------------------------




// 1
//las funciones se pueden usar desde la consolar o ejecutarlos aqui
//llamar o invocar la funcion
    // calculadora(4,4)


    // 2
//Las funciones tambien se pueden usar dentro de bucles

// for (let i = 1; i <=10;i++){
//     console.log(i)
//     calculadora(i,4)
// }


// 3 usar el parametro opcional
// calculadora(3,5);
// calculadora(4,5,true)





// FUNCIONES DENTRO DE OTRAS FUNCIONES
// ------------------------------------------------------------------------------------------------------------------------------------------------------

    function consola(num1,num2) {
        console.log("suma :"+ (num1 + num2))
        console.log("resta :" + (num1 - num2))
        console.log("multiplicacion :"+ (num1 * num2))
        console.log("division :"+ (num1 / num2))
    }
    function vista(num1,num2) {
            document.write("suma :"+ (num1 + num2)+"<br>")
            document.write("resta :" + (num1 - num2)+"<br>")
            document.write("multiplicacion :"+ (num1 * num2)+"<br>")
            document.write("division :"+ (num1 / num2)+"<br>")
    }



    function calculadora(num1,num2,mostrar= false) {
        if (mostrar== false) {
            consola(num1,num2)
        }else{ 
            vista(num1,num2)
        }
        
        return true;
    }
// ------------------------------------------------------------------------------------------------------------------------------------------------------


calculadora(10,10)
calculadora(10,20,true)
