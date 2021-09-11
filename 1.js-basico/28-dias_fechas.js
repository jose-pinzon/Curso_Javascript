'use strict'



 function restaFechas(f1,f2)
 {
 var aFecha1 = f1.split('/');
 var aFecha2 = f2.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }

var valor1 = '12/12/2021';
var valor2 ='17/12/2021';
let valor3= ['1','2','3','4']
valor3.reverse()
// console.log(valor3)


 // console.log(restaFechas(valor1,valor2));

// let texto = "2017/05/12";
let texto2 = "2018-04-03"

// function formato(texto){
//    texto.replace(/^(\d{4})-(\d{2})-(\d{2})$/g,'$3/$2/$1');
//     return moment(texto).format('DD/MM/YYYY');
// }


// console.log(formato(texto2))

var dateString = '2017-01-10';
var dateString2 = '2017-02-14';

console.log(convertDateFormat(dateString2));

function convertDateFormat(string) {
  var info = string.split('-');
  return info[2] + '/' + info[1] + '/' + info[0];
}