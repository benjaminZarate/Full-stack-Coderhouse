

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
    const libreta1 = [];
    const libreta2 = [];
    const libreta3 = [];

    for (let i = 0; i < localStorage.length; i++) {
        const product = JSON.parse(localStorage.getItem(i));
        let nombre = product.nombre;
        let precio = product.precio;
        let envio = product.envio;
        nombre === "Libreta horizontal" && libreta1.push(product);
        nombre === "Libreta horizontal multicolor" && libreta2.push(product);
        nombre === "Libreta blanca y rosa" && libreta3.push(product); 
        AddNotebook(new Notebook(nombre, precio, envio));
    }
    libreta1.length > 0 ? contenedor.innerHTML += `<h3>-${libreta1.length} ${libreta1[0].nombre} : ${libreta1[0].precio}</h3>` : contenedor.innerHTML += '';
    libreta2.length > 0 ? contenedor.innerHTML += `<h3>-${libreta2.length} ${libreta2[0].nombre} : ${libreta2[0].precio}</h3>` : contenedor.innerHTML += '';
    libreta3.length > 0 ? contenedor.innerHTML += `<h3>-${libreta3.length} ${libreta3[0].nombre} : ${libreta3[0].precio}</h3>` : contenedor.innerHTML += '';
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
    Toastify({
        text: "Libretas añadidas a su carrito de compra",
        duration: 3000,
        newWindow: false,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }// Callback after click
      }).showToast();
    ShowProducts();
}

//Se crea un div con la lista de productos, el total de envio y el total a pagar
function ShowProducts()
{
    contenedor.remove();
    contenedor.innerHTML = ``;
    let i = 0;
    const libreta1 = [];
    const libreta2 = [];
    const libreta3 = [];

    listProducts.forEach(element => {
        let nombre = element.nombre;
        let precio = element.precio;
        let envio = element.envio;
        nombre === "Libreta horizontal" && libreta1.push(element);
        nombre === "Libreta horizontal multicolor" && libreta2.push(element);
        nombre === "Libreta blanca y rosa" && libreta3.push(element); 
        const product = {id: i,nombre: nombre, precio: precio, envio: envio};
        const enJson = JSON.stringify(product);
        localStorage.setItem(i, enJson);
        i++;
    });
    libreta1.length > 0 ? contenedor.innerHTML += `<h3>-${libreta1.length} ${libreta1[0].nombre} : ${libreta1[0].precio}</h3>` : contenedor.innerHTML += '';
    libreta2.length > 0 ? contenedor.innerHTML += `<h3>-${libreta2.length} ${libreta2[0].nombre} : ${libreta2[0].precio}</h3>` : contenedor.innerHTML += '';
    libreta3.length > 0 ? contenedor.innerHTML += `<h3>-${libreta3.length} ${libreta3[0].nombre} : ${libreta3[0].precio}</h3>` : contenedor.innerHTML += '';
    
    contenedor.innerHTML +=  `<h4>---------------------</h4>`;
    contenedor.innerHTML +=  `<h2>Envio: $${envioTotal}</h2>`;
    contenedor.innerHTML +=  `<h2>Total: $${total}</h2>`;
    document.body.appendChild(contenedor);
    for (let i = 0; i < localStorage.length; i++) {
        const productResult = JSON.parse(localStorage.getItem(i));
        console.log(productResult);
    }
}


