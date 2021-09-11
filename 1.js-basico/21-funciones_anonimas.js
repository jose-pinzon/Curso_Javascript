'use strict'

// -----------------------------------------------------------------------------------------------------------------------------    

function callback(numero1 , numero2, sumanumero, numeropor2, multiplicacion,sumaMismo,multiplicacion1000 ) {
    let suma = numero1 + numero2

    sumanumero(suma);
    numeropor2(suma);
    multiplicacion(suma);
    sumaMismo(suma);
    multiplicacion1000(suma)
    return suma;
}
// console.log(callback(2,4))
// -----------------------------------------------------------------------------------------------------------------------------    



// -----------------------------------------------------------------------------------------------------------------------------    
                    // callback(4,4,
                    // //callbacks son funciones que se ejecutan dentro de otras funciones
                    // //los de aqui abajo son funciones anonimas porque no tienen nombre  pero se pueden ejecutar detro de otra funcion porque son callbacks y no se pude llamar como tal 
                    // function(valor) { //de parametro puede ir lo que sea , porque donde se use se pasara el valor requerido
                    //     console.log("la suma es :", valor);
                    // },

                    // function(valor2){
                    //     console.log( "la multiplicacion por 2 es:" + (valor2*2))
                        
                    // }
                    // )


// -----------------------------------------------------------------------------------------------------------------------------    

//Funciones de flecha son mas limpias y son mejores para las funciones de callback
callback(4,4,

        valor => { //no es necesario poner parentesis si es solo un valor y tampoco se pone la palabra function
                console.log("la suma es :", valor);
            },

        valor2 => {
                console.log( "la multiplicacion por 2 es:" + (valor2*2))
        },
        function(params) {
            console.log('la divicion es '+(params / 2 ));
        },
        // valor3 =>{
        //     console.log('la divicion es '+(valor3 / 2 ));
        // }
        valorcualquiera =>{
            console.log("la suma es del mismo numero es : " + (valorcualquiera + valorcualquiera))
        },

        numero => {
            document.write('la exprecion es:' +(numero * 1000 ) )
        }


        )



