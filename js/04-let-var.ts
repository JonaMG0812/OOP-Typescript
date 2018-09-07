/*Let and var
var = global
let = specifci scope */

var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
    let numero1 = 44;
    var numero2 = 55;

    console.log(numero1, numero2);
}

console.log(numero1, numero2);