const proteinasArray = [
  { id: 1, imagen: "../images/proteina-1.webp", nombre: "Whey Protein Ena Sport", precio: 55700 },
  { id: 2, imagen: "../images/proteina-2.webp", nombre: "Whey Protein Raptor", precio: 38000 },
  { id: 3, imagen: "../images/proteina-3.webp", nombre: "Whey Protein Avance", precio: 32600 },
  { id: 4, imagen: "../images/proteina-4.webp", nombre: "Tri Protein Ultratech", precio: 29800 },
];

const carritoProteina = JSON.parse(localStorage.getItem("carritoProteina")) || [];

// Selecciona todos los botones que tengan id que empiece con "boton-proteina"
const botones = document.querySelectorAll("[id^='boton-proteina']");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    // Extrae el número del id, ej: "boton-proteina3" → 3
    const idProducto = parseInt(boton.id.replace("boton-proteina", ""));
    const productoEncontrado = proteinasArray.find(p => p.id === idProducto);

    if (productoEncontrado) {
      carritoProteina.push(productoEncontrado);
      localStorage.setItem("carritoProteina", JSON.stringify(carritoProteina));
      Swal.fire({
        title: `Se agregó "${productoEncontrado.nombre}" al carrito`,
        icon: "success",
        draggable: true
      });
    }
  });
});
