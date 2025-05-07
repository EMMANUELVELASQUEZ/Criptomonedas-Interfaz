// Datos de productos (puedes adaptarlos según los productos que tengas)
const productos = [
    { nombre: "Camisa Azul", precio: 20, id: 1 },
    { nombre: "Pantalón Negro", precio: 30, id: 2 },
    // Agrega más productos aquí
];

// Carrito de compras (almacenado en localStorage)
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// Actualiza la cantidad de productos en el carrito (en el header)
function actualizarCarrito() {
    const numCarrito = document.getElementById("numCarrito");
    numCarrito.textContent = carrito.length;
}

// Agregar al carrito
function agregarAlCarrito(nombreProducto, precioProducto) {
    carrito.push({ nombre: nombreProducto, precio: precioProducto });
    localStorage.setItem("carrito", JSON.stringify(carrito));
    actualizarCarrito();
}

// Mostrar carrito de compras
function mostrarCarrito() {
    const carritoSection = document.getElementById("carrito");
    const listaCarrito = document.getElementById("listaCarrito");
    listaCarrito.innerHTML = ""; // Limpiar carrito antes de mostrarlo

    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    document.getElementById("totalCarrito").textContent = total;
    carritoSection.style.display = "block";
}

// Vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito(); // Actualiza la vista del carrito
    actualizarCarrito(); // Actualiza el contador en el header
}

// Finalizar compra (crear ticket)
function finalizarCompra() {
    const ticketSection = document.getElementById("ticket");
    const ticketDetalle = document.getElementById("ticketDetalle");
    ticketDetalle.innerHTML = ""; // Limpiar ticket antes de mostrarlo

    let total = 0;

    carrito.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.nombre} - $${item.precio}`;
        ticketDetalle.appendChild(li);
        total += item.precio;
    });

    document.getElementById("totalTicket").textContent = total;
    ticketSection.style.display = "block";
    document.getElementById("carrito").style.display = "none"; // Ocultar carrito
    vaciarCarrito(); // Vaciar carrito después de la compra
}

// Volver a la tienda
function volverATienda() {
    document.getElementById("ticket").style.display = "none";
    document.getElementById("productos").style.display = "block";
    actualizarCarrito();
}
