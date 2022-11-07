let inventario = [];

class Productos {
  constructor(id, nombre, precio) {
    this.id = parseInt(id);
    this.nombre = nombre;
    this.precio = parseInt(precio);
  }
}

function crearProducto() {
  let producto = new Productos(
    prompt("ingrese codigo del producto"),
    prompt("ingrese nombre del producto"),
    prompt("ingrese precio del producto")
  );
  inventario.push(producto);
}

function listaProductos() {
  if (inventario.length == 0) {
    alert("no hay productos en el inventario.");
  } else {
    for (const producto of inventario) {
      alert(`id: ${producto.id}\n nombre: ${producto.nombre}\n precio:$${producto.precio}`
        );
    }
  }
}

function borrarProducto() {
  if (inventario.length == 0) {
    alert("no hay productos en el inventario.");
  } else {
    let borrar = prompt("ingrese el id del producto a eliminar");

    for (const producto of inventario) {
      if (producto.id === parseInt(borrar)) {
        let elemento = inventario.indexOf(producto);
        inventario.splice(elemento, 1);        
        alert("producto Eliminado!");
        break;
      } else {
        alert("no se pudo encontrar el producto!");
      }
    }
  }
}

function modificarProducto() {
  if (inventario.length == 0) {
    alert("no hay productos en el inventario.");
  } else {
    let modificar = prompt("ingrese el id del producto a modificar");

    for (const producto of inventario) {
      if (producto.id === parseInt(modificar)) {
        producto.id = parseInt(prompt("ingrese nuevo id"));
        producto.nombre = prompt("ingrese nuevo nombre");
        producto.precio = parseInt(prompt("ingrese nuevo precio"));        
      }
    }
  }
}

let entrada = prompt(
  "Inventario\n A- Crear nuevo Producto\n B- Ver Inventario\n C- Borrar un Producto\n D- Modificar Producto\n E- Salir "
).toUpperCase();

while (entrada != "E") {
    console.log(entrada);
  switch (entrada) {
    case "A":
      crearProducto();
      break;
    case "B":
      listaProductos();
      break;
    case "C":
      borrarProducto();
      break;
    case "D":
      modificarProducto();
      break;

    default:
      alert("Ingrese una opcion valida");
      break;
  }

  entrada = prompt(
    "Elija una opcion.\n A- Crear nuevo producto\n B-Listar Los Productos\n C-Borrar un Producto\n D- Modificar Producto\n E-Salir "
  ).toUpperCase();
}
