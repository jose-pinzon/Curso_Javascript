'use strict'

var nombres = ['jose','eduardo','adrian','cuadrado']//primera forma de definir un array y en los array puede ir lo que sea
var lenguajes = new Array("PHP", "JS", "NODE.JS", "Go")


console.log(nombres[2]) //haci podemos sacar solo un elemento de los array


//////////_____________________________array avanzados___________________________________________________

    // var elemento = parseInt(prompt('dime un elemento',0))

    // if (elemento >= nombres.length) {
    //     alert('no se tiene ese elemento')
    // }else{
    //     alert(nombres[elemento])
    // }



//////////_____________________________recorrer array___________________________________________________


//####### FOR

document.write("<ul>")
for (var i = 0; i < lenguajes.length; i++){
    document.write("<li> "+lenguajes[i]+ "</li>")
}
document.write("</ul>")


//####### FOR EACH
document.write("<ul>")
    lenguajes.forEach((elemento, indice ,arreglo) =>{
        console.log(arreglo)//en este ultimo parametro esta el arreglo original
        document.write("<li>"+indice +".-" +elemento+ "</li>")
    })
        

document.write("</ul>")




//####### FOR IN
document.write("<ul>")

// lo primero que se hace es crear una variable que sera el indice del array y despues pasarle ese indice a lenguajes para que pueda traer el nombre
for (const len in lenguajes) {
    document.write("<li>"+lenguajes[len]+ "</li>")
}


document.write("</ul>")