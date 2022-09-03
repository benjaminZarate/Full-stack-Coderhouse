let envioTotal = 0; //costos de envios, este aumentara segun la cantidad de productos
let total = 0; //Precio total a gastar

const listProducts = [];

class Notebook
{
    nombre;
    precio;
    envio;

    constructor(nombre, precio, envio)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.envio = envio;
    }
}

const _notebook1 = new Notebook("Libreta horizontal", 10000, 3000);
const _notebook2 = new Notebook("Libreta horizontal multicolor", 12000, 3000);
const _notebook3 = new Notebook("Libreta blanca y rosa", 11000, 3000);


document.getElementById('notebook1').addEventListener('click', function() {
    AddNotebook(_notebook1);
}, false);

document.getElementById("notebook2").addEventListener("click", function() {
    AddNotebook(_notebook2);
}, false);
document.getElementById("notebook3").addEventListener("click", function() {
    AddNotebook(_notebook3);
}, false);
document.getElementById("show").addEventListener("click", function() {
    ShowProducts();
}, false);

function AddNotebook(notebook)
{
    total += notebook.precio;
    envioTotal += notebook.envio;
    total += notebook.envio;
    listProducts.push(notebook);
    console.log(notebook.nombre+" añadido a su carrito");
}

function ShowProducts()
{
    console.log("Productos");
    listProducts.forEach(element => {
        console.log(element.nombre);
    });
    console.log("--------------------");
    console.log("Envio: " + envioTotal);
    console.log("Precio total: "+total);
}
