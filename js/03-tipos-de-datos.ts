/*String */
let cadena: string = "Jonathan MG";

/*Nota: podemos declarar dos tipos de datos en una sola variable, ej:
let cadena: string | number = 
de esta forma la variable aceptara string y number */

/*Number */
let numero: number = 12;

/*Boolean */
let verdadero_falso: boolean = true;

/*Any: Podemos usar esta varibale sin importar el tipo de dato */
let any: any = "hola";

/*Array = Array<Dato especifico que aceptara el array>
Podemos formar un array que acepte cualquier tipo de datos, por ej:
var cosas: Array<any> = ["hola", 1]; */
var lenguajes: Array<string> = ["Hola", "Soy", "Un", "Array"];
let years: number [] = [12, 13, 14, 15]; 

/*Mostrando resultados */
console.log(cadena, numero, verdadero_falso, any, lenguajes, years);

/*Creando mi tipo de dato personalizado, ejemplo: */
type alfanumerico = string | number;
