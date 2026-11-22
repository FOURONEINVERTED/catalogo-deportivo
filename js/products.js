
/* PRODUCTOS DEL CATÁLOGO DEPORTIVO */

/*
    Datos de ejemplo.
    Más adelante los sustituiremos por productos reales.
*/

const productos = [
    
{
    id: 11,
    name: "Atlanta Braves — 150.º Aniversario",
    category: "gorras",
    team: "atlanta-braves",
    brand: "New Era",
    price: 24.99,
    availability: "pocas",
    image: "assets/images/products/gorra-atlanta-braves-150-aniversario.webp",
    description: "Gorra Atlanta Braves con parche conmemorativo del 150.º aniversario (1871–2021). Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Gris", "Azul marino"]
},



{
    id: 12,
    name: "Philadelphia Phillies — All-Star Game 2006",
    category: "gorras",
    team: "philadelphia-phillies",
    brand: "New Era",
    price: 24.99,
    availability: "pocas",
    image: "assets/images/products/gorra-p-all-star-beige-marron.webp",
    description: "Gorra Philadelphia Phillies edición All-Star Game 2006, en combinación beige/camel y marrón, con parche lateral conmemorativo. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige/Camel", "Marrón"]
},


{
    id: 13,
    name: "St. Louis Cardinals — Busch Stadium 2005",
    category: "gorras",
    team: "st-louis-cardinals",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/gorra-st-louis-cardinals-busch-stadium-2005.webp",
    description: "Gorra roja St. Louis Cardinals con parche lateral conmemorativo de la última temporada del Busch Stadium en 2005. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Rojo"]
},

{
    id: 14,
    name: "Houston Astros — World Series 2017",
    category: "gorras",
    team: "houston-astros",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/gorra-houston-astros-world-series-2017.webp",
    description: "Gorra Houston Astros edición World Series 2017, en combinación crema, verde y rosa, con parche lateral conmemorativo. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Crema", "Verde", "Rosa"]
},

{
    id: 15,
    name: "Los Angeles Dodgers — Light On!",
    category: "gorras",
    team: "los-angeles-dodgers",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra azul real con bordado LA(2).webp",
    description: "Gorra Los Angeles Dodgers en azul rey, con logotipo LA bordado en blanco y detalle lateral LIGHT ON!. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul rey", "Blanco"]
},

{
    id: 16,
    name: "Boston Red Sox — World Series",
    category: "gorras",
    team: "boston-red-sox",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra beige “B” con parche World Series.webp",
    description: "Gorra Boston Red Sox en color beige/camel, con logotipo B bordado en blanco y dorado y parche lateral conmemorativo World Series. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige/Camel", "Blanco", "Dorado"]
},

{
    id: 17,
    name: "Boston Red Sox — All-Star Game Trucker",
    category: "gorras",
    team: "boston-red-sox",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra beige y marrón estilo Red Sox.webp",
    description: "Gorra Boston Red Sox estilo trucker en combinación beige y marrón, con paneles de malla, logotipo B bordado en dorado y parche lateral All-Star Game. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige", "Marrón", "Dorado"]
},

{
    id: 18,
    name: "Los Angeles Dodgers — 50.º Aniversario",
    category: "gorras",
    team: "los-angeles-dodgers",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra LA 50 Aniversario sobre fondo beige.webp",
    description: "Gorra Los Angeles Dodgers en color negro, con logotipo LA bordado en blanco y dorado y parche lateral conmemorativo del 50.º aniversario (1958–2008). Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Blanco", "Dorado"]
},

{
    id: 19,
    name: "Chicago White Sox — Navy Monocromática",
    category: "gorras",
    team: "chicago-white-sox",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra navy Sox sobre fondo beige.webp",
    description: "Gorra Chicago White Sox en azul marino, con logotipo SOX bordado en relieve del mismo tono. Diseño monocromático de estilo deportivo y urbano. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul marino"]
},

