//OBJETO para los helados
class Producto {
  constructor(id, categoria, nombre, descripcion, precio, img) {
    this.id = id;
    this.categoria = categoria;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = parseFloat(precio);
    this.img = img;
  }
}

class organizarHelados {
  iniciar() {
    productos = [
      {
        id: 1,
        categoria: "CHOCOLATE",
        nombre: "Chocolate",
        descripcion:
          "Este helado de chocolate esta elaborado a partir de mezclar cacao en polvo junto con los huevos, la crema, la vainilla y el azúcar que se usan para hacer el helado de vainilla. Tambien usamos el licor de chocolate del cacao en polvo que se usa exclusivamente, para crear el sabor del chocolate.",
        precio: 1200,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 2,
        categoria: "CHOCOLATE",
        nombre: "Chocolate con almendras",
        descripcion:
          "Este helado de chocolate esta elaborado a partir de mezclar cacao en polvo junto con los huevos, la crema, la vainilla y el azúcar que se usan para hacer el helado de vainilla. Tambien usamos el licor de chocolate del cacao en polvo que se usa exclusivamente, para crear el sabor del chocolate, además de las almendras.",
        precio: 1140,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 3,
        categoria: "CHOCOLATE",
        nombre: "Chocolate suizo",
        descripcion:
          "Helado de crema de chocolate a base de leche fluida, de chocolate suave con almendras tostadas acarameladas y nueces.",
        precio: 1500,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 4,
        categoria: "CHOCOLATE",
        nombre: "Chocolate italiano",
        descripcion:
          "Color: marrón, más o menos intenso. Aroma: Aromático y típico del chocolate. Sabor: característico del chocolate.",
        precio: 1280,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 5,
        categoria: "CHOCOLATE",
        nombre: "Chocolate Marroc",
        descripcion:
          "Es un helado de chocolate Marroc, sembrado con pedacitos del bombón.",
        precio: 1300,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 6,
        categoria: "CHOCOLATE",
        nombre: "Chocolate Rocher",
        descripcion:
          "Un helado de excepcional sabor y la textura de la crujiente capa de delicioso chocolate y las avellanas tostadas a la perfección que se despliegan en un delicado helado sabor avellana, con un remolino a base de avellanas y cacao.",
        precio: 1800,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 7,
        categoria: "CHOCOLATE",
        nombre: "Chocolate blanco",
        descripcion:
          "Este es un helado que está hecho teniendo como base en al menos un 20% la manteca de cacao. El resto de los ingredientes son la leche y otros lácteos, así como el azúcar.",
        precio: 1000,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
      {
        id: 8,
        categoria: "CHOCOLATE",
        nombre: "Mouse de chocolate",
        descripcion:
          "Es un helado a la crema hecho exclusivamente con crema de leche, huevos frescos y chocolate dulce.",
        precio: 1620,
        stock: 30,
        img: "helado1.jpg",
        destacado: 1,
      },
    ];
    let productosDestacados = productos.filter((prod) => prod.destacado == 1);
    /* Aca con la coleccion ya creada de los productos lo que hago es aplicarle el filtro a
    esa misma coleccion. Y el prod es de producto/s (parametro que es cómo identifico a cada
    producto creado siendo prod que me retorna el acceso a la propiedad destacado de 1 de
    cada producto de la coleccion) */
    this.cargarProductos(productosDestacados);
    /* Esta se encarga de recorrer esa estructura */
  }
  cargarProductos(productos) {
    //const divProductos = document.getElementById("productos");
    const divProductos = document.querySelector("#productos");
    divProductos.innerHTML = "";

    if (productos.length == 0) {
      this.mostrarHeader("No se han encontrado productos");
      return false;
    } else {
      productos.forEach((producto) => {
        /*  let id = producto.id;
                let nombre = producto.nombre;
                let img = producto.img;
                let descripcion = producto.descripcion;
                let precio = producto.precio;*/

        const { id, nombre, precio, img, cantidad, descripcion } = producto;

        let prod = document.createElement("div");
        prod.classList.add(
          "col-12",
          "h200",
          "border",
          "bg-white",
          "rounded",
          "mt-3",
          "d-flex",
          "align-items-center",
          "p-3",
          "flex-row",
          "producto"
        );
        prod.id = "row_" + id;
        prod.innerHTML = `<div class="w-20">
                                        <img src="./sources/img/${img}" alt="" width="150" height="150" >
                                  </div>

                                  <div class="p-3 d-flex flex-column w-60 h-150">
                                  <h3>${nombre}</h3>                                            
                                  <p>${descripcion.substring(0, 120)}</p>
                              </div>

                                  <div class="d-flex align-items-center justify-content-center flex-column w-20 h-150">
                                  <p class="precio">$${precio}</p>
                                  <a href="javascript:addCarrito(${id})" class="btn btn-primary">Agregar al carrito</a>
                                 </div>


                                `;

        divProductos.appendChild(prod);
      });
    }
  }

  mostrarHeader(msg) {
    const headerProductos = document.querySelector("#headerProductos");
    headerProductos.innerHTML = msg;
  }

  buscar(valor) {
    let resultado = productos.filter(
      (producto) =>
        producto.nombre.toLowerCase().includes(valor.toLowerCase()) ||
        producto.descripcion.toLowerCase().includes(valor.toLowerCase())
    );
    this.cargarProductos(resultado);
  }

  addCart(item) {
    const existe = carrito.some((producto) => producto.id === item.id);

    if (existe) {
      //mapeo el producto con el id pasado por parametro con su cantidad actualizada
      const articulo = carrito.map((producto) => {
        if (producto.id === item.id) {
          producto.cantidad++;
          return producto;
        } else {
          return producto;
        }
      });

      Toastify({
        text: "Se actualizo la cantidad del producto",
        duration: 2000,
        gravity: "bottom",
      }).showToast();
    } else {
      carrito.push(item);

      Toastify({
        text: "Producto agregado con exito",
        duration: 2000,
        gravity: "bottom",
      }).showToast();
    }

    this.actualizarCarrito();
  }

  /**
   * Actualiza contado de carrito, muestra el estado correcto del carrito y guarda en local storage
   */
  actualizarCarrito() {
    this.actualizarContador();
    this.mostrarCarrito();

    this.guardarCarrito();
  }

  guardarCarrito() {
    //desarrollar
  }

  mostrarCarrito() {
    let detalleCarrito = document.querySelector("#idCarrito");
    detalleCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto) => {
      const { id, nombre, precio, img, cantidad } = producto;

      const row = document.createElement("div");
      row.classList.add("row");
      total += parseInt(precio) * cantidad;

      row.innerHTML = `
                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            <img src="${img}" width="80"/>
                        </div>

                        <div class="col-3 d-flex align-items-center p-2 border-bottom">
                            ${nombre}
                        </div>

                        <div class="col-3 d-flex align-items-center justify-content-end p-2 border-bottom">
                            $ ${precio}
                        </div>  
                        
                        <div class="col-1 d-flex align-items-center justify-content-end p-2 border-bottom">
                            ${cantidad}
                        </div>

                        <div class="col-2 d-flex align-items-center justify-content-center p-2 border-bottom">
                          <a href="javascript:eliminar(${id})">
                              <i class="fa-solid fa-square-minus fa-2x"></i>
                          </a>
                        </div>
                      `;

      detalleCarrito.append(row);
    });

