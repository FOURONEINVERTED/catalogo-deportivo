
/* CARRUSEL DE INICIO - FOUR ONE INVERTED */

document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(
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

    const botonPausa = document.querySelector(
        "#vista-inicio .carrusel-pausa"
    );

    if (imagenes.length !== 2) return;

    const fotografias = [
        {
            src: "assets/images/products/gorra-la-carrusel.webp",
            alt: "Gorra LA"
        },
        {
            src: "assets/images/products/gorra-ny-negra.webp",
            alt: "Gorra NY negra"
        }
    ];

    /* PRECARGAR FOTOGRAFÍAS */

    fotografias.forEach((foto) => {
        const precarga = new Image();
        precarga.src = foto.src;
    });

    let indice = 0;
    let capaActiva = 0;
    let temporizador;
    let pausado = false;

    /* PREPARAR LAS DOS CAPAS */

    imagenes[0].src = fotografias[0].src;
    imagenes[0].alt = fotografias[0].alt;
    imagenes[0].classList.remove("carrusel-foto-oculta");
    imagenes[0].removeAttribute("aria-hidden");

    imagenes[1].src = fotografias[1].src;
    imagenes[1].alt = fotografias[1].alt;
    imagenes[1].classList.add("carrusel-foto-oculta");
    imagenes[1].setAttribute("aria-hidden", "true");

    /* ACTUALIZAR INDICADORES */

    function actualizarIndicadores() {
        puntos.forEach((punto, posicion) => {
            const activo = posicion === indice;

            punto.classList.toggle("activo", activo);
            punto.setAttribute("aria-pressed", String(activo));
        });
    }

    /* CAMBIAR FOTOGRAFÍA CON FUNDIDO CRUZADO */

    function mostrarFotografia(nuevoIndice) {
        const siguienteIndice = (
            nuevoIndice + fotografias.length
        ) % fotografias.length;

        if (siguienteIndice === indice) return;

        const saliente = imagenes[capaActiva];
        const nuevaCapa = 1 - capaActiva;
        const entrante = imagenes[nuevaCapa];

        entrante.src = fotografias[siguienteIndice].src;
        entrante.alt = fotografias[siguienteIndice].alt;

        entrante.removeAttribute("aria-hidden");
        saliente.setAttribute("aria-hidden", "true");

        entrante.classList.remove("carrusel-foto-oculta");
        saliente.classList.add("carrusel-foto-oculta");

        indice = siguienteIndice;
        capaActiva = nuevaCapa;

        actualizarIndicadores();
    }

    /* CAMBIO AUTOMÁTICO CADA 2,5 SEGUNDOS */

    function reiniciarTemporizador() {
        clearInterval(temporizador);

        if (pausado) return;

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

    /* PAUSAR Y REANUDAR */

    if (botonPausa) {
        botonPausa.addEventListener("click", () => {
            pausado = !pausado;

            botonPausa.textContent = pausado
                ? "Reanudar"
                : "Pausar";

            botonPausa.setAttribute(
                "aria-label",
                pausado ? "Reanudar carrusel" : "Pausar carrusel"
            );

            botonPausa.setAttribute(
                "aria-pressed",
                String(pausado)
            );

            reiniciarTemporizador();
        });
    }

    /* INICIAR CARRUSEL */

    actualizarIndicadores();
    reiniciarTemporizador();
});
