//Declaraciones
const inventario = [coca170, cocaGrande, cocaLata, cocaZero170, cocaZeroGrande];
const miLocalStorage = window.localStorage;
const baseDeDatos = [];

//Query de elementos
const cardProducto = document.querySelector("#cardProductos");
const btnBuscar = document.querySelector("#btnMainBuscar");
const btnAgregar = document.getElementById("btnMainAgregar");
const btnBorrar = document.getElementById("btnBorrar");
const btnModificar = document.getElementById("btnModificar");
const inputDatos = document.querySelector("#inputDatos");

//Funciones
const productosCardRender = () => {
  inventario.forEach((producto) => {
    const card = document.createElement("div");
    card.classList.add("card", "col-lg-3", "m-1");
    card.style.width = "18rem";
    card.innerHTML = `
      <img src="assets/${producto.img}" class="card-img-top" alt="${producto.nombre}">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">Id Producto:${producto.id}</p> 
        <p class="card-text">Precio unitario:$${producto.precio}</p>
        <p class="card-text">Unidades:${producto.cantidad}</p>             
      </div>
    `;
    cardProducto.append(card);
  });
};

const renderBtnBuscar = () => {
  document.querySelector("#inputDatos").innerHTML = "";
  document.querySelector("#cardProductos").innerHTML = "";
  productosCardRender();
  const DOMinput = document.createElement("div");
  DOMinput.innerHTML = `
  <div>ID</div>
  <input class="mb-1" type="number" id="prodId">
  <input class="mb-1 btn-info" type="submit" value="Buscar" id="btnAccionBuscar">
  `;
  inputDatos.append(DOMinput);
  btnAccionBuscar.addEventListener("click", buscarProd);

  const id = document.getElementById("prodId");
  function buscarProd() {
    const prod = inventario.find((prod) => prod.id === parseInt(id.value));
    if (prod !== undefined) {
      document.querySelector("#cardProductos").innerHTML = "";
      const card = document.createElement("div");
      card.classList.add("card", "col-lg-3", "m-1");
      card.style.width = "18rem";
      card.innerHTML = `
          <img src="assets/${prod.img}" class="card-img-top" alt="${prod.nombre}">
          <div class="card-body">
          <p class="card-text">Unidades:${prod.cantidad}</p>
          <h5 class="card-title">${prod.nombre}</h5>
          <p class="card-text">Id Producto:${prod.id}</p> 
          <p class="card-text">Precio unitario:$${prod.precio}</p>          
          </div>
        `;
      cardProducto.append(card);
      return;
    } else {
      Swal.fire("No existe ese producto", " ", "error");
      return;
    }
  }
};

const renderBtnAgregar = () => {
  document.querySelector("#inputDatos").innerHTML = "";
  document.querySelector("#cardProductos").innerHTML = "";
  productosCardRender();
  const DOMinput = document.createElement("div");
  DOMinput.innerHTML = `
  <div>ID</div>
  <input class="mb-1" type="number" id="prodId">
  <div>NOMBRE</div>
  <input class="mb-1" type="text" id="nombre">
  <div>PRECIO</div>
  <input class="mb-1" type="number" id="precio">
  <div>CANTIDAD</div>
  <input class="mb-1" type="number" id="cantidad"><br>
  <input class="mb-1 btn-info" type="submit" value="Agregar" id="btnAccionAgregar">
  `;
  inputDatos.append(DOMinput);

  const id = document.getElementById("prodId");
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const cantidad = document.getElementById("cantidad");
  btnAccionAgregar.addEventListener("click", crearProducto);
  function crearProducto() {
    const DOMid = id.value;
    const DOMimg = "cocaZeroMini.jpg";
    const DOMnombre = nombre.value;
    const DOMprecio = precio.value;
    const DOMcantidad = cantidad.value;
    let nuevoProducto = new Productos(
      DOMid,
      DOMimg,
      DOMnombre,
      DOMprecio,
      DOMcantidad
    );
    inventario.push(nuevoProducto);
    document.querySelector("#cardProductos").innerHTML = "";
    productosCardRender();
    guardarLocalStorage();
  }
};

const renderBtnBorrar = () => {
  document.querySelector("#inputDatos").innerHTML = "";
  document.querySelector("#cardProductos").innerHTML = "";
  productosCardRender();
  const DOMinput = document.createElement("div");
  DOMinput.innerHTML = `
  <div>ID</div>
  <input class="mb-1" type="number" id="prodId">
  <input class="mb-1 btn-danger" type="submit" value="Borrar" id="btnAccionBorrar">
  `;
  inputDatos.append(DOMinput);
  const id = document.getElementById("prodId");
  btnAccionBorrar.addEventListener("click", borrarProducto);

  function borrarProducto() {
    const DOMid = parseInt(id.value);
    const prodBorrar = inventario.find((prod) => prod.id === DOMid);
    const indexId = inventario.indexOf(prodBorrar);
    if (indexId !== -1) {
      let elemento = indexId;
      inventario.splice(elemento, 1);
      Swal.fire("producto Eliminado", "", "success");
    } else {
      Swal.fire("No hay producto con esa ID", " ", "error");
    }
    document.querySelector("#cardProductos").innerHTML = "";
    productosCardRender();
    guardarLocalStorage();
  }
};

const renderBtnModificar = () => {
  document.querySelector("#inputDatos").innerHTML = "";
  document.querySelector("#cardProductos").innerHTML = "";
  productosCardRender();
  const DOMinput = document.createElement("div");
  DOMinput.innerHTML = `
  <div>ID</div>
  <input class="mb-1" type="number" id="prodId">
  <div>NOMBRE</div>
  <input class="mb-1" type="text" id="nombre">
  <div>PRECIO</div>
  <input class="mb-1" type="number" id="precio">
  <div>CANTIDAD</div>
  <input class="mb-1" type="number" id="cantidad"><br>
  <input class="mb-1 btn-info" type="submit" value="Modificar" id="btnAccionModificar">
  `;
  inputDatos.append(DOMinput);

  const id = document.getElementById("prodId");
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const cantidad = document.getElementById("cantidad");
  btnAccionModificar.addEventListener("click", modificarProducto);
  inputDatos.append(DOMinput);
  function modificarProducto() {
    let modificar = id.value;
    for (const producto of inventario) {
      if (producto.id === parseInt(modificar)) {
        producto.id = parseInt(id.value);
        producto.img = "cocaZeroMini.jpg";
        producto.nombre = nombre.value;
        producto.precio = precio.value;
        producto.cantidad = cantidad.value;
      }
    }
    document.querySelector("#cardProductos").innerHTML = "";
    productosCardRender();
    guardarLocalStorage();
  }
};

function guardarLocalStorage() {
  miLocalStorage.setItem("baseDeDatos", JSON.stringify(baseDeDatos));
}

function cargarLocalStorage() {
  if (miLocalStorage.getItem("baseDeDatos") !== null) {
    carrito = JSON.parse(miLocalStorage.getItem("baseDeDatos"));
  }
}

//EvenListeners
btnBuscar.addEventListener("click", renderBtnBuscar);
btnAgregar.addEventListener("click", renderBtnAgregar);
btnModificar.addEventListener("click", renderBtnModificar);
btnBorrar.addEventListener("click", renderBtnBorrar);

//EJECUCIONES
productosCardRender();
cargarLocalStorage();
