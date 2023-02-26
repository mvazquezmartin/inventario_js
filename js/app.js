//Declaraciones
const inventario = [coca170, cocaGrande, cocaLata, cocaZero170, cocaZeroGrande];
const miLocalStorage = window.localStorage;
const baseDeDatos = [];

//Query de elementos
const cardProducto = document.getElementById("cardProductos");
const btnBuscar = document.getElementById("btnMainBuscar");
const btnAgregar = document.getElementById("btnMainAgregar");
const btnBorrar = document.getElementById("btnBorrar");
const inputDatos = document.getElementById("inputDatos");

//Funciones
const findProd = (idFind) =>
  inventario.find((prod) => prod.id === parseInt(idFind.value));

// RENDER ITEM CARD //
const productosCardRender = (array = inventario) => {
  array.forEach((producto) => {
    //ESTRUCTURA
    const miNodo = document.createElement("div");
    miNodo.classList.add("card", "m-1", "rounded-3", "border", "border-2");
    miNodo.style.width = "16rem";
    //IMAGEN
    const miNodoImg = document.createElement("img");
    miNodoImg.classList.add(
      "img-fluid",
      "rounded-3",
      "rounted-top",
      "border-bottom",
      "border-2"
    );
    const imgProd = `../assets/${producto.img}`;
    miNodoImg.setAttribute("src", imgProd);
    miNodoImg.setAttribute("alt", producto.nombre);
    //BODYCARD
    const miNodoBodyCard = document.createElement("div");
    miNodoBodyCard.classList.add("card-body");
    //TITULOCARD
    const miNodoTitle = document.createElement("h5");
    miNodoTitle.classList.add("cartd-title");
    miNodoTitle.textContent = `${producto.nombre}`;
    //ID PRODUCTO
    const miNodoId = document.createElement("p");
    miNodoId.classList.add("card-text");
    miNodoId.textContent = `PROD ID: ${producto.id}`;
    //PRECIO
    const miNodoPrecio = document.createElement("p");
    miNodoPrecio.classList.add("card-text");
    miNodoPrecio.textContent = `Precio unitario:$${producto.precio}`;
    //UNIDADES
    const miNodoUnidades = document.createElement("p");
    miNodoUnidades.classList.add("card-text");
    miNodoUnidades.textContent = `Unidades:${producto.cantidad}`;
    //INSERTAR MINODO
    miNodo.appendChild(miNodoImg);
    miNodo.appendChild(miNodoBodyCard);
    miNodoBodyCard.appendChild(miNodoId);
    miNodoBodyCard.appendChild(miNodoUnidades);
    miNodoBodyCard.appendChild(miNodoPrecio);
    cardProducto.appendChild(miNodo);
  });
};

// BUSCAR //
const renderBtnBuscar = () => {
  inputDatos.innerHTML = "";
  cardProducto.innerHTML = "";
  productosCardRender();
  //BUSCAR INPUT ESTRUCTURA
  const miNodo = document.createElement("div");
  miNodo.classList.add("my-1", "d-flex", "flex-column");
  //TITULO ID
  const miNodoTitulo = document.createElement("div");
  miNodoTitulo.textContent = "ID";
  //INPUT ID
  const miNodoIdInput = document.createElement("input");
  miNodoIdInput.classList.add("mb-1");
  miNodoIdInput.setAttribute("type", "number");
  miNodoIdInput.setAttribute("id", "prodId");
  //BTN BUSCAR
  const miNodoBtnBuscar = document.createElement("button");
  miNodoBtnBuscar.classList.add("m-1", "btn", "btn-info");
  miNodoBtnBuscar.setAttribute("type", "submit");
  miNodoBtnBuscar.setAttribute("value", "Buscar");
  miNodoBtnBuscar.setAttribute("id", "btnAccionBuscar");
  miNodoBtnBuscar.textContent = "Buscar";
  //INSERTAR MINODO
  miNodo.appendChild(miNodoTitulo);
  miNodo.appendChild(miNodoIdInput);
  miNodo.appendChild(miNodoBtnBuscar);
  inputDatos.appendChild(miNodo);

  const btnAccionBuscar = document.getElementById("btnAccionBuscar");
  btnAccionBuscar.addEventListener("click", buscarProd);

  const id = document.getElementById("prodId");
  function buscarProd() {
    const prod = findProd(id);
    if (prod !== undefined) {
      const rtaBusqueda = [prod];
      cardProducto.innerHTML = "";
      productosCardRender(rtaBusqueda);
      return;
    } else {
      Swal.fire(`No existe el ID:${id.value}`, " ", "error");
      return;
    }
  }
};

