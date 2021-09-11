'use strict'


// BOM -  Browser Object Model


function Bom() {
    // con los de abajo nos muestra el espacio de la pantalla que estamos usando 
    console.log(window.innerHeight) 
    console.log(window.innerWidth )


    // con estos 2 nos muestra el tamaño exacto de mi pantalla
    console.log(screen.width)
    console.log(screen.height)

    // sacar URL
    console.log(window.location)

}
Bom();




function redirect(url) {
    return window.location.href = url
}

// para abrir una pagina en una nueva pestaña
function abrirVentana(url){
    window.open(url,"" , "width=400px", "height=400px")//con los ultimos parametros podemos decir de que tamaño sera la ventana que se abrira
}

