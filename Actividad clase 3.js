class Producto{
    constructor(nombre, precio, cantidad){
      this.nombre=nombre;
      this.precio=precio;
      this.cantidad=cantidad;
    }
  }
class CarritoDeCompras{
    constructor() {
        this.productos = [];
    }
    agregarProducto(producto) {
        this.productos.push(producto);
    }
    eliminarProducto(nombre) {
        this.productos = this.productos.filter((p) => p.nombre !== nombre);
    }
    modificarCantidad(nombre, nuevaCantidad) {
    const producto = this.productos.find((p) => p.nombre === nombre);
    if (producto) {
        producto.cantidad = nuevaCantidad;
    }
    }
    aplicarDescuento(nombre, porcentajeDescuento) {
    const producto = this.productos.find((p) => p.nombre === nombre);
    if (producto) {
    const descuento = (porcentajeDescuento / 100) * producto.precio;
      producto.precio -= descuento;
    }
    }

    generarResumen() {
    let total = 0;
    console.log("Resumen de la compra:");
    this.productos.forEach((p) => {
      const subtotal = p.precio * p.cantidad;
      console.log(`${p.nombre} (x${p.cantidad}): $${subtotal.toFixed(2)}`);
      total += subtotal;
    });
    console.log(`Total: $${total.toFixed(2)}`);
  }
}

const miCarrito = new CarritoDeCompras();

const producto1 = new Producto("Camiseta", 25.99, 2);
const producto2 = new Producto("Zapatos", 59.99, 1);

miCarrito.agregarProducto(producto1);
miCarrito.agregarProducto(producto2);

miCarrito.aplicarDescuento("Camiseta", 10);
miCarrito.modificarCantidad("Zapatos", 2);

miCarrito.generarResumen();