// AGREGAR Y MODIFICAR //
const renderBtnAgregarModificar = () => {
  inputDatos.innerHTML = "";
  cardProducto.innerHTML = "";
  productosCardRender();
  //INPUT AGREGAR&MODIFICAR ESTRUCTURA
  const miNodo = document.createElement("div");
  miNodo.classList.add("d-flex", "flex-column", "my-1");
  // TITULO ID
  const miNodoTitleId = document.createElement("div");
  miNodoTitleId.textContent = "ID";
  // INPUT ID
  const miNodoInputId = document.createElement("input");
  miNodoInputId.classList.add("mb-1");
  miNodoInputId.setAttribute("type", "number");
  miNodoInputId.setAttribute("id", "prodId");
  // TITULO NOMBRE PRODUCTO
  const miNodoTitleNombre = document.createElement("div");
  miNodoTitleNombre.textContent = "NOMBRE";
  // INPUT NOMBRE PRODUCTO
  const miNodoInputNombre = document.createElement("input");
  miNodoInputNombre.classList.add("mb-1");
  miNodoInputNombre.setAttribute("type", "text");
  miNodoInputNombre.setAttribute("id", "nombre");
  // TITULO PRECIO
  const miNodoTitlePrecio = document.createElement("div");
  miNodoTitlePrecio.textContent = "PRECIO";
  // INPUT PRECIO
  const miNodoInputPrecio = document.createElement("input");
  miNodoInputPrecio.classList.add("mb-1");
  miNodoInputPrecio.setAttribute("type", "text");
  miNodoInputPrecio.setAttribute("id", "precio");
  // TITULO CANTIDAD
  const miNodoTitleCantidad = document.createElement("div");
  miNodoTitleCantidad.textContent = "CANTIDAD";
  // INPUT CANTIDAD
  const miNodoInputCantidad = document.createElement("input");
  miNodoInputCantidad.classList.add("mb-1");
  miNodoInputCantidad.setAttribute("type", "number");
  miNodoInputCantidad.setAttribute("id", "cantidad");
  // BTN AGREGAR
  const miNodoBtnAgregar = document.createElement("button");
  miNodoBtnAgregar.classList.add("m-1", "btn", "btn-info");
  miNodoBtnAgregar.setAttribute("type", "submit");
  miNodoBtnAgregar.setAttribute("value", "agregar");
  miNodoBtnAgregar.setAttribute("id", "btnAccionAgregar");
  miNodoBtnAgregar.textContent = "AGREGAR";
  // BTN MODIFiCAR
  const miNodoBtnModificar = document.createElement("button");
  miNodoBtnModificar.classList.add("m-1", "btn", "btn-warning");
  miNodoBtnModificar.setAttribute("type", "submit");
  miNodoBtnModificar.setAttribute("value", "Modificar");
  miNodoBtnModificar.setAttribute("id", "btnAccionModificar");
  miNodoBtnModificar.textContent = "MODIFICAR";
  //INSERTAR MINODO
  miNodo.appendChild(miNodoTitleId);
  miNodo.appendChild(miNodoInputId);
  miNodo.appendChild(miNodoTitleNombre);
  miNodo.appendChild(miNodoInputNombre);
  miNodo.appendChild(miNodoTitlePrecio);
  miNodo.appendChild(miNodoInputPrecio);
  miNodo.appendChild(miNodoTitleCantidad);
  miNodo.appendChild(miNodoInputCantidad);
  inputDatos.appendChild(miNodo);

  const id = document.getElementById("prodId");
  const nombre = document.getElementById("nombre");
  const precio = document.getElementById("precio");
  const cantidad = document.getElementById("cantidad");

  //FUNCION  MODIFICAR || AGREGAR
  id.addEventListener("focusout", idUnico);
  id.addEventListener("focusin", () => {
    miNodoInputNombre.setAttribute("value", "");
    miNodoInputPrecio.setAttribute("value", "");
    miNodoInputCantidad.setAttribute("value", "");
  });
  function idUnico() {
    const prod = findProd(id);
    if (id.value == "") {
      return;
    }
    if (prod) {
      miNodoInputNombre.setAttribute("value", `${prod.nombre}`);
      miNodoInputPrecio.setAttribute("value", `${prod.precio}`);
      miNodoInputCantidad.setAttribute("value", `${prod.cantidad}`);
      miNodo.appendChild(miNodoBtnModificar);

      const btnAccionAgregar = document.getElementById("btnAccionAgregar");
      if (btnAccionAgregar) {
        miNodo.removeChild(btnAccionAgregar);
      }
      const btnAccionModificar = document.getElementById("btnAccionModificar");
      if (!btnAccionModificar) {
        miNodo.appendChild(miNodoBtnModificar);
      }
      btnAccionModificar.addEventListener("click", modificarProducto);
      function modificarProducto() {
        const modificar = parseInt(id.value);
        for (const producto of inventario) {
          if (producto.id === modificar) {
            producto.nombre = nombre.value;
            producto.precio = precio.value;
            producto.cantidad = cantidad.value;
          }
        }
        cardProducto.innerHTML = "";
        productosCardRender();
        guardarLocalStorage();
        Swal.fire(
          `¡Modificación exitosa! </br> Producto ID: ${id.value}`,
          "",
          "success"
        );
      }
      return;
    } else {
      const btnAccionModificar = document.getElementById("btnAccionModificar");
      if (btnAccionModificar) {
        miNodo.removeChild(btnAccionModificar);
      }
      miNodo.appendChild(miNodoBtnAgregar);
      const btnAccionAgregar = document.getElementById("btnAccionAgregar");
      if (!btnAccionAgregar) {
        miNodo.appendChild(miNodoBtnAgregar);
      }
      btnAccionAgregar.addEventListener("click", crearProducto);
      function crearProducto() {
        if(findProd(id)){          
          Swal.fire(`Existe el producto. </br> PROD ID: ${id.value}`, " ", "error");
          return
        }else{
        const DOMid = id.value;                
        const DOMimg = "cocaZeroMini.jpg";
        const DOMnombre = nombre.value;
        const DOMprecio = precio.value;
        const DOMcantidad = cantidad.value;
        const nuevoProducto = new Productos(
          DOMid,
          DOMimg,
          DOMnombre,
          DOMprecio,
          DOMcantidad
        );
        inventario.push(nuevoProducto);
        cardProducto.innerHTML = "";
        productosCardRender();
        guardarLocalStorage();
        Swal.fire(
          `Nuevo Producto Agregado </br> Prod ID: ${id.value}`,
          "",
          "success"
        )}
      }
      return;
    }
  }
};