{
    id: 20,
    name: "Detroit Tigers — All-Star Game",
    category: "gorras",
    team: "detroit-tigers",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra negra Detroit Tigers en estudio cálido.webp",
    description: "Gorra Detroit Tigers en color negro, con el logotipo clásico D bordado en blanco y parche lateral conmemorativo All-Star Game — Tiger Stadium. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Blanco"]
},

{
    id: 21,
    name: "San Francisco Giants — All-Star Week 2017",
    category: "gorras",
    team: "san-francisco-giants",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra SF All-Star 2017 en beige.webp",
    description: "Gorra San Francisco Giants en color beige, con logotipo SF bordado en blanco y contorno rojo. Incluye parche lateral All-Star Week 2017. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige", "Blanco", "Rojo"]
},

{
    id: 22,
    name: "New York Yankees — World Series 2024",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Yankees World Series 2024 en beige.webp",
    description: "Gorra New York Yankees edición World Series 2024, con corona beige, visera gris claro, logotipo NY bordado en rojo y parche lateral conmemorativo. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige", "Gris claro", "Rojo"]
},

{
    id: 23,
    name: "Toronto Blue Jays — Black & Gold",
    category: "gorras",
    team: "toronto-blue-jays",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Toronto Blue Jays sobre fondo beige.webp",
    description: "Gorra Toronto Blue Jays en color negro, con logotipo frontal bordado en negro, hoja de arce dorada y parche lateral en tonos dorados. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Dorado"]
},

{
    id: 24,
    name: "Athletics — Black & Gold",
    category: "gorras",
    team: "athletics",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra Oakland A’s sobre arena beige.webp",
    description: "Gorra Athletics en color negro, con logotipo frontal bordado en negro, hoja de arce dorada y detalle lateral en tonos dorados. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Dorado"]
},

{
    id: 25,
    name: "Houston Astros — Flames XLIV",
    category: "gorras",
    team: "houston-astros",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra negra New Era XLIV con llamas.webp",
    description: "Gorra Houston Astros en color negro, con letra H bordada en blanco y diseño de llamas rojas y azules. Incluye bordado lateral XLIV. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Blanco", "Rojo", "Azul"]
},

{
    id: 26,
    name: "Detroit Tigers — Purple All-Star Game",
    category: "gorras",
    team: "detroit-tigers",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra morada con emblema All-Star.webp",
    description: "Gorra Detroit Tigers en combinación morada y marrón, con logotipo D bordado en relieve del mismo tono, botón superior rosa y parche lateral conmemorativo All-Star Game. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Morado", "Marrón", "Rosa"]
},

{
    id: 27,
    name: "Arizona Diamondbacks — Purple & Teal",
    category: "gorras",
    team: "arizona-diamondbacks",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra morada Arizona Diamondbacks en estudio.webp",
    description: "Gorra Arizona Diamondbacks en color morado, con logotipo A bordado en turquesa, negro y detalles plateados. Diseño deportivo de estilo urbano. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Morado", "Turquesa", "Negro"]
},

{
    id: 28,
    name: "New York Mets — Flame Edition",
    category: "gorras",
    team: "new-york-mets",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Mets azul marino con llamas naranjas.webp",
    description: "Gorra New York Mets con corona azul marino y visera negra, logotipo NY bordado en blanco con detalles de llamas naranjas y bordado lateral Mets en azul. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul marino", "Negro", "Blanco", "Naranja"]
},

{
    id: 29,
    name: "Los Angeles Dodgers — World Series 2024",
    category: "gorras",
    team: "los-angeles-dodgers",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra LA World Series 2024 en beige.webp",
    description: "Gorra Los Angeles Dodgers edición World Series 2024, con corona beige, visera gris claro, logotipo LA bordado en rojo con contorno gris y parche lateral conmemorativo. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige", "Gris claro", "Rojo"]
},

{
    id: 30,
    name: "Los Angeles Dodgers — World Series 2020",
    category: "gorras",
    team: "los-angeles-dodgers",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra LA World Series 2020 en estudio.webp",
    description: "Gorra Los Angeles Dodgers edición World Series 2020, en color azul marino, con logotipo frontal bordado en azul eléctrico y parche lateral conmemorativo World Series 2020. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul marino", "Azul eléctrico"]
},

