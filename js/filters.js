
/* BUSCADOR DEL CATÁLOGO DEPORTIVO */

function iniciarBuscador() {
    const buscador = document.getElementById("buscador-productos");
    const contenedor = document.getElementById("lista-productos");

    if (!buscador || !contenedor) {
        console.error("No se encontró el buscador de productos.");
        return;
    }

    buscador.addEventListener("input", () => {
        const texto = buscador.value.trim().toLocaleLowerCase("es");

        const tarjetas = contenedor.querySelectorAll(".producto-card");

        let encontrados = 0;

        tarjetas.forEach((tarjeta) => {
           

const nombre = (tarjeta.querySelector("h2, h3")?.textContent || "")
    .toLocaleLowerCase("es")
    .trim();

const contenido = tarjeta.textContent
    .toLocaleLowerCase("es")
    .replace(/\s+/g, " ")
    .trim();

const productoCoincide = texto.length === 1
    ? nombre.startsWith(texto)
    : (" " + contenido).includes(" " + texto);

tarjeta.hidden = !productoCoincide;

if (productoCoincide) {
    encontrados++;
}

});


        // IDENTIFICAR CUANDO HAY DOS RESULTADOS
        contenedor.classList.toggle("dos-resultados", encontrados === 2);
        contenedor.classList.toggle("un-resultado", encontrados === 1);

        let mensaje = document.getElementById("mensaje-sin-resultados");

        if (!mensaje) {
            mensaje = document.createElement("p");
            mensaje.id = "mensaje-sin-resultados";
            mensaje.textContent = "No se encontraron productos.";
            contenedor.insertAdjacentElement("afterend", mensaje);
        }

        mensaje.hidden = encontrados > 0;
    });
}
