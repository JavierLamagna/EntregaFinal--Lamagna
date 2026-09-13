# WorldSupplements

E-commerce Front-End de suplementos deportivos desarrollado con HTML, CSS y JavaScript.

El proyecto simula una tienda online donde los usuarios pueden explorar diferentes categorías de suplementos, agregar productos al carrito y mantener su selección almacenada en el navegador.

## Descripción

**WorldSupplements** fue desarrollado como proyecto académico de desarrollo web con el objetivo de aplicar conceptos de maquetación, diseño responsive, manipulación del DOM, eventos y persistencia de información en el navegador.

La tienda incluye diferentes categorías de suplementos deportivos:

* Proteínas
* Ganadores de masa
* Creatina
* BCAA

El usuario puede navegar entre las categorías y agregar productos al carrito.

## Tecnologías

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Bootstrap Icons
* SweetAlert2
* LocalStorage
* Google Fonts

## Funcionalidades

* Catálogo de suplementos deportivos.
* Organización de productos por categorías.
* Navegación mediante menú Bootstrap.
* Carrito de compras.
* Persistencia del carrito mediante `localStorage`.
* Recuperación de productos almacenados al recargar la aplicación.
* Notificaciones interactivas mediante SweetAlert2.
* Interfaz desarrollada con CSS y Bootstrap.
* Página específica para visualizar el carrito.

## Estructura del proyecto

```text
EntregaFinal--Lamagna/
│
├── images/
│   └── Imágenes de productos y recursos visuales
│
├── pages/
│   ├── carrito.html
│   ├── carritojs.js
│   ├── mutant-mass.js
│   ├── creatina.js
│   └── bcaa.js
│
├── index.html
├── estilos.css
├── main.js
└── README.md
```

## Funcionamiento del carrito

Los productos seleccionados se almacenan utilizando la API `localStorage` del navegador.

Esto permite mantener la información del carrito incluso después de actualizar la página.

Ejemplo conceptual:

```javascript
localStorage.setItem("carrito", JSON.stringify(productos));
```

Posteriormente los datos pueden recuperarse mediante:

```javascript
JSON.parse(localStorage.getItem("carrito"));
```

## Instalación

No requiere instalación de dependencias.

Clonar el repositorio:

```bash
git clone https://github.com/JavierLamagna/EntregaFinal--Lamagna.git
```

Ingresar al proyecto:

```bash
cd EntregaFinal--Lamagna
```

Abrir `index.html` en el navegador.

También se recomienda utilizar **Live Server** desde Visual Studio Code.

## Alcance

Actualmente el proyecto funciona completamente del lado del cliente.

No utiliza:

* Backend.
* Base de datos externa.
* Sistema de autenticación.
* Procesamiento real de pagos.
* API de productos.

El carrito se administra utilizando almacenamiento local del navegador.

## Próximas mejoras

El proyecto puede evolucionar incorporando:

* Generación dinámica del catálogo desde JavaScript.
* Unificación del manejo del carrito.
* Diseño completamente responsive.
* Filtros y búsqueda de productos.
* Gestión de cantidades.
* Cálculo del total de compra.
* Checkout.
* Consumo de una API.
* Backend y base de datos.
* Sistema de usuarios.
* Testing automatizado.
* Mejoras de accesibilidad y SEO.

## Objetivos del proyecto

Este desarrollo permitió aplicar conceptos como:

* Estructura semántica con HTML.
* Estilos con CSS.
* Diseño de interfaces.
* Bootstrap.
* Manipulación del DOM.
* Manejo de eventos.
* Arrays y objetos en JavaScript.
* Persistencia mediante LocalStorage.
* Integración de librerías externas.
* Organización de un proyecto Front-End.

## Autor

**Javier Lamagna**

Desarrollador Front-End en formación.

GitHub: `JavierLamagna`