// BORRAR //
const renderBtnBorrar = () => {
  inputDatos.innerHTML = "";
  cardProducto.innerHTML = "";
  productosCardRender();
  //BORRAR INPUT ESTRUCTURA
  const miNodo = document.createElement("div");
  miNodo.classList.add("my-1", "d-flex", "flex-column");
  //TITULO ID
  const miNodoTitulo = document.createElement("div");
  miNodoTitulo.textContent = "ID";
  //INPUT ID
  const miNodoIdInput = document.createElement("input");
  miNodoIdInput.classList.add("mb-1");
  miNodoIdInput.setAttribute("type", "number");
  miNodoIdInput.setAttribute("id", "prodId");
  //BTN BORRAR
  const miNodoBtnBorrar = document.createElement("button");
  miNodoBtnBorrar.classList.add("m-1", "btn", "btn-danger");
  miNodoBtnBorrar.setAttribute("type", "submit");
  miNodoBtnBorrar.setAttribute("value", "Buscar");
  miNodoBtnBorrar.setAttribute("id", "btnAccionBorrar");
  miNodoBtnBorrar.textContent = "Borrar";
  //INSERTAR MINODO
  miNodo.appendChild(miNodoTitulo);
  miNodo.appendChild(miNodoIdInput);
  miNodo.appendChild(miNodoBtnBorrar);
  inputDatos.appendChild(miNodo);

  const id = document.getElementById("prodId");
  const btnAccionBorrar = document.getElementById("btnAccionBorrar");
  btnAccionBorrar.addEventListener("click", borrarProducto);

  function borrarProducto() {
    const prodBorrar = inventario.indexOf(findProd(id));
    /* const indexId = inventario.indexOf(prodBorrar); */
    if (prodBorrar !== -1) {
      Swal.fire({
        title: `¿Quieres borrar el </br> PROD ID: ${id.value}?`,
        showDenyButton: true,
        confirmButtonText: "Borrar",
        denyButtonText: `Cancelar`,
      }).then((result) => {
        if (result.isConfirmed) {
          const prod = prodBorrar;
          inventario.splice(prod, 1);
          cardProducto.innerHTML = "";
          productosCardRender();
          guardarLocalStorage();
          Swal.fire("Producto eliminado", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Los cambios no se guardaron", "", "info");
        }
      });
    } else {
      Swal.fire(
        `No existe el producto. </br> PROD ID: ${id.value}`,
        " ",
        "error"
      );
    }
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
btnAgregar.addEventListener("click", renderBtnAgregarModificar);
btnBorrar.addEventListener("click", renderBtnBorrar);

//EJECUCIONES
productosCardRender();
cargarLocalStorage();