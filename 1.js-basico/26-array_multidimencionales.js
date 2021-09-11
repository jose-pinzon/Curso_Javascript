"use strict";

var categorias = ["infantil", "adultos", "entretenimiento", "familiar"]
var peliculas = ["rey leon", "coco", "venom"]
//------------------------------------ordenar array-----------------------------------------------------------
// peliculas.sort()//ordena por orden alfabetico
peliculas.reverse()//ordena de forma alreves
// console.log(peliculas)





// var cine = [categorias, peliculas];

// console.log(cine[0][2]); //primero tenemos que entrar en categorias despues en una de esas categorias
// console.log(cine[1][2]);


//----------------------------------mi solucion usando if-------------------------------------------------------------
//se uso el do while por que con el while no guarda el primer elemento

//     var peliculas_nuevas = []
    
//         do {

//             var agregar = prompt("selecciona un pelicula");
//             if (agregar != "terminado") {

//                 peliculas_nuevas.push(agregar); //con el push podemos insertarle un elemento al array

//             } else {
//                 alert("terminado jajaj");
//             }
//         } while (agregar != "terminado");

// console.log(peliculas_nuevas)



//------------------------------------manera usando Pop()-----------------------------------------------------------
            /*
            do {
                var agregar = prompt("selecciona un pelicula");
                    peliculas.push(agregar); //con el push podemos insertarle un elemento al array
                    
            } while (agregar != "terminado")

            peliculas.pop();// este eliminara siempre el ultimo elemento
            console.log(peliculas);
            */

//------------------------------------manera buscando el indice y eliminando-----------------------------------------------------------



var buscar = peliculas.indexOf('rey leon')//obtenemos el indice
if(buscar > -1){
    peliculas.splice(buscar);//asignamos el indice para poder eliminarlo del array
}

console.log(peliculas)


//------------------------------------Convertir un array a string-----------------------------------------------------------

    // var peliculas_text = peliculas.join() //este lo convierte en string y los separa por comas para que funcione hay que ponerlo dentro de una variable
    // console.log(peliculas_text)


//------------------------------------Convertir un  string  a array-----------------------------------------------------------

        // var text_normal = "samsung, lg, motorola, huawell, alcatel"

        // var transform_array = text_normal.split(", "); //en el parentesis le ponemos como queremos que lo separe
        // console.log(transform_array)





        // ************************************************************Recorrer arrays************************************************************************

var computadoras = ['master cooler', 'seasonic', 'gigabyte']




document.write("<ul>")

    for(let compu in computadoras){
        document.write("<li>"+computadoras[compu] + "</li>")
    }

document.write("</ul>")


//Busqueda

var buscar = computadoras.find(pc => pc == 'seasonic') //con => podemos hacer el return directamente y sin tener que escribirlo
var buscar_indice = computadoras.findIndex(pc => pc == 'gigabyte')//para buscar indice
console.log(buscar)
console.log(buscar_indice)


var precios = [213,22,12,112,12]
var buscar_precio = precios.some(pre => pre >= 215)//con el some podemos saber si existe un numero mayor o menor que otro
console.log(buscar_precio)