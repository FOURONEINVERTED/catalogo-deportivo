
/* NAVEGACIÓN DEL CATÁLOGO DEPORTIVO */

function mostrarVista() {
    const ruta = window.location.hash || "#/inicio";

/* SUBIR AL INICIO AL SELECCIONAR UN EQUIPO MLB */

if (ruta.startsWith("#/categoria/")) {
    requestAnimationFrame(() => {
        window.scrollTo(0, 0);
    });
}

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
        };

        if (categorias[categoria]) {
            vistaSeleccionada = "vista-categoria-detalle";

            const titulo = document.getElementById("titulo-categoria");
            titulo.textContent = categorias[categoria];

            mostrarProductosCategoria(categoria);
        
/* OCULTAR CARRUSEL AL SELECCIONAR UN EQUIPO MLB */

if (categoria === "gorras") {

    const carruselMLB = document.getElementById("equipos-mlb");

    if (carruselMLB) {

        const mostrarCarrusel = ruta === "#/categoria/gorras";

        carruselMLB.hidden = !mostrarCarrusel;
        carruselMLB.style.display = mostrarCarrusel ? "" : "none";

/* RECUPERAR POSICION DEL CARRUSEL MLB */

if (mostrarCarrusel) {
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            const lista = carruselMLB.querySelector(".equipos-mlb-lista");

            if (lista && typeof window.posicionCarruselMLB === "number") {
                lista.scrollLeft = window.posicionCarruselMLB;
            }
        });
    });
}

    }
}

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

/* RECORDAR LA POSICIÓN AL ABRIR UNA FICHA */

let posicionAntesDeFicha = null;
let rutaAntesDeFicha = null;

document.addEventListener("click", (evento) => {
    const enlaceProducto = evento.target.closest(
        'a[href^="#/producto/"]'
    );

    if (!enlaceProducto) return;

    posicionAntesDeFicha = window.scrollY;
    rutaAntesDeFicha = window.location.hash;
});

/* RECUPERAR LA POSICIÓN AL VOLVER */

window.addEventListener("hashchange", () => {
    if (
        posicionAntesDeFicha === null ||
        window.location.hash !== rutaAntesDeFicha
    ) {
        return;
    }

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            window.scrollTo({
                top: posicionAntesDeFicha,
                behavior: "instant"
            });

            posicionAntesDeFicha = null;
            rutaAntesDeFicha = null;
        });
    });
});



/* =========================================
   FOURONE WEB 2.0
   COLORES DE CABECERA POR EQUIPO MLB
   PASO 1137
   ========================================= */

(function configurarColoresCabeceraMLB() {

    const coloresEquipos = {

        "atlanta-braves": "#13274F",
        "arizona-diamondbacks": "#13274F",
        "athletics": "#004B3F",
        "baltimore-orioles": "#111111",
        "boston-red-sox": "#13274F",
        "chicago-cubs": "#2868B0",
        "chicago-white-sox": "#111111",
        "cincinnati-reds": "#13274F",
        "cleveland-guardians": "#13274F",
        "colorado-rockies": "#111111",
        "detroit-tigers": "#132448",
        "houston-astros": "#132448",
        "kansas-city-royals": "#132448",
        "los-angeles-angels": "#111111",
        "los-angeles-dodgers": "#132448",
        "miami-marlins": "#00A3E0",
        "milwaukee-brewers": "#132448",
        "minnesota-twins": "#111111",
        "new-york-mets": "#002D72",
        "new-york-yankees": "#132448",
        "philadelphia-phillies": "#13274F",
        "pittsburgh-pirates": "#111111",
        "san-diego-padres": "#2F241D",
        "san-francisco-giants": "#111111",
        "seattle-mariners": "#132448",
        "st-louis-cardinals": "#13274F",
        "tampa-bay-rays": "#132448",
        "texas-rangers": "#003278",
        "toronto-blue-jays": "#134A8E",
        "washington-nationals": "#13274F",

    };

    function actualizarCabecera() {

        const cabecera = document.querySelector(
            ".site-header"
        );

        if (!cabecera) return;

        const enlaces = cabecera.querySelectorAll(
            ".main-nav a"
        );

        const ruta = window.location.hash;

        const coincidencia = ruta.match(
            /^#\/categoria\/gorras\/([^/?#]+)/
        );

        const equipo = coincidencia
            ? coincidencia[1]
            : null;

        const color = equipo
            ? coloresEquipos[equipo]
            : null;

/* PASO 1227 - PIE DE PAGINA MISMO COLOR QUE CABECERA */

const piePagina = document.querySelector(".site-footer");

if (piePagina) {
    if (color) {
        piePagina.style.backgroundColor = color;
    } else {
        piePagina.style.removeProperty("background-color");
    }
}

        if (color) {

            /* APLICAR COLOR DEL EQUIPO */

            cabecera.style.backgroundColor = color;

            /* CONSERVAR CONTRASTE DEL MENU */

            enlaces.forEach(enlace => {
                enlace.style.color = "#FFFFFF";
            });

        } else {

            /* RECUPERAR COLOR ORIGINAL */

            cabecera.style.removeProperty(
                "background-color"
            );

            enlaces.forEach(enlace => {
                enlace.style.removeProperty("color");
            });

        }

    }

    /* ACTUALIZAR AL CAMBIAR DE EQUIPO */

    window.addEventListener(
        "hashchange",
        actualizarCabecera
    );

    /* ACTUALIZAR AL ABRIR LA PAGINA */

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            actualizarCabecera
        );

    } else {

        actualizarCabecera();

    }

})();



/* =========================================
   FOURONE WEB 2.0
   LOGOTIPO MLB EN LA CABECERA
   PASO 1140
   ========================================= */