    let row = document.createElement("div");
    row.classList.add("row");

    row.innerHTML = `
                     <div class="col-4 d-flex align-items-center justify-content-start p-2 border-bottom">
                        Total a pagar:
                    </div>
                    <div class="col-8 d-flex align-items-center justify-content-end p-2 border-bottom">
                        <b> $ ${total}</b>
                    </div>
                    
                    `;

    detalleCarrito.appendChild(row);
  }

  actualizarContador() {
    let totalCarrito = this.contarProductos();

    let countCarrito = document.querySelector("#badgeCarrito");
    countCarrito.innerHTML = totalCarrito;
  }

  contarProductos() {
    let contarProductos = 0;

    carrito.forEach((producto) => {
      contarProductos = contarProductos + parseInt(producto.cantidad);
    });

    return contarProductos;
  }

  eliminarProducto(id) {
    //si confima proceso a eliminar
    Swal.fire({
      title: "Esta seguro de eliminar el producto ?",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo",
      cancelButtonText: "Cancelar, toque sin querer!",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = carrito.filter((articulo) => articulo.id != id);
        this.actualizarCarrito();

        //notidico de la eliminacion
        Toastify({
          text: "Producto eliminado con exito",
          duration: 2000,
          gravity: "bottom",
        }).showToast();
      }
    });
  }
}





























































































