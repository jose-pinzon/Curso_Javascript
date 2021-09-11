'use strict'


var datosUser = document.querySelector('#cajaDatos');

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(users => {
	mostrarDatosAjax(users);

	return sacarUnUsuario(); //esto es para no hacer 2 peticiones y utilizar la mima promesa para no realizar varios callback
}).then(data => data.json())
.then(user =>{
		mostrarUsuario(user); // en el curso ponen user.data pero a mi no me funciona con el data 
		return crearPromesa();
})
.then(data=>{
	console.log(data)

	return promesaPrueba();
}).then(data=>{
	console.log(data)
}).catch(error=>{
	console.log(error)
})


function SacarUsuarios () {
	return fetch('https://jsonplaceholder.typicode.com/users')
}

function sacarUnUsuario () {
	return fetch('https://jsonplaceholder.typicode.com/users/1')
}



function mostrarDatosAjax (usuarios) {
		usuarios.map((usuario,i)=>{
		let datos = document.createElement("p");
		datos.innerHTML = usuario.name + " - " + usuario.username;
		datosUser.append(datos);
		document.querySelector('.loading').style.display = 'none';

	})
}


var cajaPersona = document.querySelector("#cajaDato");


function mostrarUsuario (user) {
		let datos = document.createElement("h1");
		// let MostrarImg = document.createElement("img")//en caso de tener imagen
		datos.innerHTML =  user.name + " - " + user.username;
		// MostrarImg.src = user.avatar; en caso de tener imagen
		cajaPersona.appendChild(datos);
		// cajaPersona.appendChild(MostrarImg); en caso de tener imagen
		document.querySelector('#cajaDato  .loading').style.display = 'none';

}

function crearPromesa(){
	var misDatos = {
		nombre:'jose',
		apellidos:'Pinzon Eb',
		edad:19,
		email:'ebjose781@gmail.com',
	};

	//como crear nueva promesa
	return new Promise((resolve,reject)=>{
		var misDatos_String = "";
		//no es necesario colocar llaves al if porque estamos dentro de una promesa
		setTimeout(function(){
			misDatos_String = JSON.stringify(misDatos);
			if (typeof misDatos_String != 'string' || misDatos_String == "") return reject('error no ')
			return resolve(misDatos_String); 
		},1000)

		
	});

}


function promesaPrueba(){
	var datos =[	{
		nombre:"jose",
		edad:18,

	},

	{
		nombre:"gabriel",
		edad:17,

	}];


	return new Promise((verdad,error)=>{
		var datosListos = JSON.stringify(datos);
		if (typeof datosListos != 'string') return error('error en la promesa');
		return verdad(datosListos);
	})



}