/*Function, podemos especificar el valor que recibira la funcion 
y el que obtendremos como resultado */

function getnumero(numero: number = 12):string{
    return "El numero es: " + numero;
}

console.log(getnumero);