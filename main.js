const proteinasArray = [
  { id: 1, nombre: "Whey Protein Ena Sport", precio: 55700 },
  { id: 2, nombre: "Mutant mass Star Nutrition", precio: 67900 },
  { id: 3, nombre: "Creatina monohidrato Gentech", precio: 53500 },
  { id: 4, nombre: "Bcaa Universal", precio: 52500 },
];

// Función para calcular el total
function calcularTotal(arrayProductos) {
  return arrayProductos.reduce((acumulador, producto) => acumulador + producto.precio, 0);
}

// Función que carga los productos en el DOM
const cargarDOM = () => {
  const productos = document.getElementById("productos-container");
  productos.innerHTML = ""; // Limpiamos por si se vuelve a llamar

  proteinasArray.forEach((producto) => {
    const divProducto = document.createElement("div");
    divProducto.innerHTML = `
          <div class="Producto-agregar">
          <div>
         <small>Titulo</small>
         <h3>${producto.nombre}</h3>
         </div>
         <div>
         <small>Precio</small>
         <p>$${producto.precio}</p>
         </div>
         <div>
         <small>Cantidad</small>
         <p>1</p>
         </div>
         <button class="boton-eliminar"><i class="bi bi-trash3-fill"></i></button>
      </div>
    `;

    productos.appendChild(divProducto);
  });

  // Calculamos y mostramos el total al final
  const total = calcularTotal(proteinasArray);
  const totalDiv = document.createElement("div");
  totalDiv.classList.add("total-carrito");
  totalDiv.innerHTML = `<h3>Total: $${total}</h3>`;

  productos.appendChild(totalDiv);
};

// Ejecutamos al cargar
cargarDOM();