{
    id: 31,
    name: "New York Mets — Subway Series",
    category: "gorras",
    team: "new-york-mets",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra granate Subway Series en estudio.webp",
    description: "Gorra New York Mets edición Subway Series, con corona granate, visera gris oscuro, logotipo NY bordado en blanco y parche lateral conmemorativo Subway Series. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Granate", "Gris oscuro", "Blanco"]
},

{
    id: 32,
    name: "Texas Rangers — All-Star Game 1995",
    category: "gorras",
    team: "texas-rangers",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra azul marino sobre fondo beige cálido.webp",
    description: "Gorra Texas Rangers con corona azul marino, visera negra, logotipo T bordado con detalles naranjas y parche lateral conmemorativo All-Star Game 1995. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul marino", "Negro", "Naranja"]
},

{
    id: 33,
    name: "New York Yankees — Beige & Brown",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra beige con logo NY bordado.webp",
    description: "Gorra New York Yankees con corona beige, visera marrón chocolate y logotipo NY bordado en marrón oscuro. Diseño bicolor clásico de estilo deportivo y urbano. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Beige", "Marrón chocolate"]
},

{
    id: 34,
    name: "St. Louis Cardinals — World Series Champions 2011",
    category: "gorras",
    team: "st-louis-cardinals",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Cardinals World Series 2011.webp",
    description: "Gorra St. Louis Cardinals con corona rosa y visera rojo granate, logotipo frontal Cardinals con los tradicionales pájaros sobre el bate y parche lateral World Series Champions 2011. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Rosa", "Rojo granate"]
},

{
    id: 35,
    name: "Philadelphia Phillies — Lavender All-Star Game",
    category: "gorras",
    team: "philadelphia-phillies",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra lila All-Star con visera rosa.webp",
    description: "Gorra Philadelphia Phillies con corona lila, visera rosa, logotipo P bordado en blanco plateado y parche lateral conmemorativo All-Star Game. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Lila", "Rosa", "Blanco plateado"]
},

{
    id: 36,
    name: "Atlanta Braves — World Series 1995",
    category: "gorras",
    team: "atlanta-braves",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra New Era marrón con parche bordado.webp",
    description: "Gorra Atlanta Braves en color marrón chocolate, con logotipo A bordado en blanco y parche lateral conmemorativo World Series 1995 en tonos dorados. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Marrón chocolate", "Blanco", "Dorado"]
},

{
    id: 37,
    name: "St. Louis Cardinals — World Series 1967",
    category: "gorras",
    team: "st-louis-cardinals",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra roja de los Cardinals sobre fondo beige.webp",
    description: "Gorra St. Louis Cardinals en color rojo intenso, con el tradicional logotipo del cardenal sobre el bate bordado en rojo y blanco, y parche lateral conmemorativo World Series 1967. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Rojo", "Blanco"]
},

{
    id: 38,
    name: "Los Angeles Dodgers — 100.º Aniversario",
    category: "gorras",
    team: "los-angeles-dodgers",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra rosa Dodgers con bordados y pegatina 9FORTY.webp",
    description: "Gorra Los Angeles Dodgers en color rosa, con logotipo LA bordado en blanco, detalles florales de rosas rojas y parche lateral conmemorativo del 100.º aniversario (1890–1990). Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Rosa", "Blanco", "Rojo", "Verde"]
},

{
    id: 39,
    name: "San Francisco Giants — Green All-Star Game",
    category: "gorras",
    team: "san-francisco-giants",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra SF bordada con parche All-Star.webp",
    description: "Gorra San Francisco Giants con corona verde oscuro, visera negra, logotipo SF bordado en blanco y parche lateral conmemorativo All-Star Game con detalles rosas. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Verde oscuro", "Negro", "Blanco"]
},

{
    id: 40,
    name: "Chicago White Sox — World Series Champions 10.º Aniversario",
    category: "gorras",
    team: "chicago-white-sox",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Sox Negra sobre Fondo Beige.webp",
    description: "Gorra Chicago White Sox en color negro, con logotipo SOX bordado en blanco y negro, paneles traseros de malla estilo trucker y parche lateral conmemorativo World Series Champions 10.º Aniversario. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Blanco"]
},

