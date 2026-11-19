
/* CATÁLOGO DE PRODUCTOS */

function mostrarProductos() {
    const contenedor = document.getElementById("lista-productos");

    if (!contenedor) {
        console.error("No se encontró el contenedor de productos.");
        return;
    }

    contenedor.innerHTML = "";

    productos.forEach((producto) => {
        const tarjeta = document.createElement("a");
        tarjeta.className = "producto-card";
        tarjeta.href = "#/producto/" + producto.id;
        // CONTENEDOR DE LA IMAGEN
        const imagenContenedor = document.createElement("div");
        imagenContenedor.className = "producto-imagen";

        if (producto.image) {
            const imagen = document.createElement("img");
            imagen.src = producto.image;
            imagen.alt = producto.name;
            imagen.loading = "lazy";

            imagenContenedor.appendChild(imagen);
        } else {
            imagenContenedor.textContent = "Imagen próximamente";
            imagenContenedor.classList.add("sin-imagen");
        }

        // NOMBRE DEL PRODUCTO
        const nombre = document.createElement("h2");
        nombre.textContent = producto.name;

        // MARCA
        const marca = document.createElement("p");
        marca.className = "producto-marca";
        marca.textContent = producto.brand;

        // PRECIO
        const precio = document.createElement("p");
        precio.className = "producto-precio";
        precio.textContent = producto.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR"
        });

        tarjeta.append(imagenContenedor, nombre, marca);
        contenedor.appendChild(tarjeta);
    });
}

/* FILTRAR PRODUCTOS POR CATEGORÍA */

function obtenerProductosPorCategoria(categoria) {
    return productos.filter((producto) => {
        return producto.category === categoria;
    });
}

/* MOSTRAR LAS CATEGORÍAS DEL CATÁLOGO */


/* MOSTRAR LAS CATEGORÍAS DEL CATÁLOGO */

function mostrarCategorias() {
    const contenedor = document.getElementById("lista-categorias");

    if (!contenedor) {
        console.error("No se encontró el contenedor de categorías.");
        return;
    }

    const categorias = [
        { id: "zapatillas", nombre: "Zapatillas" },
        { id: "gorras", nombre: "Gorras" },
        { id: "ropa", nombre: "Ropa deportiva" },
        { id: "accesorios", nombre: "Accesorios" },
    ];

    contenedor.innerHTML = "";

    categorias.forEach((categoria) => {
        const cantidad = obtenerProductosPorCategoria(categoria.id).length;

        const tarjeta = document.createElement("a");
        tarjeta.className = "categoria-card";
        tarjeta.href = "#/categoria/" + categoria.id;

        const nombre = document.createElement("h2");
        nombre.textContent = categoria.nombre;

        const contador = document.createElement("p");
        contador.textContent =
            cantidad + (cantidad === 1 ? " producto" : " productos");

        tarjeta.append(nombre, contador);
        contenedor.appendChild(tarjeta);
    });
}


/* MOSTRAR PRODUCTOS DE UNA CATEGORÍA */

