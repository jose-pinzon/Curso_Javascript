'use strict'


/*
tabla de multiplicar de un numero introducido por el usuario
*/


///mi solucion
    // var num = parseInt(prompt('coloque un numero para su tabla'))

    // for(var i = 1;i<=10;i++){
    //     var suma = i * num

    //     document.write(num + 'x'+ i +'='+ suma+'<br>')
    // }

//solucion del curso

var numero = parseInt(prompt('coloque un numero para su tabla',1))
        for(var i =1;i<=10;i++){
            document.write(i + "x" + numero+ "="+(i*numero + "<br>"))

        }


//Para poder mostrar todas las tablas de multiplicar
//primero se crea un for que genere los numero  y despues en el siguiente for cuando el numero del primer for , se estaran multiplicando con los numeros que generara este segundo for

for(var c = 1 ; c<=10;c++){
    document.write('<h1>tabla de multiplicar de'+ c+'</h1>');

    for(var i =1;i<=10;i++){
        document.write(i + "x" + c+ "="+(i*c + "<br>"))
    }
}