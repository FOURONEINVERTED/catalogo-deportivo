
/* NAVEGACIÓN DEL CATÁLOGO DEPORTIVO */

function mostrarVista() {
    const ruta = window.location.hash || "#/inicio";

    const vistas = {
        "#/inicio": "vista-inicio",
        "#/productos": "vista-productos",
        "#/categorias": "vista-categorias"
    };

    let vistaSeleccionada = vistas[ruta] || "vista-inicio";

    // NAVEGACIÓN POR CATEGORÍAS
    if (ruta.startsWith("#/categoria/")) {
        const categoria = ruta.split("/")[2];

        const categorias = {
            zapatillas: "Zapatillas",
            gorras: "Gorras",
            ropa: "Ropa deportiva",
            accesorios: "Accesorios",
            balones: "Balones"
        };

        if (categorias[categoria]) {
            vistaSeleccionada = "vista-categoria-detalle";

            const titulo = document.getElementById("titulo-categoria");
            titulo.textContent = categorias[categoria];

            mostrarProductosCategoria(categoria);
        }
    }

    // NAVEGACIÓN AL DETALLE DE UN PRODUCTO
    if (ruta.startsWith("#/producto/")) {
        const id = ruta.split("/")[2];

        vistaSeleccionada = "vista-producto-detalle";
        mostrarDetalleProducto(id);
    }

    // MOSTRAR LA VISTA SELECCIONADA
    
    document.querySelectorAll("main.main-content > section").forEach((seccion) => {

        seccion.hidden = seccion.id !== vistaSeleccionada;
    });

    // ACTUALIZAR EL MENÚ PRINCIPAL
    document.querySelectorAll(".main-nav a").forEach((enlace) => {
        const destino = enlace.getAttribute("href");

        
const activa =
    destino === ruta ||
    (ruta.startsWith("#/categoria/") &&
        destino === "#/categorias") ||
    (ruta.startsWith("#/producto/") &&
        destino === (
            rutaAnterior.startsWith("#/categoria/")
                ? "#/categorias"
                : "#/productos"
        ));


        enlace.classList.toggle("nav-current", activa);

        if (activa) {
            enlace.setAttribute("aria-current", "page");
        } else {
            enlace.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("hashchange", mostrarVista);

/* RECORDAR DESDE DÓNDE SE ABRIÓ UN PRODUCTO */

let rutaAnterior = window.location.hash || "#/inicio";

window.addEventListener("hashchange", () => {
    const rutaActual = window.location.hash;

    if (rutaActual.startsWith("#/producto/")) {
        const enlaceVolver = document.querySelector(
            ".enlace-volver-productos"
        );

        if (enlaceVolver) {
            const vieneDeCategoria =
                rutaAnterior.startsWith("#/categoria/");

            enlaceVolver.href = vieneDeCategoria
                ? rutaAnterior
                : "#/productos";

            enlaceVolver.textContent = vieneDeCategoria
                ? "← Volver a la categoría"
                : "← Volver a productos";
        }
    }

    rutaAnterior = rutaActual;
});

/* CENTRAR LA FOTOGRAFÍA AL ABRIR UN PRODUCTO */

window.addEventListener("hashchange", () => {
    if (!window.location.hash.startsWith("#/producto/")) {
        return;
    }

    requestAnimationFrame(() => {
        const imagen = document.querySelector("#detalle-producto img");

        if (imagen) {
            imagen.scrollIntoView({
                behavior: "auto",
                block: "center"
            });
        }
    });
});
