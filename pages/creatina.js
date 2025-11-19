(() => {
    const creatinaArray = [
      { id: 1, imagen: "..//images/creatina-1.webp", nombre: "Creatina monohidrato Ena Sport", precio: 36900 },
      { id: 2, imagen: "..//images/creatina-2.webp", nombre: "Creatina monohidrato Ultratech", precio: 105000 },
      { id: 3, imagen: "..//images/creatina-3.jpg", nombre: "Creatina monohidrato Gentech", precio: 53500 },
      { id: 4, imagen: "..//images/creatina-4.jpg", nombre: "Creatina monohidrato Teingro", precio: 28600 },
    ];
  
    const carritoCreatina = JSON.parse(localStorage.getItem("carritoCreatina")) || [];
  
    const botones = document.querySelectorAll("[id^='boton-creatina']");
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const idProducto = parseInt(boton.id.replace("boton-creatina", ""));
        const productoEncontrado = creatinaArray.find(p => p.id === idProducto);
  
        if (productoEncontrado) {
          carritoCreatina.push(productoEncontrado);
          localStorage.setItem("carritoCreatina", JSON.stringify(carritoCreatina));
          Swal.fire({
            title: `Se agregó "${productoEncontrado.nombre}" al carrito`,
            icon: "success",
            draggable: true
          });
        }
      });
    });
  })();
  