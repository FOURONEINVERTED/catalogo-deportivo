
/* NAVEGACIÓN DEL CATÁLOGO DEPORTIVO */

function mostrarVista() {
    const ruta = window.location.hash || "#/inicio";

    const vistas = {
        "#/inicio": "vista-inicio",
        "#/productos": "vista-productos",
        "#/categorias": "vista-categorias"
    };

    const vistaSeleccionada = vistas[ruta] || "vista-inicio";

    document.querySelectorAll("main section").forEach((seccion) => {
        seccion.hidden = seccion.id !== vistaSeleccionada;
    });

    document.querySelectorAll(".main-nav a").forEach((enlace) => {
        const activa = vistas[enlace.getAttribute("href")] === vistaSeleccionada;

        enlace.classList.toggle("nav-current", activa);

        if (activa) {
            enlace.setAttribute("aria-current", "page");
        } else {
            enlace.removeAttribute("aria-current");
        }
    });
}

window.addEventListener("hashchange", mostrarVista);
