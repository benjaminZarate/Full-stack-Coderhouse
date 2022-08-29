let envioTotal = 0; //costos de envios, este aumentara segun la cantidad de productos
let total = 0; //Precio total a gastar

var listProductos = "";

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

function AddNotebook(notebook)
{
    total += notebook.precio;
    envioTotal += notebook.envio;
    total += notebook.envio;
    listProductos += "- " + notebook.nombre + "\n";
    console.log("Productos: ");
    console.log(listProductos);
    console.log("Envio: " + envioTotal);
    console.log("Precio total: " + total);
    console.log("--------------------");

}