function mostrarProductosCategoria(categoria) {
    const contenedor = document.getElementById("productos-categoria");

    if (!contenedor) {
        console.error("No se encontró el contenedor de la categoría.");
        return;
    }

/* MOSTRAR EQUIPOS MLB SOLO EN GORRAS */

const seccionMLB = document.getElementById("equipos-mlb");

if (seccionMLB) {
    seccionMLB.hidden = categoria !== "gorras";
}

    
/* FILTRAR GORRAS POR EQUIPO MLB */

const equipoSeleccionado =
    categoria === "gorras"
        ? window.location.hash.split("/")[3]
        : null;


/* =========================================
   MLB - CABECERA DINAMICA POR EQUIPO
   PASO 1108
   ========================================= */

const paginaEquipoMLB = document.getElementById(
    "mlb-pagina-equipo"
);

if (paginaEquipoMLB) {

    const enlacesMLB = seccionMLB
        ? [...seccionMLB.querySelectorAll("a.equipo-mlb")]
        : [];

    const enlaceEquipo = enlacesMLB.find((enlace) => {
        return enlace.getAttribute("href") ===
            `#/categoria/gorras/${equipoSeleccionado}`;
    });

    const nombreEquipo = enlaceEquipo
        ?.querySelector("span")
        ?.textContent.trim();

    if (equipoSeleccionado && nombreEquipo) {

        /* MOSTRAR CABECERA DEL EQUIPO */

        paginaEquipoMLB.hidden = false;

        /* CAMBIAR TITULO */

        const tituloEquipo = document.getElementById(
            "mlb-titulo-equipo"
        );

        if (tituloEquipo) {
            tituloEquipo.textContent =
                `Gorras ${nombreEquipo}`;
        }

        /* ACTUALIZAR RUTA DE NAVEGACION */

        const nombreRuta = document.getElementById(
            "mlb-nombre-ruta"
        );

        if (nombreRuta) {
            nombreRuta.textContent = nombreEquipo;
        }

    } else {

        /* OCULTAR CABECERA AL VOLVER A GORRAS */

        paginaEquipoMLB.hidden = true;

    }
}


/* =========================================
   MLB - CENTRAR EL EQUIPO SELECCIONADO
   PASO 1085
   ========================================= */

if (seccionMLB) {

    const logosMLB = seccionMLB.querySelectorAll("a.equipo-mlb");

    const listaMLB = seccionMLB.querySelector(".equipos-mlb-lista");

    logosMLB.forEach((logo) => {

        const equipoDelLogo = logo.getAttribute("href").split("/").pop();

        if (equipoSeleccionado && equipoDelLogo !== equipoSeleccionado) {

            logo.style.display = "none";

        } else {

            logo.style.removeProperty("display");

        }

    });

    /* CENTRAR EL LOGO SELECCIONADO */

    if (listaMLB) {

        if (equipoSeleccionado) {

            listaMLB.style.justifyContent = "center";
            listaMLB.scrollLeft = 0;

        } else {

            listaMLB.style.removeProperty("justify-content");

        }

    }

}


let productosFiltrados = obtenerProductosPorCategoria(categoria)
    .filter((producto) =>
        !equipoSeleccionado || producto.team === equipoSeleccionado
    );


/* =========================================
   FOURONE WEB 2.0
   FILTROS FUNCIONALES MLB
   PASO 1124
   ========================================= */

if (categoria === "gorras" && equipoSeleccionado) {

    const panel = document.querySelector(
        ".mlb-catalogo-filtros"
    );

    const talla = document.getElementById("mlb-filtro-talla");
    const marca = document.getElementById("mlb-filtro-marca");
    const color = document.getElementById("mlb-filtro-color");
    const precio = document.getElementById("mlb-filtro-precio");
    const precioValor = document.getElementById("mlb-precio-valor");
    const limpiar = document.getElementById("mlb-limpiar-filtros");

    if (panel && talla && marca && color &&
        precio && precioValor && limpiar) {

        const maximo = Math.max(
            1,
            ...productosFiltrados.map(
                p => Math.ceil(Number(p.price) || 0)
            )
        );

        /* ACTUALIZAR OPCIONES DISPONIBLES */

        function rellenarOpciones(select, valores) {

            const anterior = select.value;

            select.length = 1;

            [...new Set(valores.filter(Boolean))]
                .sort((a, b) => a.localeCompare(b, "es"))
                .forEach(valor => {

                    const opcion = document.createElement("option");

                    opcion.value = valor;
                    opcion.textContent = valor;

                    select.appendChild(opcion);
                });

            select.value = anterior;
        }

        rellenarOpciones(
            talla,
            productosFiltrados.flatMap(p => p.sizes || [])
        );

        rellenarOpciones(
            marca,
            productosFiltrados.map(p => p.brand)
        );

        rellenarOpciones(
            color,
            productosFiltrados.flatMap(p => p.colors || [])
        );

        /* CONFIGURAR PRECIO */

        precio.max = maximo;

        /* REINICIAR FILTROS AL CAMBIAR DE EQUIPO */

        if (panel.dataset.equipoActual !== equipoSeleccionado) {

            talla.value = "";
            marca.value = "";
            color.value = "";
            precio.value = maximo;

            panel.dataset.equipoActual = equipoSeleccionado;

        } else {

            precio.value = Math.min(
                Number(precio.value),
                maximo
            );
        }

        precioValor.textContent = 
            Number(precio.value).toLocaleString("es-ES") + " €";

        /* APLICAR FILTROS SELECCIONADOS */

        productosFiltrados = productosFiltrados.filter(p => {

            const coincideTalla =
                !talla.value ||
                (p.sizes || []).includes(talla.value);

            const coincideMarca =
                !marca.value ||
                p.brand === marca.value;

            const coincideColor =
                !color.value ||
                (p.colors || []).includes(color.value);

            const coincidePrecio =
                Number(p.price) <= Number(precio.value);

            return coincideTalla &&
                   coincideMarca &&
                   coincideColor &&
                   coincidePrecio;
        });

        /* ACTUALIZAR PRODUCTOS */

        const actualizar = () => {
            mostrarProductosCategoria(categoria);
        };

        talla.onchange = actualizar;
        marca.onchange = actualizar;
        color.onchange = actualizar;
        precio.oninput = actualizar;

        /* LIMPIAR FILTROS */

        limpiar.onclick = () => {

            talla.value = "";
            marca.value = "";
            color.value = "";
            precio.value = maximo;

            actualizar();
        };
    }
}


/* OCULTAR EL TÍTULO DUPLICADO AL VER UN EQUIPO MLB */

const tituloCategoriaMLB = document.getElementById("titulo-categoria");

if (tituloCategoriaMLB) {
    tituloCategoriaMLB.style.display = equipoSeleccionado ? "none" : "";
}

/* ENLACE PARA VOLVER DESDE UN EQUIPO MLB */

const enlaceVolverCategoria = document.querySelector(
    "#vista-categoria-detalle .enlace-volver-categorias"
);

if (enlaceVolverCategoria) {
    enlaceVolverCategoria.href = equipoSeleccionado
        ? "#/categoria/gorras"
        : "#/categorias";

    enlaceVolverCategoria.textContent = equipoSeleccionado
        ? "Volver a la categoría"
        : "Volver a categorías";
}


    contenedor.innerHTML = "";
    
if (productosFiltrados.length === 0) {
    const mensaje = document.createElement("p");
    
/* MLB - MENSAJE CUANDO NO HAY RESULTADOS
   PASO 1127 */

const hayGorrasDelEquipo =
    categoria === "gorras" &&
    equipoSeleccionado &&
    obtenerProductosPorCategoria(categoria).some(
        producto => producto.team === equipoSeleccionado
    );

if (hayGorrasDelEquipo) {

    mensaje.textContent =
        "No encontramos gorras con estos filtros. " +
        "Prueba a aumentar el precio máximo o pulsa " +
        "«Limpiar filtros» para ver las gorras disponibles.";

} else if (categoria === "gorras" && equipoSeleccionado) {

    mensaje.textContent =
        "Próximamente encontrarás aquí las gorras de este equipo.";

} else {

    mensaje.textContent =
        "Todavía no hay productos en esta categoría.";

}


/* MLB - ESTILO DEL MENSAJE SIN RESULTADOS
   PASO 1129 */

if (categoria === "gorras" && equipoSeleccionado) {
    mensaje.classList.add("mlb-mensaje-sin-resultados");
    mensaje.setAttribute("role", "status");
}

    contenedor.appendChild(mensaje);
    return;
}
    productosFiltrados.forEach((producto) => {
        
    const tarjeta = document.createElement("a");
    tarjeta.className = "producto-card";
    tarjeta.href = "#/producto/" + producto.id;

        // IMAGEN DEL PRODUCTO
        const imagenContenedor = document.createElement("div");
        imagenContenedor.className = "producto-imagen";

        if (producto.image) {
            const imagen = document.createElement("img");
            imagen.src = producto.image;
            imagen.alt = producto.name;
            imagen.loading = "lazy";

            imagenContenedor.appendChild(imagen);
        } else {
            imagenContenedor.textContent = "Imagen próximamente";
            imagenContenedor.classList.add("sin-imagen");
        }

        // NOMBRE
        const nombre = document.createElement("h2");
        nombre.textContent = producto.name;

        // MARCA
        const marca = document.createElement("p");
        marca.className = "producto-marca";
        marca.textContent = producto.brand;

        // PRECIO
        const precio = document.createElement("p");
        precio.className = "producto-precio";
        precio.textContent = producto.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR"
        });

        tarjeta.append(imagenContenedor, nombre, marca);
        contenedor.appendChild(tarjeta);
    });
}
/* MOSTRAR DETALLE DE UN PRODUCTO */

