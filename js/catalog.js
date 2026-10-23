
/* CATÁLOGO DE PRODUCTOS */

function mostrarProductos() {
    const contenedor = document.getElementById("lista-productos");

    if (!contenedor) {
        console.error("No se encontró el contenedor de productos.");
        return;
    }

    contenedor.innerHTML = "";

    productos.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto-card";

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
        { id: "accesorios", nombre: "Accesorios" }
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

    const productosFiltrados = obtenerProductosPorCategoria(categoria);

    contenedor.innerHTML = "";

    productosFiltrados.forEach((producto) => {
        const tarjeta = document.createElement("article");
        tarjeta.className = "producto-card";

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
