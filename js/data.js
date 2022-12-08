class Productos {
  constructor(id, img, nombre, precio, cantidad) {
    this.id = parseInt(id);
    this.img= img;
    this.nombre = nombre;
    this.precio = (precio);
    this.cantidad = cantidad;
  }
}

const coca170 = new Productos('001', 'coca170.jpg', 'coca cola 170ml', '123', '100');
const cocaGrande = new Productos('002', 'cocaGrande.jpg', 'Coca Cola 2l', '321', '101');
const cocaLata = new Productos('003', 'cocaLata.jpg', 'Coca Cola Lata', '100', '102');
const cocaZero170 = new Productos('004', 'cocaZero170.jpg', 'Coca Cola Zero 170ml', '123', '102');
const cocaZeroGrande = new Productos('005', 'cocaZeroGrande.jpg', 'Coca Zero 2l', '321', '103');

