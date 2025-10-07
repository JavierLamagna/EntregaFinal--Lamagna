function carritoDeCompras() {
    const productos = [
        { id: 1, nombre: "Proteina", precio: 20000 },
        { id: 2, nombre: "Creatina", precio: 16000 },
        { id: 3, nombre: "Bcaa", precio: 7000 },
        { id: 4, nombre: "Multivitaminico", precio: 12000 },
    ];

    const carrito = [];
    const IVA = 0.21;
    let total = 0;
    let continuar = true;

    while (continuar) {
        // Mostrar menú
        let menu = "Seleccione un producto (o 0 para salir):\n";
        for (let prod of productos) {
            menu += `${prod.id}. ${prod.nombre} - $${prod.precio}\n`;
        }

        const opcion = parseInt(prompt(menu));

        if (opcion === 0 || isNaN(opcion)) {
            continuar = false;
            break;
        }

        const productoSeleccionado = productos.find(function (producto) {
            return producto.id === opcion;
        });

        //cargar producto
        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            total += productoSeleccionado.precio;
            alert(`${productoSeleccionado.nombre} agregado al carrito.`);
        } else {
            alert("Opción inválida, intente nuevamente.");
        }
    }

    if (carrito.length === 0) {
        alert("No compraste nada.");
        return;
    }

    const totalConIVA = total + total * IVA;

    // Mostrar resumen
    let lista = carrito.map(p => `${p.nombre} - $${p.precio}`).join("\n");
    alert(
        "Productos comprados:\n" + lista +
        `\nTotal con IVA (21%): $${totalConIVA}`
    );
}

carritoDeCompras();