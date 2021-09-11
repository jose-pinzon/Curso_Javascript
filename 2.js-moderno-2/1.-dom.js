'use strict'



// ----------------------------------------------------------------CONSEGUIR ELEMENTO CON UN ID CONCRETO----------------------------------------------------------------------------------------------//


// el getElementByI es para poder selecionar un elemento de nuestro archivo html en este caso mediante id y con el innner podemos mostrar el valor que esta en el html
// var valor_pagina = document.getElementById("Caja1")

// este es la segunda forma de seleccionar un elemento , con este se puede seleccionar una clase o um id pero se tiene que poner "#" en caso de id y punto en caso de clase 
var valor_pagina = document.querySelector("#Caja1")



valor_pagina.innerHTML = "CAMBIANDO EL TEXTO DESDE EL JavaScript";
valor_pagina.style.background = "blue" //tambien se puede cambiar los estilos css
valor_pagina.style.padding = "10px" 
valor_pagina.style.textAlign = "center" 
valor_pagina.className = "Caja22w" //este es para poder colocarle una clase


    function cambiarColor(color){
        valor_pagina.style.background = color
    }

console.log(valor_pagina);

// ----------------------------------------------------------------CONSEGUIR ELEMENTO POR SU ETIQUETA ----------------------------------------------------------------------------------------------//
    var todosElementos = document.getElementsByTagName('div')//no formara un array con todos los elemtos que coloquemos
        console.log(todosElementos)

        var contentText = todosElementos[2] //este "textContent" es para poder mostrar el valor guardado el elemnto seleccionado pero no se puede cambiar el string como se hace con el innerHTML
        contentText.innerHTML = "elemnto cambiado por mi"
    console.log(contentText)



    for(let valor in todosElementos){
        if (typeof todosElementos[valor].textContent == 'string') {
            var parrafo = document.createElement("p")//para poder crear la etiqueta que queramos
            var texto = document.createTextNode(todosElementos[valor].textContent)//para poder agregares el valor
            parrafo.append(texto)//para poder insertarlo dentro del parrafo , el append significa añadelo despues.

            document.querySelector('#laSecion').append(parrafo)//para poder introducir el parrafo dentro de la caja, prepen significa añadelo antes.
        }
    }



    var seccion = document.querySelector('#laSecion')
    var hr = document.createElement('hr')

    seccion.appendChild(hr)

// ----------------------------------------------------------------CONSEGUIR ELEMENTO CON SU CLASE CSS ----------------------------------------------------------------------------------------------//

var divRojos = document.getElementsByClassName("rojo")

// se hizo un for para poder recorrer los div con la clase rojo y poderle agregar el fondo porque de lo contrario se tendria que hacer uno por uno  divRojos[0].style.background = "red"
for(let red in divRojos){
    if(divRojos[red].className == "rojo"){
        divRojos[red].style.background = "red"
    }
}

console.log(divRojos)

/*NOTA:
para poder seleccionar varios elemento no es recomendable usar queryselector ya que este solova a traer el primero elemento no como el getElementsBy que trae todos en un array
pero con el queryselectorAll este es lo mismo que el getElementby 
*/ 

var todos = document.querySelectorAll(".rojo");
todos[1].style.background = "blue"
console.log(todos)