{
    id: 41,
    name: "St. Louis Cardinals — Sky Blue Retro",
    category: "gorras",
    team: "st-louis-cardinals",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra STL Cardinals en estudio retro.webp",
    description: "Gorra St. Louis Cardinals de estilo retro, con corona azul celeste, visera beige, logotipo STL bordado en blanco y parche lateral con el emblemático Gateway Arch de St. Louis. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul celeste", "Beige", "Blanco"]
},

{
    id: 42,
    name: "St. Louis Cardinals — Black Monochrome Edition",
    category: "gorras",
    team: "st-louis-cardinals",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra STL Monocromática de los Cardinals.webp",
    description: "Gorra St. Louis Cardinals completamente negra, con logotipo STL bordado en relieve del mismo tono y parche lateral conmemorativo World Series Champions. Diseño monocromático de estilo deportivo y urbano. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro"]
},

{
    id: 43,
    name: "Boston Red Sox — World Series 2004",
    category: "gorras",
    team: "boston-red-sox",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Verde Boston Red Sox 2004.webp",
    description: "Gorra Boston Red Sox en color verde, con logotipo B bordado en rojo y contorno blanco, y parche lateral conmemorativo World Series 2004. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Verde", "Rojo", "Blanco"]
},

{
    id: 44,
    name: "Seattle Mariners — 40.º Aniversario",
    category: "gorras",
    team: "seattle-mariners",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra verde con parche de aniversario.webp",
    description: "Gorra Seattle Mariners edición 40.º Aniversario (1977–2017), con corona verde oscuro, visera verde brillante, logotipo S bordado en blanco con contorno marrón, botón superior rosa y parche lateral conmemorativo. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Verde oscuro", "Verde brillante", "Blanco", "Rosa"]
},

{
    id: 45,
    name: "New York Yankees — Blue World Series",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Yankees azul con detalles bordados.webp",
    description: "Gorra New York Yankees con corona azul, visera negra, logotipo NY bordado en blanco, botón superior rojo y parche lateral conmemorativo World Series con detalles multicolor. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Azul", "Negro", "Blanco", "Rojo"]
},

{
    id: 46,
    name: "New York Yankees — Tricolor Edition",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Yankees Bordada Tricolor.webp",
    description: "Gorra New York Yankees con corona verde oscuro, visera roja, logotipo NY bordado en dorado, botón superior azul y parche lateral conmemorativo de los Yankees. Diseño tricolor de estilo deportivo y urbano. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Verde oscuro", "Rojo", "Dorado", "Azul"]
},

{
    id: 47,
    name: "New York Yankees — Purple World Series 2000",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Yankees morada con detalles bordados.webp",
    description: "Gorra New York Yankees en color morado, con logotipo NY bordado en relieve en gris oscuro y parche lateral conmemorativo World Series 2000 con detalles rosas y plateados. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Morado", "Gris oscuro"]
},

{
    id: 48,
    name: "New York Yankees — Black Subway Series",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"disponible",
    image: "assets/images/products/Gorra Yankees negra con parche Subway Series.webp",
    description: "Gorra New York Yankees en color negro, con el clásico logotipo NY bordado en blanco y parche lateral conmemorativo Subway Series, que representa la rivalidad entre los Yankees y los Mets. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Negro", "Blanco"]
},

{
    id: 49,
    name: "New York Yankees — Red Edition 1996",
    category: "gorras",
    team: "new-york-yankees",
    brand: "New Era",
    price: 24.99,
    availability:"pocas",
    image: "assets/images/products/Gorra Yankees Roja sobre Fondo Beige.webp",
    description: "Gorra New York Yankees en color rojo intenso, con el logotipo clásico del equipo bordado en blanco, rojo y azul, y parche lateral conmemorativo Yankees 1996. Modelo New Era 9FORTY ajustable.",
    sizes: ["Ajustable"],
    colors: ["Rojo", "Blanco", "Azul"]
},

];