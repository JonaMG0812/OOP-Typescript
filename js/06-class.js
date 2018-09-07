/*Clase (Molde del objeto) */
var camisa = /** @class */ (function () {
    /*Metodos (Funciones o acciones del objeto),
    Con el siguiente metodo podremos hacer que aunque sea privado, podamos instancarnos fuera
    de, para que asi peuda ser utilizado*/
    /*Constructores, se utiliza para dar valores inciales a un objeto al crearlo,
    peudes recibir parametros como cualquier otro metodo, un construtctor nuca devuelve un dato */
    function camisa(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    /*Metodos*/
    camisa.prototype.setColor = function (color) {
        this.color = color;
    };
    camisa.prototype.getColor = function () {
        return this.color;
    };
    return camisa;
}());
//Utilizando el constructor
var micamiseta = new camisa('rojo', 'polo', 'nike', 'L', 250);
/*Llamando a metodos creados */
//micamiseta.setColor("Verde");
//micamiseta.getColor();
/*Podmes crear nuevos objetos usando caracteristicas de otras clases */
//Utilizando el constructor
var playera = new camisa('azul', 'cuello v', 'adidas', 'M', 350);
/*Llamando a metodos creados */
//playera.setColor("Azul");
//playera.getColor();
console.log(micamiseta, playera);
