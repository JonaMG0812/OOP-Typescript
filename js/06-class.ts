/*Clase (Molde del objeto) */

//Interface
interface camisaBase{
    setColor(color);
    getColor();
}

//Decorador
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camisa estampada con el logo de: " + logo);
        }
    }
}

//Aplicando decorador
@estampar("gucci Gang")

//export class camisa{
    class camisa implements camisaBase{
    //Propiedades (caracteristicas del objeto)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;

    /*Metodos (Funciones o acciones del objeto), 
    Con el siguiente metodo podremos hacer que aunque sea privado, podamos instancarnos fuera 
    de, para que asi peuda ser utilizado*/

    /*Constructores, se utiliza para dar valores inciales a un objeto al crearlo, 
    peudes recibir parametros como cualquier otro metodo, un construtctor nuca devuelve un dato */
    constructor(color, modelo, marca, talla, precio){
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }

    /*Metodos*/
    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color;
    }

}

//Utilizando el constructor
//var micamiseta = new camisa('rojo','polo', 'nike', 'L', 250);
/*Llamando a metodos creados */
//micamiseta.setColor("Verde");
//micamiseta.getColor();

/*Podmes crear nuevos objetos usando caracteristicas de otras clases */
//Utilizando el constructor
//var playera =  new camisa('azul', 'cuello v', 'adidas', 'M', 350);
/*Llamando a metodos creados */
//playera.setColor("Azul");
//playera.getColor();

//console.log(micamiseta, playera);

//Clase Hija
class sudadera extends camisa{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha(){
        return this.capucha;
    }
}

var micamiseta = new camisa('rojo','polo', 'nike', 'L', 250);
console.log(micamiseta);
micamiseta.estampacion();

var misudadera = new sudadera('rojo','termica', 'puma', 'CH', 500);
misudadera.setCapucha(true);
console.log(misudadera);