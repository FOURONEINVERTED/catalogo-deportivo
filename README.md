# Catálogo Deportivo


## Estado actual del proyecto

### Visibilidad en buscadores

Durante la preparación de FOUR ONE INVERTED, la web
incluye una instrucción temporal `noindex` en `index.html`.

Esta instrucción solicita a los buscadores que no
incluyan la página en sus resultados.

**Pendiente antes del lanzamiento oficial:**

- Retirar la etiqueta `noindex` de `index.html`.
- Publicar el cambio en GitHub Pages.
- Comprobar que la etiqueta ya no aparece en el
  código fuente de la web pública.
- Revisar la indexación en Google.

La web sigue siendo pública y accesible mediante
su dirección, incluso mientras utiliza `noindex`.

FOUR ONE INVERTED es una marca en preparación.

Esta web funciona actualmente como catálogo de demostración.
Los 10 productos publicados, sus fotografías, marcas, precios
y características son ejemplos y no representan todavía
el catálogo comercial definitivo.

El catálogo oficial se incorporará cuando estén disponibles
las fotografías y los datos reales de los productos.

La web permite consultar productos y contactar por WhatsApp
o correo electrónico. No dispone de carrito, pagos online
ni cuentas de usuario.

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
