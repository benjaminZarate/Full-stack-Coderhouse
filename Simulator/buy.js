let envioTotal = 0; //costos de envios, este aumentara segun la cantidad de productos
let total = 0; //Precio total a gastar

//Contenedor para mostrar el carrito de compras
const contenedor = document.createElement("div");

//ID de los inputs para la cantidad de libretas
var input1 = 'amount1';
let input2 = 'amount2';
let input3 = 'amount3';

//Lista de productos en el carrito de compras
const listProducts = [];

function loadProducts()
{
    for (let i = 0; i < localStorage.length; i++) {
        const product = JSON.parse(localStorage.getItem(i));
        AddNotebook(new Notebook(product.nombre, product.precio, product.envio));
    }
    listProducts.forEach(element => {
        contenedor.innerHTML += `<h3>-${element.nombre} : ${element.precio}</h3>`;
    });
    contenedor.innerHTML +=  `<h4>---------------------</h4>`;
    contenedor.innerHTML +=  `<h2>Envio: $${envioTotal}</h2>`;
    contenedor.innerHTML +=  `<h2>Total: $${total}</h2>`;
    document.body.appendChild(contenedor);
}
window.onload = loadProducts;

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

//Se asignan los eventos para los botones de añadir carrito apra cada libreta
document.getElementById('notebook1').addEventListener('click', function() {
    NotebookAmount(_notebook1, input1);
}, false);

document.getElementById("notebook2").addEventListener("click", function() {
    NotebookAmount(_notebook2, input2);
}, false);
document.getElementById("notebook3").addEventListener("click", function() {
    NotebookAmount(_notebook3, input3);
}, false);


function AddNotebook(notebook)
{
    total += notebook.precio;
    envioTotal += notebook.envio;
    total += notebook.envio;
    listProducts.push(notebook);
}

//Se recoge la cantidad de libretas añadidas por el usuario y se suman a la lista de productos
//Se muestra una alerta de que fueron añadidos existosa mente
//Se muestran los productos en pantalla
function NotebookAmount(notebook, input)
{
    var amount = document.getElementById(input).value;
    for(let i = 0; i < amount; i++)
    {
        AddNotebook(notebook);
    } 
    alert("Han sido añadidas con exito");
    ShowProducts();
}

//Se crea un div con la lista de productos, el total de envio y el total a pagar
function ShowProducts()
{
    contenedor.remove();
    contenedor.innerHTML = ``;
    let i = 0;
    listProducts.forEach(element => {
        contenedor.innerHTML += `<h3>-${element.nombre} : ${element.precio}</h3>`;
        const product = {id: i,nombre: element.nombre, precio: element.precio, envio: element.envio};
        const enJson = JSON.stringify(product);
        localStorage.setItem(i, enJson);
        i++;
    });
    contenedor.innerHTML +=  `<h4>---------------------</h4>`;
    contenedor.innerHTML +=  `<h2>Envio: $${envioTotal}</h2>`;
    contenedor.innerHTML +=  `<h2>Total: $${total}</h2>`;
    document.body.appendChild(contenedor);
    for (let i = 0; i < localStorage.length; i++) {
        const productResult = JSON.parse(localStorage.getItem(i));
        console.log(productResult);
    }
}