(function configurarLogoMLBCabecera() {

    function actualizarLogo() {

        const marca = document.querySelector(
            ".site-header .brand"
        );

        if (!marca) return;

        const ruta = window.location.hash;

        const coincidencia = ruta.match(
            /^#\/categoria\/gorras\/([^/?#]+)/
        );

        const equipo = coincidencia
            ? coincidencia[1]
            : null;

        let contenedor = marca.querySelector(
            ".mlb-logo-en-cabecera"
        );

        const enlaceEquipo = equipo
            ? [...document.querySelectorAll(
                "#equipos-mlb a.equipo-mlb"
            )].find(enlace =>
                enlace.getAttribute("href") ===
                `#/categoria/gorras/${equipo}`
            )
            : null;

        const imagenOriginal = enlaceEquipo
            ?.querySelector("img");

        if (!imagenOriginal) {

            if (contenedor) {
                contenedor.remove();
            }

            return;
        }

        if (!contenedor) {

            contenedor = document.createElement("span");
            contenedor.className = "mlb-logo-en-cabecera";

            const imagen = document.createElement("img");
            contenedor.appendChild(imagen);

            marca.prepend(contenedor);
        }

        const imagen = contenedor.querySelector("img");

        

/* LOGOTIPOS ESPECIALES DE LA BARRA SUPERIOR */

if (equipo === "texas-rangers") {

    imagen.src =
        "assets/images/mlb/texas-rangers-cabecera-contorno-blanco.png";

} else if (equipo === "cleveland-guardians") {

    imagen.src =
        "assets/images/mlb/cleveland-guardians-cabecera.png";

} else {

    imagen.src = imagenOriginal.getAttribute("src");

}


  
        imagen.alt = enlaceEquipo.querySelector("span")
            ?.textContent.trim() || "Equipo MLB";
   

/* =========================================
   MLB - RECUPERAR TAMAÑOS VISUALES
   PASO 1143
   ========================================= */

/* UTILIZAR LOS AJUSTES DEL CARRUSEL ORIGINAL */

const estiloOriginal = window.getComputedStyle(
    imagenOriginal
);

imagen.style.transform = estiloOriginal.transform;




/* =========================================
   FOURONE WEB 2.0
   LOGOS BLANCOS SEGUN COLOR DE LA BARRA
   PASO 1152
   ========================================= */

const cabeceraMLB = document.querySelector(".site-header");

const colorBarra = cabeceraMLB
    ? window.getComputedStyle(cabeceraMLB).backgroundColor
    : "";

/* DETECTAR BARRA AZUL MARINO */

const barraAzulMarino =
    colorBarra === "rgb(19, 36, 72)";

/* CONSERVAR ATHLETICS EN BLANCO */


/* EQUIPOS QUE CONSERVAN SU LOGO ORIGINAL */

const equiposConLogoOriginal = [
    "milwaukee-brewers", 
    "houston-astros",
    "texas-rangers",
];

/* DETERMINAR SI EL LOGO DEBE SER BLANCO */

const logoBlanco =
    !equiposConLogoOriginal.includes(equipo) &&
    (barraAzulMarino || equipo === "athletics");



/* =========================================
   FOURONE WEB 2.0
   RECUPERAR CONTORNOS DE LOGOTIPOS MLB
   PASO 1163
   ========================================= */

/* EQUIPOS CON CONTORNO BLANCO */

const equiposConContornoBlanco = [
    "boston-red-sox",
    "new-york-mets",
    "colorado-rockies",
    "milwaukee-brewers",
    "philadelphia-phillies",
    "cleveland-guardians"
];

/* ESTILO DE CONTORNO BLANCO */

const contornoBlanco =
    "drop-shadow(1px 0 0 white) " +
    "drop-shadow(-1px 0 0 white) " +
    "drop-shadow(0 1px 0 white) " +
    "drop-shadow(0 -1px 0 white)";
    
/* APLICAR ESTILOS */


/* =========================================
   FOURONE WEB 2.0
   ATHLETICS - LOGO BLANCO CON BORDE VERDE
   PASO 1177
   ========================================= */


/* ATHLETICS - LOGOTIPO COMPLETAMENTE BLANCO */

if (equipo === "athletics") {

    imagen.style.setProperty(
        "filter",
        "brightness(0) invert(1)",
        "important"
    );


} else if (equipo === "cleveland-guardians") {

    
imagen.style.setProperty(
    "filter",
    "none",
    "important"
);


} else if (equiposConContornoBlanco.includes(equipo)) {




    imagen.style.setProperty(
        "filter",
        contornoBlanco,
        "important"
    );


/* SEATTLE MARINERS - LOGOTIPO ORIGINAL */

} else if (equipo === "seattle-mariners") {

    imagen.style.setProperty(
        "filter",
        "none",
        "important"
    );

/* MINNESOTA TWINS - LOGOTIPO ORIGINAL */

} else if (equipo === "minnesota-twins") {

    imagen.style.setProperty(
        "filter",
        "none",
        "important"
    );

} else if (logoBlanco) {


    imagen.style.setProperty(
        "filter",
        "brightness(0) invert(1)",
        "important"
    );

} else {

    imagen.style.removeProperty("filter");

}


/* CERRAR LA FUNCION actualizarLogo */

}

/* ACTUALIZAR EL LOGO AL CAMBIAR DE EQUIPO */

window.addEventListener(
    "hashchange",
    actualizarLogo
);

/* ACTUALIZAR AL ABRIR LA PAGINA */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        actualizarLogo
    );

} else {

    actualizarLogo();

}

/* CERRAR EL BLOQUE PRINCIPAL */

})();
