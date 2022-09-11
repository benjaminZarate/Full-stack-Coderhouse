let envioTotal = 0; //costos de envios, este aumentara segun la cantidad de productos
let total = 0; //Precio total a gastar
const contenedor = document.createElement("div");

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
    NotebookAmount(_notebook1);
}, false);

document.getElementById("notebook2").addEventListener("click", function() {
    NotebookAmount(_notebook2);
}, false);
document.getElementById("notebook3").addEventListener("click", function() {
    NotebookAmount(_notebook3);
}, false);

function AddNotebook(notebook)
{
    total += notebook.precio;
    envioTotal += notebook.envio;
    total += notebook.envio;
    listProducts.push(notebook);
}

function NotebookAmount(notebook)
{
    contenedor.remove();
    let amount = prompt("¿Cuantas libretas desea?");
    for(let i = 0; i < amount; i++)
    {
        AddNotebook(notebook);
        
    } 
    alert("Han sido añadidas con exito");
    ShowProducts();
}

function ShowProducts()
{
    contenedor.remove();
    contenedor.innerHTML = ``;
    listProducts.forEach(element => {
        contenedor.innerHTML += `<h3>-${element.nombre} : ${element.precio}</h3>`;
    });
    contenedor.innerHTML +=  `<h4>---------------------</h4>`;
    contenedor.innerHTML +=  `<h2>Envio: $${envioTotal}</h2>`;
    contenedor.innerHTML +=  `<h2>Total: $${total}</h2>`;
    document.body.appendChild(contenedor);
}


