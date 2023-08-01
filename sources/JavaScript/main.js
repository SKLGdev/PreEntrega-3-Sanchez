let carrito = [];
let productos = new Array();

let gestor;

const key_carrito = "carrito";

document.addEventListener("DOMContentLoaded", () => {
  //UTILIZO OPERADOR OR PARA CHEQUEAR
  carrito = JSON.parse(localStorage.getItem(key_carrito)) || [];

  gestor = new organizarHelados();
  gestor.iniciar();
});

document.querySelector("#buscar").addEventListener("keyup", () => {
  let q = document.querySelector("#buscar").value;

  if (q.length >= 2) {
    gestor.buscar(q);
  } else {
    gestor.mostrarHeader("Todos los productos en stock");
    gestor.cargarProductos(productos);
  }
});

/**
 * Agrega al carrito un producto
 * @param {*} id  id del producto a agregar
 */
function addCarrito(id) {
  const prod = document.querySelector("#row_" + id);

  let titulo = prod.querySelector("h3").textContent;
  //elimino el simbolo $ para poder convertir a numero
  let precio = prod
    .querySelector(".precio")
    .textContent.substring(1, prod.querySelector(".precio").textContent.length);
  let img = prod.querySelector("img").src;

  let producto = new Producto(id, titulo, precio, img);

  gestor.addCart(producto);
}

/**
 * Elimina un producto segun su id
 * @param {*} id ide de producto a eliminar
 */
function eliminar(id) {
  gestor.eliminarProducto(id);
}
