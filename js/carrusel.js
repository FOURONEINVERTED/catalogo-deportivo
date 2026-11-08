
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

    /* MOSTRAR UNA FOTOGRAFÍA */

    function mostrarFotografia(nuevoIndice) {
        indice = (
            nuevoIndice + fotografias.length
        ) % fotografias.length;

        imagen.src = fotografias[indice].src;
        imagen.alt = fotografias[indice].alt;
    }

    /* CAMBIO AUTOMÁTICO CADA 2,5 SEGUNDOS */

    let temporizador = setInterval(() => {
        mostrarFotografia(indice + 1);
    }, 2500);

    /* REINICIAR EL TIEMPO TRAS UN CLIC */

    function reiniciarTemporizador() {
        clearInterval(temporizador);

        temporizador = setInterval(() => {
            mostrarFotografia(indice + 1);
        }, 2500);
    }

    /* FLECHA ANTERIOR */

    if (anterior) {
        anterior.addEventListener("click", () => {
            mostrarFotografia(indice - 1);
            reiniciarTemporizador();
        });
    }

    /* FLECHA SIGUIENTE */

    if (siguiente) {
        siguiente.addEventListener("click", () => {
            mostrarFotografia(indice + 1);
            reiniciarTemporizador();
        });
    }
});
