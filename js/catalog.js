
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

        const nombre = document.createElement("h2");
        nombre.textContent = producto.name;

        const marca = document.createElement("p");
        marca.className = "producto-marca";
        marca.textContent = producto.brand;

        const precio = document.createElement("p");
        precio.className = "producto-precio";
        precio.textContent = producto.price.toLocaleString("es-ES", {
            style: "currency",
            currency: "EUR"
        });

        tarjeta.append(nombre, marca, precio);
        contenedor.appendChild(tarjeta);
    });
}
