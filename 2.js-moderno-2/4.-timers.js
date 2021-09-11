'use strict'


window.addEventListener('load',()=>{

function intervalo(){
    // el setTimeout solo se ejecuta una vez y no se genera un bucle como este  
    var tiempo = setInterval(()=>{
        console.log('me ejecuto cada tiempo')
    
        var h1 =  document.querySelector("#tiempo")
    
        if (h1.style.fontSize == "50px") {
            h1.style.fontSize="20px"
        }else{
            h1.style.fontSize="50px"
        }
    },1000)
    return tiempo
}


var tiempo = intervalo();


var parar = document.querySelector('#stop')
parar.addEventListener('click',()=>{
    alert('paraste la ejecucion')
    clearInterval(tiempo) //aqui le pasamos el nombre del intervalo a parar
})






var seguir = document.querySelector('#start')
seguir.addEventListener('click',()=>{
    alert('se a iniciado el intervalo')
    intervalo()
})



































})