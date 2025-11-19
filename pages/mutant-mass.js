(() => {
    const mutantMassArray = [
      { id: 1, imagen: "..//images/mutant-mass-1.png", nombre: "Mutant mass Star Nutrition", precio: 67900 },
      { id: 2, imagen: "..//images/mutant-mass-2.webp", nombre: "Mutant mass Evolution", precio: 44500 },
      { id: 3, imagen: "..//images/mutant-mass-3.webp", nombre: "Ultra mass Ena Sport", precio: 38000 },
      { id: 4, imagen: "..//images/mutant-mass-4.jpg", nombre: "Mutant mass Extreme Gainer", precio: 35700 },
    ];
  
    const carritoMutant = JSON.parse(localStorage.getItem("carritoMutant")) || [];
  
    const botones = document.querySelectorAll("[id^='boton-mutant']");
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const idProducto = parseInt(boton.id.replace("boton-mutant", ""));
        const productoEncontrado = mutantMassArray.find(p => p.id === idProducto);
  
        if (productoEncontrado) {
          carritoMutant.push(productoEncontrado);
          localStorage.setItem("carritoMutant", JSON.stringify(carritoMutant));
          Swal.fire({
            title: `Se agregó "${productoEncontrado.nombre}" al carrito`,
            icon: "success",
            draggable: true
          });
        }
      });
    });
  })();
  
  