/*
//ARRAY de la primer categoria de los helados de CHOCOLATE
let arrayHelados = new Array();
arrayHelados.push(new Helado(1, "CHOCOLATE", "Chocolate", "descripcion", 1200));
arrayHelados.push(
  new Helado(2, "CHOCOLATE", "Chocolate con almendras", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(3, "CHOCOLATE", "Chocolate suizo", "descripcion", 1500)
);
arrayHelados.push(
  new Helado(4, "CHOCOLATE", "Chocolate italiano", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(5, "CHOCOLATE", "Chocolate Marroc", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(6, "CHOCOLATE", "Chocolate Rocher", "descripcion", 1800)
);
arrayHelados.push(
  new Helado(7, "CHOCOLATE", "Chocolate blanco", "descripcion", 1000)
);
arrayHelados.push(
  new Helado(8, "CHOCOLATE", "Mouse de chocolate", "descripcion", 1620)
);
arrayHelados.push(
  new Helado(9, "CHOCOLATE", "Chocolate blanco", "descripcion", 1100)
);

//ARRAY de la segunda categoria de los helados de DULCE DE LECHE

arrayHelados.push(
  new Helado(10, "DULCE DE LECHE", "Dulce de leche", "descripcion", 1200)
);
arrayHelados.push(
  new Helado(11, "DULCE DE LECHE", "Súper dulce de leche", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(
    12,
    "DULCE DE LECHE",
    "Dulce de leche granizado",
    "descripcion",
    1500
  )
);
arrayHelados.push(
  new Helado(
    13,
    "DULCE DE LECHE",
    "Dulce de leche con nuez",
    "descripcion",
    1280
  )
);
arrayHelados.push(
  new Helado(14, "DULCE DE LECHE", "Dulce de leche Bombón", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(
    15,
    "DULCE DE LECHE",
    "Bombón de chocolate con dulce de leche",
    "descripcion",
    1800
  )
);
arrayHelados.push(
  new Helado(
    16,
    "DULCE DE LECHE",
    "Suspiro de Dulce de leche",
    "descripcion",
    1000
  )
);
arrayHelados.push(
  new Helado(
    17,
    "DULCE DE LECHE",
    "Chocolinas con Dulce de leche natural y Queso Crema",
    "descripcion",
    1620
  )
);

//ARRAY de la tercera categoria de los helados de CREMA
arrayHelados.push(new Helado(18, "CREMA", "Crema Oreo", "descripcion", 1200));
arrayHelados.push(
  new Helado(19, "CREMA", "Crema de vainilla", "descripcion", 1140)
);
arrayHelados.push(
  new Helado(20, "CREMA", "Vainilla Vegana", "descripcion", 1500)
);
arrayHelados.push(
  new Helado(21, "CREMA", "Crema americana", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(22, "CREMA", "Crema de almendras", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(23, "CREMA", "Chantilly con frutillas", "descripcion", 1800)
);
arrayHelados.push(new Helado(24, "CREMA", "Granizado", "descripcion", 1000));
arrayHelados.push(
  new Helado(25, "CREMA", "Menta granizada", "descripcion", 1620)
);
arrayHelados.push(new Helado(26, "CREMA", "Tramontana", "descripcion", 1620));
arrayHelados.push(new Helado(27, "CREMA", "Pistacho", "descripcion", 1620));
arrayHelados.push(new Helado(28, "CREMA", "Tiramisú", "descripcion", 1620));
arrayHelados.push(
  new Helado(
    29,
    "CREMA",
    "Mascarpone con frutos del bosque",
    "descripcion",
    1620
  )
);

//ARRAY de la cuarta categoria de los helados FRUTALES
arrayHelados.push(
  new Helado(30, "FRUTALES", "Frutilla a la crema", "descripcion", 1200)
);
arrayHelados.push(
  new Helado(31, "FRUTALES", "Frutilla al agua", "descripcion", 1140)
);
arrayHelados.push(new Helado(32, "FRUTALES", "Frambuesa", "descripcion", 1500));
arrayHelados.push(
  new Helado(33, "FRUTALES", "Frutos rojos", "descripcion", 1280)
);
arrayHelados.push(
  new Helado(34, "FRUTALES", "Banana split", "descripcion", 1300)
);
arrayHelados.push(
  new Helado(35, "FRUTALES", "Coco con dulce de leche", "descripcion", 1800)
);
arrayHelados.push(
  new Helado(36, "FRUTALES", "Limón al agua", "descripcion", 1000)
);
arrayHelados.push(
  new Helado(37, "FRUTALES", "Mousse de limón", "descripcion", 1620)
);
arrayHelados.push(new Helado(38, "FRUTALES", "Lemon pie", "descripcion", 1620));
arrayHelados.push(
  new Helado(
    39,
    "FRUTALES",
    "Limonada con menta y jengibre",
    "descripcion",
    1620
  )
);
arrayHelados.push(new Helado(40, "FRUTALES", "Maracuyá", "descripcion", 1620));
arrayHelados.push(new Helado(41, "FRUTALES", "Caribe", "descripcion", 1620));
*/
