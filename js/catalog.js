
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

        tarjeta.append(imagenContenedor, nombre, marca, precio);
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
        { id: "balones", nombre: "Balones" }
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

const productosFiltrados = obtenerProductosPorCategoria(categoria)
    .filter((producto) =>
        !equipoSeleccionado || producto.team === equipoSeleccionado
    );

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
    mensaje.textContent = "Todavía no hay productos en esta categoría.";
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

        tarjeta.append(imagenContenedor, nombre, marca, precio);
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

