(() => {
    const bcaaArray = [
      { id: 1, imagen: "..//images/bcaa-1.webp", nombre: "Bcaa Ena Sport", precio: 17100 },
      { id: 2, imagen: "..//images/bcaa-2.webp", nombre: "Bcaa Avance", precio: 12000 },
      { id: 3, imagen: "..//images/bcaa-3.webp", nombre: "Mtor Bcaa Star Nutrition", precio: 36500 },
      { id: 4, imagen: "..//images/bcaa-4.webp", nombre: "Bcaa Universal", precio: 52500 },
    ];
  
    const carritoBcaa = JSON.parse(localStorage.getItem("carritoBcaa")) || [];
  
    const botones = document.querySelectorAll("[id^='boton-bcaa']");
    botones.forEach(boton => {
      boton.addEventListener("click", () => {
        const idProducto = parseInt(boton.id.replace("boton-bcaa", ""));
        const productoEncontrado = bcaaArray.find(p => p.id === idProducto);
  
        if (productoEncontrado) {
          carritoBcaa.push(productoEncontrado);
          localStorage.setItem("carritoBcaa", JSON.stringify(carritoBcaa));
          Swal.fire({
            title: `Se agregó "${productoEncontrado.nombre}" al carrito`,
            icon: "success",
            draggable: true
          });
        }
      });
    });
  })();