# Catálogo Deportivo

Catálogo web de demostración para explorar artículos deportivos, consultar sus fotografías, precios y características.

## Funcionalidades

- Página de inicio.

- Listado de diez productos deportivos.
- Navegación por categorías.
- Buscador de productos por nombre o marca.
- Fichas individuales con información de cada producto.
- Diseño adaptable a ordenadores y teléfonos móviles.

## Tecnologías utilizadas

- HTML
- CSS
- JavaScript

## Organización del proyecto

- **index.html:** estructura principal del sitio web.
- **css/:** archivos de estilos.
- **js/:** datos de productos, navegación y funcionalidades.
- **assets/images/products/:** fotografías de los productos optimizadas en formato WebP.

## Cómo utilizar el catálogo

Para probarlo localmente, abre el archivo `index.html` en un navegador.

El proyecto también está publicado mediante GitHub Pages.

## Optimización


Las diez fotografías de los productos se han convertido a formato WebP para reducir su peso y mejorar la carga del catálogo.

## Alcance del proyecto

Este proyecto es un catálogo demostrativo. No incluye carrito de compra, pagos, registro de usuarios ni base de datos.


## Cómo actualizar los productos

Los productos del catálogo están definidos en el archivo `js/products.js`.

Para modificar un producto:

1. Abrir `js/products.js`.
2. Localizar el producto que queremos actualizar.
3. Modificar su nombre, marca, precio, descripción o características.
4. Guardar los cambios.
5. Comprobar el resultado en el navegador.

Para cambiar una fotografía:

1. Preparar la nueva imagen en formato WebP.
2. Guardarla en `assets/images/products/`.
3. Actualizar la propiedad `image` del producto correspondiente en `js/products.js`.
4. Comprobar que aparece correctamente en la tarjeta y en la ficha del producto.

Para añadir nuevos productos, utilizar un identificador `id` que no esté asignado a otro producto y una categoría existente.

Después de verificar los cambios, guardarlos y publicarlos mediante GitHub Desktop.
