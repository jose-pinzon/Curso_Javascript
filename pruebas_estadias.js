'use strict'

var registros =[{sucursal: 1, idusers: 1, usuario: 'schw'}
,{sucursal: 1, idusers: 2, usuario: 'schw2'}];

var nregistros=[];


for(let i in registros)
  nregistros.push(registros[i].usuario);

 
var nombre = nregistros[1];
console.log(nombre);
console.log(nregistros);