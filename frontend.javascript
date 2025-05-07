const productos = [
    { nombre: "Pantalón", precio: 500, descripcion: "Pantalón de mezclilla para hombre" },
    { nombre: "Vestido", precio: 600, descripcion: "Vestido elegante para mujer" }
];

function mostrarProductos() {
    const contenedor = document.getElementById("productos");
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>${producto.descripcion}</p>
            <button>Agregar al carrito</button>
        `;
        contenedor.appendChild(div);
    });
}

window.onload = mostrarProductos;
