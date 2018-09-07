/*Clase (Molde del objeto) */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorador
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camisa estampada con el logo de: " + logo);
        };
    };
}
//Aplicando decorador
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
    camisa = __decorate([
        estampar("gucci Gang")
        //export class camisa{
    ], camisa);
    return camisa;
}());
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
var sudadera = /** @class */ (function (_super) {
    __extends(sudadera, _super);
    function sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return sudadera;
}(camisa));
var micamiseta = new camisa('rojo', 'polo', 'nike', 'L', 250);
console.log(micamiseta);
micamiseta.estampacion();
var misudadera = new sudadera('rojo', 'termica', 'puma', 'CH', 500);
misudadera.setCapucha(true);
console.log(misudadera);
