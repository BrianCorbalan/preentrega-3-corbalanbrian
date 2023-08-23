import { comprarProducto, comprarProductoBuzo } from "./carrito.js"

const divProductos = document.getElementById("productos")
const divProductosBuzos = document.getElementById("productosBuzos")
export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))
export let productosDisponiblesBuzos = JSON.parse(localStorage.getItem("buzos"))

document.addEventListener("DOMContentLoaded", () => {
    
    generarCardsProductos(productosDisponibles)
    
    generarCardsProductosBuzos(productosDisponiblesBuzos) 
})

export const generarCardsProductos = (productos) => {
  divProductos.innerHTML = "";

  productos.forEach((producto) => {

  const { imagen, nombre, categoria, precio, id, link, alt} = producto
    
    let card = document.createElement("div");
    card.className = "ofertas animacionCaja";
    card.innerHTML = `
    <a href="${link}">
    <img src="${imagen}" alt="${alt}">
    </a>
    <p class="card-title">${nombre}</p>
    <p class="card-text">Categoria: ${categoria}</p>

    <p class="card-text">Precio: <b>$${precio}</b></p>
    <button id="btn${id}" class="btn btn-danger">Agregar al carrito</button>
    `;

    divProductos.appendChild(card);

    const btnComprar = document.getElementById(`btn${id}`)
    btnComprar.addEventListener("click", () => comprarProducto(id))


  });
};

export const generarCardsProductosBuzos = (buzos) => {
  divProductosBuzos.innerHTML = "";

  buzos.forEach((producto) => {

  const { imagen, nombre, categoria, precio, id, link, alt} = producto
    
    let cardBuzos = document.createElement("div");
    cardBuzos.className = "ofertas animacionCaja";
    cardBuzos.innerHTML = `
    <a href="${link}">
    <img src="${imagen}" alt="${alt}">
    </a>
    <p class="card-title">${nombre}</p>
    <p class="card-text">Categoria: ${categoria}</p>

    <p class="card-text">Precio: <b>$${precio}</b></p>
    <button id="btn${id}" class="btn btn-danger">Agregar al carrito</button>
    `;

    divProductosBuzos.appendChild(cardBuzos);

    const btnComprar = document.getElementById(`btn${id}`)
    btnComprar.addEventListener("click", () => comprarProductoBuzo(id))


  });
};  

const generarTitulosProductos = (categoria) => {
    // Agrega el título 
    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    titulo.className = "tituloSecciones";

    const contenedorTitulos = document.getElementsByClassName("contenedorTitulos")[0];
    contenedorTitulos.appendChild(titulo);

}
const generarTitulosProductosBuzos = (categoria) => {
  // Agrega el título 
  const titulo = document.createElement("h2");
  titulo.textContent = categoria;
  titulo.className = "tituloSecciones";

  const contenedorTitulosBuzos = document.getElementsByClassName("contenedorTitulosBuzos")[0];
  contenedorTitulosBuzos.appendChild(titulo);

}
