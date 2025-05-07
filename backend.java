import java.util.ArrayList;

class Producto {
    String nombre;
    double precio;
    String descripcion;

    Producto(String nombre, double precio, String descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
    }

    void mostrarDetalles() {
        System.out.println("Nombre: " + nombre);
        System.out.println("Precio: " + precio);
        System.out.println("Descripción: " + descripcion);
    }
}

public class Tienda {
    private static ArrayList<Producto> productos = new ArrayList<>();

    public static void agregarProducto(String nombre, double precio, String descripcion) {
        Producto p = new Producto(nombre, precio, descripcion);
        productos.add(p);
    }

    public static void mostrarProductos() {
        for (Producto p : productos) {
            p.mostrarDetalles();
        }
    }

    public static void main(String[] args) {
        agregarProducto("Pantalón", 500, "Pantalón de mezclilla para hombre");
        agregarProducto("Vestido", 600, "Vestido elegante para mujer");
        
        mostrarProductos();
    }
}
