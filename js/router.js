
/* NAVEGACIÓN DEL CATÁLOGO DEPORTIVO */

function mostrarVista() {
    const ruta = window.location.hash || "#/inicio";

    const vistas = {
        "#/inicio": "vista-inicio",
        "#/productos": "vista-productos",
        "#/categorias": "vista-categorias"
    };

    let vistaSeleccionada = vistas[ruta] || "vista-inicio";

    // COMPROBAR SI ES UNA CATEGORÍA
    if (ruta.startsWith("#/categoria/")) {
        const categoria = ruta.split("/")[2];

        const categorias = {
            zapatillas: "Zapatillas",
            gorras: "Gorras",
            ropa: "Ropa deportiva",
            accesorios: "Accesorios"
        };

        if (categorias[categoria]) {
            vistaSeleccionada = "vista-categoria-detalle";

            const titulo = document.getElementById("titulo-categoria");
            titulo.textContent = categorias[categoria];

            mostrarProductosCategoria(categoria);
        }
    }

    // MOSTRAR LA VISTA SELECCIONADA
    document.querySelectorAll("main section").forEach((seccion) => {
        seccion.hidden = seccion.id !== vistaSeleccionada;
    });

    // ACTUALIZAR EL MENÚ PRINCIPAL
    document.querySelectorAll(".main-nav a").forEach((enlace) => {
        const destino = enlace.getAttribute("href");

        const activa =
            destino === ruta ||
            (ruta.startsWith("#/categoria/") &&
             destino === "#/categorias");

        enlace.classList.toggle("nav-current", activa);

        if (activa) {
            enlace.setAttribute("aria-current", "page");
        } else {
            enlace.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("hashchange", mostrarVista);