function mostrarDetalleProducto(id) {
    const contenedor = document.getElementById("detalle-producto");
    const titulo = document.getElementById("detalle-nombre");

    if (!contenedor || !titulo) {
        console.error("No se encontró la vista de detalle.");
        return;
    }

    const producto = productos.find((item) => {
        return item.id === Number(id);
    });

    contenedor.innerHTML = "";

    if (!producto) {
        titulo.textContent = "Producto no encontrado";

        const mensaje = document.createElement("p");
        mensaje.textContent = "El producto solicitado no existe.";

        contenedor.appendChild(mensaje);
        return;
    }

    titulo.textContent = producto.name;

    const imagen = document.createElement("img");
    imagen.src = producto.image;
    imagen.alt = producto.name;
    imagen.className = "detalle-imagen";

/* AMPLIAR FOTOGRAFÍA DEL PRODUCTO */

imagen.tabIndex = 0;
imagen.setAttribute("role", "button");
imagen.setAttribute(
    "aria-label",
    "Ampliar fotografía de " + producto.name
);

function ampliarFotografia() {
    const visor = document.createElement("dialog");
    visor.className = "visor-producto";
    const fotoGrande = document.createElement("img");
    fotoGrande.src = producto.image;
    fotoGrande.alt = producto.name;
    fotoGrande.style.display = "block";
    fotoGrande.style.maxWidth = "85vw";
    fotoGrande.style.maxHeight = "80vh";

    const cerrar = document.createElement("button");
    cerrar.type = "button";
    cerrar.textContent = "Cerrar";

    cerrar.addEventListener("click", () => {
        visor.close();
    });

    visor.append(cerrar, fotoGrande);
    document.body.append(visor);

    visor.addEventListener("close", () => {
        visor.remove();
    }, { once: true });

    visor.showModal();
}

imagen.addEventListener("click", ampliarFotografia);

imagen.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
        evento.preventDefault();
        ampliarFotografia();
    }
});

    const informacion = document.createElement("div");
    informacion.className = "detalle-informacion";

    const marca = document.createElement("p");
    marca.className = "detalle-marca";
    marca.textContent = "Marca: " + producto.brand;

    const precio = document.createElement("p");
    precio.className = "detalle-precio";
    precio.textContent = producto.price.toLocaleString("es-ES", {
        style: "currency",
        currency: "EUR"
    });

    const descripcion = document.createElement("p");
    descripcion.className = "detalle-descripcion";
    descripcion.textContent = producto.description;

    const tallas = document.createElement("p");
    tallas.className = "detalle-tallas";
    
