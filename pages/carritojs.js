const carritoProteina = JSON.parse(localStorage.getItem("carritoProteina")) || [];
const carritoMutant = JSON.parse(localStorage.getItem("carritoMutant")) || [];
const carritoCreatina = JSON.parse(localStorage.getItem("carritoCreatina")) || [];
const carritoBcaa = JSON.parse(localStorage.getItem("carritoBcaa")) || [];


const cargarDOM = () => {
  const productos = document.getElementById("productos-container");
  const totalContainer = document.getElementById("total-container");

  productos.innerHTML = "";

  carritoProteina.forEach((producto, index) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("Producto-agregar");
    divProducto.innerHTML = `
      <img class="carrito-imagen" src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <small>Título</small>
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
      <button class="boton-eliminar" data-index="${index}" data-tipo="proteina">
        <i class="bi bi-trash3-fill"></i>
      </button>
    `;

    productos.appendChild(divProducto);
  });

  carritoCreatina.forEach((producto, index) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("Producto-agregar");
    divProducto.innerHTML = `
      <img class="carrito-imagen" src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <small>Título</small>
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
      <button class="boton-eliminar" data-index="${index}" data-tipo="creatina">
        <i class="bi bi-trash3-fill"></i>
      </button>
    `;

    productos.appendChild(divProducto);
  });

  carritoBcaa.forEach((producto, index) => {
    const divProducto = document.createElement("div");
    divProducto.classList.add("Producto-agregar");
    divProducto.innerHTML = `
      <img class="carrito-imagen" src="${producto.imagen}" alt="${producto.nombre}">
      <div>
        <small>Título</small>
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
      <button class="boton-eliminar" data-index="${index}" data-tipo="bcaa">
        <i class="bi bi-trash3-fill"></i>
      </button>
    `;

    productos.appendChild(divProducto);
  });


  calcularTotal();

  const botonesEliminar = document.querySelectorAll(".boton-eliminar");
  botonesEliminar.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.index;
      const tipo = e.currentTarget.dataset.tipo;
      eliminarProducto(index, tipo);
    });
  });
};

function eliminarProducto(index, tipo) {
  if (tipo === "proteina") {
    carritoProteina.splice(index, 1);
    localStorage.setItem("carritoProteina", JSON.stringify(carritoProteina));
  }

  if (tipo === "mutant") {
    carritoMutant.splice(index, 1);
    localStorage.setItem("carritoMutant", JSON.stringify(carritoMutant));
  }

  if (tipo === "creatina") {
    carritoCreatina.splice(index, 1);
    localStorage.setItem("carritoCreatina", JSON.stringify(carritoCreatina));
  }

  if (tipo === "bcaa") {
    carritoBcaa.splice(index, 1);
    localStorage.setItem("carritoBcaa", JSON.stringify(carritoBcaa));
  }

  cargarDOM();
}

function calcularTotal() {
  const totalContainer = document.getElementById("total-container");

  const totalProteina = carritoProteina.reduce((acc, p) => acc + p.precio, 0);
  const totalMutant = carritoMutant.reduce((acc, p) => acc + p.precio, 0);
  const totalCreatina = carritoCreatina.reduce((acc, p) => acc + p.precio, 0);
  const totalBcaa = carritoBcaa.reduce((acc, p) => acc + p.precio, 0);

  const total = totalProteina + totalMutant + totalCreatina + totalBcaa;

  totalContainer.textContent = `Total: $${total.toLocaleString()}`;
}

cargarDOM();


const botonComprar = document.getElementById("fin-compra");

botonComprar.addEventListener("click", () => {
  Swal.fire({
    title: "Deseas confirmar la compra?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Confirmar compra",
    denyButtonText: `Cancelar compra`
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Compra exitosa", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Compra cancelada", "", "warning");
    }
  });
})