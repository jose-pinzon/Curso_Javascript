'use strict'

// PARAMETROS REST 
// -----------------------------------------------------------------------------------------------------------------------------------------------------
        //         function frutas(fruta1, fruta2, ...todos_los_demas) {//los 3 puntitos es para mostar todos los demas datos que empiezen desde el tercer parametro  pero os metera en array
        //             console.log(fruta1);
        //             console.log(fruta2);
        //             console.log(todos_los_demas)

        //         }

        // frutas("mandarina","melon","coco","china","limon");

// -----------------------------------------------------------------------------------------------------------------------------------------------------


//PARAMETRO SPREAD


function frutas(fruta1, fruta2,f3, ...e) {//los 3 puntitos es para mostar todos los demas datos que empiezen desde el tercer parametro  pero os metera en array
    console.log("frutas 1;",fruta1);
    console.log("fruta 2:",fruta2);
    console.log("fruta 2:",f3);
    console.log("todos los demas",e);

}



var frutas1=['manzana','mandarina','pera']
            // frutas(frutas1, "coco")//si se coloca asi en el primero console solo mostrara el array
frutas(...frutas1, "coco")//asi se estara mostrando en los demas parametros usados en el console log y coco se quedara en todos los demas
