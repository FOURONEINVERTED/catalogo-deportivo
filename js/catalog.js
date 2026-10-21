
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