const etiquetaTallas = document.createElement("strong");
etiquetaTallas.textContent = "Tallas: ";
tallas.replaceChildren(
    etiquetaTallas,
    producto.sizes.join(", ")
);


    const colores = document.createElement("p");
    colores.className = "detalle-colores";
    
const etiquetaColores = document.createElement("strong");
etiquetaColores.textContent = "Colores: ";
colores.replaceChildren(
    etiquetaColores,
    producto.colors.join(", ")
);


    
/* DISPONIBILIDAD DEL PRODUCTO */

const estadosDisponibilidad = {
    disponible: "Disponible",
    pocas: "Quedan pocas unidades",
    agotado: "No disponible"
};

informacion.append(marca, precio);

const estado = estadosDisponibilidad[producto.availability];

if (estado) {
    const disponibilidad = document.createElement("p");

    disponibilidad.className =
        "detalle-disponibilidad estado-" + producto.availability;

    disponibilidad.textContent = estado;

    informacion.append(disponibilidad);
}

informacion.append(descripcion, tallas, colores);


    contenedor.append(imagen, informacion);
}



/* =========================================
   MLB - SELECTOR DE EQUIPOS PARA MOVILES
   PASO 1088
   ========================================= */

(function iniciarSelectorMLBMovil() {

    function prepararSelector() {

        const seccion = document.getElementById("equipos-mlb");

        if (!seccion) return;

        const equipos = [
            ...seccion.querySelectorAll("a.equipo-mlb")
        ];

        if (!equipos.length) return;

        if (document.getElementById("mlb-abrir-selector")) return;

        /* BOTON PARA ABRIR LOS 30 EQUIPOS */

        const boton = document.createElement("button");

        boton.type = "button";
        boton.id = "mlb-abrir-selector";
        boton.textContent = "Equipos";

        seccion.appendChild(boton);

        /* CREAR VENTANA */

        const ventana = document.createElement("dialog");

        ventana.id = "mlb-selector-movil";

        ventana.setAttribute(
            "aria-labelledby",
            "mlb-selector-titulo"
        );

        ventana.innerHTML = `
            <div class="mlb-selector-cabecera">
                <h2 id="mlb-selector-titulo">
                    Selecciona tu equipo
                </h2>

                <button
                    type="button"
                    class="mlb-selector-cerrar"
                    aria-label="Cerrar selector"
                >×</button>
            </div>

            <div class="mlb-selector-cuadricula"></div>
        `;

        const cuadricula = ventana.querySelector(
            ".mlb-selector-cuadricula"
        );

        /* UTILIZAR LOS 30 LOGOTIPOS EXISTENTES */

        
/* UTILIZAR LOS LOGOTIPOS CON SUS AJUSTES ORIGINALES */

equipos.forEach((equipo) => {

    const enlace = equipo.cloneNode(true);

    enlace.classList.add("mlb-selector-equipo");

    const contenedorImagen = enlace.querySelector(
        ".equipo-mlb-logo"
    );

    if (contenedorImagen) {
        contenedorImagen.classList.add(
            "mlb-selector-imagen"
        );
    }

    const imagen = enlace.querySelector("img");

    if (imagen) {
        imagen.removeAttribute("width");
        imagen.removeAttribute("height");
        imagen.style.removeProperty("transform");
    }

    enlace.addEventListener("click", () => {
        ventana.close();
    });

    cuadricula.appendChild(enlace);

});


        /* ABRIR VENTANA */

        boton.addEventListener("click", () => {

            if (window.matchMedia("(max-width: 480px)").matches) {
                ventana.showModal();
            }

        });

        /* CERRAR VENTANA */

        ventana.querySelector(".mlb-selector-cerrar")
            .addEventListener("click", () => {
                ventana.close();
            });

        ventana.addEventListener("click", (evento) => {

            if (evento.target === ventana) {
                ventana.close();
            }

        });

        seccion.appendChild(ventana);
    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            prepararSelector
        );

    } else {

        prepararSelector();

    }

})();



/* =========================================
   MLB - ABRIR Y CERRAR FILTROS MOVILES
   PASO 1126
   ========================================= */

(function iniciarFiltrosMovilesMLB() {

    function prepararBoton() {

        const boton = document.getElementById(
            "mlb-abrir-filtros"
        );

        const panel = document.getElementById(
            "mlb-filtros-panel"
        );

        if (!boton || !panel) return;

        boton.addEventListener("click", () => {

            const abierto = panel.classList.toggle(
                "mlb-filtros-abiertos"
            );

            boton.setAttribute(
                "aria-expanded",
                String(abierto)
            );

            boton.textContent = abierto
                ? "Ocultar filtros"
                : "Filtrar gorras";
        });

        /* CERRAR FILTROS AL CAMBIAR DE PAGINA */

        window.addEventListener("hashchange", () => {

            panel.classList.remove("mlb-filtros-abiertos");

            boton.setAttribute("aria-expanded", "false");

            boton.textContent = "Filtrar gorras";
        });
    }

    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            prepararBoton
        );

    } else {

        prepararBoton();
    }

})();
