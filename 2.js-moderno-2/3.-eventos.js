'use strict'




// este evento se utiliza para poder usar el scrip en el head y no perjudique para las funciones ya que este evento se ejecuta despues de cargar toda la pagina
window.addEventListener('load',()=>{ 


            //los eventos son acciones que se ejecutan en el navageador

            // EVENTOS DEL RATON

            var boton = document.querySelector("#boton");

            function cambiarColor() {

                console.log("se ha precionado")
                var bg =  boton.style.backgroundColor;

                if (bg == "green") {
                    boton.style.backgroundColor = "red";
                }else{
                boton.style.backgroundColor = "green";
                }

                boton.style.padding= "10px";
                boton.style.border = "1px solid #ccc"
                return true;
            }

            // Mejor forma de usar el evento 

            var boton_2 = document.querySelector("#boton2"); 


            function cambiarColor2() {

                console.log("se ha precionado")
                var bg =  boton_2.style.backgroundColor;

                if (bg == "green") {
                    boton_2.style.backgroundColor = "red";
                }else{
                boton_2.style.backgroundColor = "green";
                }

                boton_2.style.padding= "10px";
                boton_2.style.border = "1px solid #ccc"
                return true;
            }

            boton_2.addEventListener('click', function(){
            cambiarColor2() 
            });

            //  Mouse over es lo mismo que el hover de css , aqui estaran los estilos cuando estemos ensima del boton

            boton_2.addEventListener('mouseover',()=>{
                boton_2.style.backgroundColor = "black"
                boton_2.style.color = "white"
                // boton.style.backgroundColor = "blue"
            })

            // Mouseout , estos estilos tendra cuando salganmos del boton
            boton_2.addEventListener('mouseout',()=>{
                boton_2.style.backgroundColor = "white"
                boton_2.style.color = "black"

            })



            // Segunda parte
            var input= document.querySelector('#nombre');

            //el focus sirve para hacer algo cuando estamos dentro del input
            input.addEventListener('focus',()=>{
                console.log('se hizo focus');
            })

            // este BLUR es para hacer algo cuando estamos afuera del input
            input.addEventListener('blur', ()=>{
                console.log('esta fuera del input ')
            })


            // El KEYDOWN sirve para poder saber cual de las tecalas estamos precionando
            input.addEventListener('keydown',(evento)=>{
                console.log('se pulso una tecla',String.fromCharCode(evento.keyCode));
            })


            // keypress este aparec mientras tengamos pulsado la tecla
            input.addEventListener('keypress',(e)=>{
                console.log('se esta manteniendo precionando la tecla', String.fromCharCode(e.keyCode))
            })


            //Keyup es para hacer algo cuando se suelta la tecla
            input.addEventListener('keyup',(evento)=>{
                console.log('tecla soltada',String.fromCharCode(evento.keyCode))
            })

})//fin de load
