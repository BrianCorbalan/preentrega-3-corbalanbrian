import { comprarProducto } from "./carrito.js"

const divProductos = document.getElementById("productos")
export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))


document.addEventListener("DOMContentLoaded", () => {
    generarTitulosProductos("Remeras")
    generarCardsProductos(productosDisponibles)    
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
  

  const generarTitulosProductos = (categoria) => {
    // Agrega el título 
    const titulo = document.createElement("h2");
    titulo.textContent = categoria;
    titulo.className = "tituloSecciones";

    const contenedorTitulos = document.getElementsByClassName("contenedorTitulos")[0];
    contenedorTitulos.appendChild(titulo);

}
