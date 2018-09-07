/*Clase (Molde del objeto) */
class camisa{
    //Propiedades (caracteristicas del objeto
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
var micamiseta = new camisa('rojo','polo', 'nike', 'L', 250);
/*Llamando a metodos creados */
//micamiseta.setColor("Verde");
//micamiseta.getColor();

/*Podmes crear nuevos objetos usando caracteristicas de otras clases */
//Utilizando el constructor
var playera =  new camisa('azul', 'cuello v', 'adidas', 'M', 350);
/*Llamando a metodos creados */
//playera.setColor("Azul");
//playera.getColor();

console.log(micamiseta, playera);