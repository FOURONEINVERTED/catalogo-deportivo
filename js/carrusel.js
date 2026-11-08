
/* CARRUSEL DE INICIO - FOUR ONE INVERTED */

document.addEventListener("DOMContentLoaded", () => {
    const imagen = document.querySelector(
        "#vista-inicio .carrusel-foto"
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

    let indice = 0;

    /* CAMBIO AUTOMÁTICO CADA 2,5 SEGUNDOS */

    setInterval(() => {
        indice = (indice + 1) % fotografias.length;

        imagen.src = fotografias[indice].src;
        imagen.alt = fotografias[indice].alt;
        imagen.style.opacity = "1";
    }, 2500);
});
