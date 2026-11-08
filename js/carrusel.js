
/* CARRUSEL DE INICIO - FOUR ONE INVERTED */

document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.querySelector(
        "#vista-inicio .carrusel-foto"
    );

    const anterior = document.querySelector(
        "#vista-inicio .carrusel-anterior"
    );

    const siguiente = document.querySelector(
        "#vista-inicio .carrusel-siguiente"
    );

    const puntos = document.querySelectorAll(
        "#vista-inicio .carrusel-punto"
    );

    if (!imagen) return;

    const fotografias = [
        {
            src: "assets/images/products/zapatillas-running.webp",
            alt: "Zapatillas deportivas"
        },
        {
            src: "assets/images/products/gorra-deportiva.webp",
            alt: "Gorra deportiva"
        },
        {
            src: "assets/images/products/mochila-deportiva.webp",
            alt: "Mochila deportiva"
        },
        {
            src: "assets/images/products/Balon-baloncesto.webp",
            alt: "Balón de baloncesto"
        }
    ];

    /* PRECARGAR FOTOGRAFÍAS */

    fotografias.forEach((foto) => {
        const imagenPrecargada = new Image();
        imagenPrecargada.src = foto.src;
    });

    let indice = 0;

    /* ACTUALIZAR FOTOGRAFÍA E INDICADORES */

    function mostrarFotografia(nuevoIndice) {
        indice = (
            nuevoIndice + fotografias.length
        ) % fotografias.length;

        imagen.src = fotografias[indice].src;
        imagen.alt = fotografias[indice].alt;

        puntos.forEach((punto, posicion) => {
            const activo = posicion === indice;

            punto.classList.toggle("activo", activo);
            punto.setAttribute("aria-pressed", String(activo));
        });
    }

    /* CAMBIO AUTOMÁTICO CADA 2,5 SEGUNDOS */

    let temporizador;

    function reiniciarTemporizador() {
        clearInterval(temporizador);

        temporizador = setInterval(() => {
            mostrarFotografia(indice + 1);
        }, 2500);
    }

    /* FLECHAS */

    if (anterior) {
        anterior.addEventListener("click", () => {
            mostrarFotografia(indice - 1);
            reiniciarTemporizador();
        });
    }

    if (siguiente) {
        siguiente.addEventListener("click", () => {
            mostrarFotografia(indice + 1);
            reiniciarTemporizador();
        });
    }

    /* INDICADORES */

    puntos.forEach((punto, posicion) => {
        punto.addEventListener("click", () => {
            mostrarFotografia(posicion);
            reiniciarTemporizador();
        });
    });

    /* INICIAR CARRUSEL */

    mostrarFotografia(0);
    reiniciarTemporizador();
});
