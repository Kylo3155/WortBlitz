/**
 * Banco de vocabulario de sustantivos en alemán
 * Con artículo, sustantivo singular, plural, traducción en español, sinónimos aceptados, categoría y nivel CEFR.
 */
const GERMAN_NOUNS = [
  // --- PERSONAS Y FAMILIA ---
  {
    id: 1,
    noun: "Mann",
    article: "der",
    plural: "Männer",
    translation: "hombre",
    acceptedTranslations: ["hombre", "el hombre", "marido", "esposo"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 2,
    noun: "Frau",
    article: "die",
    plural: "Frauen",
    translation: "mujer",
    acceptedTranslations: ["mujer", "la mujer", "esposa", "señora"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 3,
    noun: "Kind",
    article: "das",
    plural: "Kinder",
    translation: "niño",
    acceptedTranslations: ["niño", "niña", "hijo", "hija", "el niño", "la niña", "chico"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 4,
    noun: "Freund",
    article: "der",
    plural: "Freunde",
    translation: "amigo",
    acceptedTranslations: ["amigo", "el amigo", "novio"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 5,
    noun: "Freundin",
    article: "die",
    plural: "Freundinnen",
    translation: "amiga",
    acceptedTranslations: ["amiga", "la amiga", "novia"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 6,
    noun: "Mutter",
    article: "die",
    plural: "Mütter",
    translation: "madre",
    acceptedTranslations: ["madre", "la madre", "mamá"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 7,
    noun: "Vater",
    article: "der",
    plural: "Väter",
    translation: "padre",
    acceptedTranslations: ["padre", "el padre", "papá"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 8,
    noun: "Bruder",
    article: "der",
    plural: "Brüder",
    translation: "hermano",
    acceptedTranslations: ["hermano", "el hermano"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 9,
    noun: "Schwester",
    article: "die",
    plural: "Schwestern",
    translation: "hermana",
    acceptedTranslations: ["hermana", "la hermana"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 10,
    noun: "Lehrer",
    article: "der",
    plural: "Lehrer",
    translation: "profesor",
    acceptedTranslations: ["profesor", "el profesor", "maestro"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 11,
    noun: "Arzt",
    article: "der",
    plural: "Ärzte",
    translation: "médico",
    acceptedTranslations: ["médico", "el médico", "medico", "doctor"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 12,
    noun: "Student",
    article: "der",
    plural: "Studenten",
    translation: "estudiante",
    acceptedTranslations: ["estudiante", "el estudiante", "universitario"],
    category: "Personas",
    level: "A1"
  },

  // --- ANIMALES ---
  {
    id: 13,
    noun: "Hund",
    article: "der",
    plural: "Hunde",
    translation: "perro",
    acceptedTranslations: ["perro", "el perro"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 14,
    noun: "Katze",
    article: "die",
    plural: "Katzen",
    translation: "gato",
    acceptedTranslations: ["gato", "gata", "el gato", "la gata"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 15,
    noun: "Pferd",
    article: "das",
    plural: "Pferde",
    translation: "caballo",
    acceptedTranslations: ["caballo", "el caballo"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 16,
    noun: "Vogel",
    article: "der",
    plural: "Vögel",
    translation: "pájaro",
    acceptedTranslations: ["pájaro", "el pájaro", "ave", "pajaro"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 17,
    noun: "Fisch",
    article: "der",
    plural: "Fische",
    translation: "pez",
    acceptedTranslations: ["pez", "el pez", "pescado"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 18,
    noun: "Kuh",
    article: "die",
    plural: "Kühe",
    translation: "vaca",
    acceptedTranslations: ["vaca", "la vaca"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 19,
    noun: "Schwein",
    article: "das",
    plural: "Schweine",
    translation: "cerdo",
    acceptedTranslations: ["cerdo", "el cerdo", "chancho", "puerco"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 20,
    noun: "Maus",
    article: "die",
    plural: "Mäuse",
    translation: "ratón",
    acceptedTranslations: ["ratón", "el ratón", "raton", "rata"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 21,
    noun: "Bär",
    article: "der",
    plural: "Bären",
    translation: "oso",
    acceptedTranslations: ["oso", "el oso"],
    category: "Animales",
    level: "A2"
  },

  // --- COMIDA Y BEBIDA ---
  {
    id: 22,
    noun: "Apfel",
    article: "der",
    plural: "Äpfel",
    translation: "manzana",
    acceptedTranslations: ["manzana", "la manzana"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 23,
    noun: "Banane",
    article: "die",
    plural: "Bananen",
    translation: "plátano",
    acceptedTranslations: ["plátano", "platano", "banana", "la banana", "el plátano"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 24,
    noun: "Brot",
    article: "das",
    plural: "Brote",
    translation: "pan",
    acceptedTranslations: ["pan", "el pan"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 25,
    noun: "Wasser",
    article: "das",
    plural: "Wasser",
    translation: "agua",
    acceptedTranslations: ["agua", "el agua"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 26,
    noun: "Kaffee",
    article: "der",
    plural: "Kaffees",
    translation: "café",
    acceptedTranslations: ["café", "el café", "cafe"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 27,
    noun: "Tee",
    article: "der",
    plural: "Tees",
    translation: "té",
    acceptedTranslations: ["té", "el té", "te"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 28,
    noun: "Milch",
    article: "die",
    plural: "Milch",
    translation: "leche",
    acceptedTranslations: ["leche", "la leche"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 29,
    noun: "Käse",
    article: "der",
    plural: "Käse",
    translation: "queso",
    acceptedTranslations: ["queso", "el queso"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 30,
    noun: "Fleisch",
    article: "das",
    plural: "Fleisch",
    translation: "carne",
    acceptedTranslations: ["carne", "la carne"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 31,
    noun: "Ei",
    article: "das",
    plural: "Eier",
    translation: "huevo",
    acceptedTranslations: ["huevo", "el huevo"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 32,
    noun: "Bier",
    article: "das",
    plural: "Biere",
    translation: "cerveza",
    acceptedTranslations: ["cerveza", "la cerveza"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 33,
    noun: "Wein",
    article: "der",
    plural: "Weine",
    translation: "vino",
    acceptedTranslations: ["vino", "el vino"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 34,
    noun: "Zucker",
    article: "der",
    plural: "Zucker",
    translation: "azúcar",
    acceptedTranslations: ["azúcar", "azucar", "el azúcar"],
    category: "Comida",
    level: "A2"
  },
  {
    id: 35,
    noun: "Salz",
    article: "das",
    plural: "Salze",
    translation: "sal",
    acceptedTranslations: ["sal", "la sal"],
    category: "Comida",
    level: "A2"
  },
  {
    id: 36,
    noun: "Kartoffel",
    article: "die",
    plural: "Kartoffeln",
    translation: "patata",
    acceptedTranslations: ["patata", "papa", "la patata", "la papa"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 37,
    noun: "Suppe",
    article: "die",
    plural: "Suppen",
    translation: "sopa",
    acceptedTranslations: ["sopa", "la sopa"],
    category: "Comida",
    level: "A1"
  },

  // --- CASA Y OBJETOS ---
  {
    id: 38,
    noun: "Haus",
    article: "das",
    plural: "Häuser",
    translation: "casa",
    acceptedTranslations: ["casa", "la casa"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 39,
    noun: "Zimmer",
    article: "das",
    plural: "Zimmer",
    translation: "habitación",
    acceptedTranslations: ["habitación", "habitacion", "cuarto", "la habitación", "pieza"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 40,
    noun: "Tisch",
    article: "der",
    plural: "Tische",
    translation: "mesa",
    acceptedTranslations: ["mesa", "la mesa"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 41,
    noun: "Stuhl",
    article: "der",
    plural: "Stühle",
    translation: "silla",
    acceptedTranslations: ["silla", "la silla"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 42,
    noun: "Bett",
    article: "das",
    plural: "Betten",
    translation: "cama",
    acceptedTranslations: ["cama", "la cama"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 43,
    noun: "Tür",
    article: "die",
    plural: "Türen",
    translation: "puerta",
    acceptedTranslations: ["puerta", "la puerta"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 44,
    noun: "Fenster",
    article: "das",
    plural: "Fenster",
    translation: "ventana",
    acceptedTranslations: ["ventana", "la ventana"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 45,
    noun: "Küche",
    article: "die",
    plural: "Küchen",
    translation: "cocina",
    acceptedTranslations: ["cocina", "la cocina"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 46,
    noun: "Bad",
    article: "das",
    plural: "Bäder",
    translation: "baño",
    acceptedTranslations: ["baño", "bano", "el baño"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 47,
    noun: "Lampe",
    article: "die",
    plural: "Lampen",
    translation: "lámpara",
    acceptedTranslations: ["lámpara", "lampara", "la lámpara"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 48,
    noun: "Schrank",
    article: "der",
    plural: "Schränke",
    translation: "armario",
    acceptedTranslations: ["armario", "el armario", "ropero", "closet"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 49,
    noun: "Schlüssel",
    article: "der",
    plural: "Schlüssel",
    translation: "llave",
    acceptedTranslations: ["llave", "la llave"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 50,
    noun: "Garten",
    article: "der",
    plural: "Gärten",
    translation: "jardín",
    acceptedTranslations: ["jardín", "jardin", "el jardín"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 51,
    noun: "Spiegel",
    article: "der",
    plural: "Spiegel",
    translation: "espejo",
    acceptedTranslations: ["espejo", "el espejo"],
    category: "Hogar",
    level: "A2"
  },

  // --- CIUDAD Y TRANSPORTE ---
  {
    id: 52,
    noun: "Stadt",
    article: "die",
    plural: "Städte",
    translation: "ciudad",
    acceptedTranslations: ["ciudad", "la ciudad"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 53,
    noun: "Straße",
    article: "die",
    plural: "Straßen",
    translation: "calle",
    acceptedTranslations: ["calle", "la calle"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 54,
    noun: "Auto",
    article: "das",
    plural: "Autos",
    translation: "coche",
    acceptedTranslations: ["coche", "auto", "carro", "el coche", "el auto"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 55,
    noun: "Zug",
    article: "der",
    plural: "Züge",
    translation: "tren",
    acceptedTranslations: ["tren", "el tren"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 56,
    noun: "Bus",
    article: "der",
    plural: "Busse",
    translation: "autobús",
    acceptedTranslations: ["autobús", "autobus", "bus", "el autobús", "colectivo", "micro"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 57,
    noun: "Fahrrad",
    article: "das",
    plural: "Fahrräder",
    translation: "bicicleta",
    acceptedTranslations: ["bicicleta", "la bicicleta", "bici"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 58,
    noun: "Flugzeug",
    article: "das",
    plural: "Flugzeuge",
    translation: "avión",
    acceptedTranslations: ["avión", "avion", "el avión"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 59,
    noun: "Bahnhof",
    article: "der",
    plural: "Bahnhöfe",
    translation: "estación",
    acceptedTranslations: ["estación", "estacion", "la estación", "estación de tren"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 60,
    noun: "Flughafen",
    article: "der",
    plural: "Flughäfen",
    translation: "aeropuerto",
    acceptedTranslations: ["aeropuerto", "el aeropuerto"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 61,
    noun: "Schule",
    article: "die",
    plural: "Schulen",
    translation: "escuela",
    acceptedTranslations: ["escuela", "la escuela", "colegio"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 62,
    noun: "Krankenhaus",
    article: "das",
    plural: "Krankenhäuser",
    translation: "hospital",
    acceptedTranslations: ["hospital", "el hospital"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 63,
    noun: "Bank",
    article: "die",
    plural: "Banken",
    translation: "banco",
    acceptedTranslations: ["banco", "el banco"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 64,
    noun: "Geschäft",
    article: "das",
    plural: "Geschäfte",
    translation: "tienda",
    acceptedTranslations: ["tienda", "la tienda", "comercio", "negocio"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 65,
    noun: "Park",
    article: "der",
    plural: "Parks",
    translation: "parque",
    acceptedTranslations: ["parque", "el parque"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 66,
    noun: "Brücke",
    article: "die",
    plural: "Brücken",
    translation: "puente",
    acceptedTranslations: ["puente", "el puente"],
    category: "Ciudad",
    level: "A2"
  },

  // --- NATURALEZA Y TIEMPO ---
  {
    id: 67,
    noun: "Sonne",
    article: "die",
    plural: "Sonnen",
    translation: "sol",
    acceptedTranslations: ["sol", "el sol"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 68,
    noun: "Mond",
    article: "der",
    plural: "Monde",
    translation: "luna",
    acceptedTranslations: ["luna", "la luna"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 69,
    noun: "Stern",
    article: "der",
    plural: "Sterne",
    translation: "estrella",
    acceptedTranslations: ["estrella", "la estrella"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 70,
    noun: "Baum",
    article: "der",
    plural: "Bäume",
    translation: "árbol",
    acceptedTranslations: ["árbol", "arbol", "el árbol"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 71,
    noun: "Blume",
    article: "die",
    plural: "Blumen",
    translation: "flor",
    acceptedTranslations: ["flor", "la flor"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 72,
    noun: "Berg",
    article: "der",
    plural: "Berge",
    translation: "montaña",
    acceptedTranslations: ["montaña", "montana", "la montaña", "monte"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 73,
    noun: "Meer",
    article: "das",
    plural: "Meere",
    translation: "mar",
    acceptedTranslations: ["mar", "el mar"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 74,
    noun: "Fluss",
    article: "der",
    plural: "Flüsse",
    translation: "río",
    acceptedTranslations: ["río", "rio", "el río"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 75,
    noun: "Wald",
    article: "der",
    plural: "Wälder",
    translation: "bosque",
    acceptedTranslations: ["bosque", "el bosque"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 76,
    noun: "Wetter",
    article: "das",
    plural: "Wetter",
    translation: "clima",
    acceptedTranslations: ["clima", "el clima", "tiempo"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 77,
    noun: "Regen",
    article: "der",
    plural: "Regen",
    translation: "lluvia",
    acceptedTranslations: ["lluvia", "la lluvia"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 78,
    noun: "Schnee",
    article: "der",
    plural: "Schnee",
    translation: "nieve",
    acceptedTranslations: ["nieve", "la nieve"],
    category: "Naturaleza",
    level: "A2"
  },

  // --- CUERPO HUMANO ---
  {
    id: 79,
    noun: "Kopf",
    article: "der",
    plural: "Köpfe",
    translation: "cabeza",
    acceptedTranslations: ["cabeza", "la cabeza"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 80,
    noun: "Auge",
    article: "das",
    plural: "Augen",
    translation: "ojo",
    acceptedTranslations: ["ojo", "el ojo"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 81,
    noun: "Ohr",
    article: "das",
    plural: "Ohren",
    translation: "oreja",
    acceptedTranslations: ["oreja", "oído", "la oreja", "el oído", "oido"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 82,
    noun: "Nase",
    article: "die",
    plural: "Nasen",
    translation: "nariz",
    acceptedTranslations: ["nariz", "la nariz"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 83,
    noun: "Mund",
    article: "der",
    plural: "Münder",
    translation: "boca",
    acceptedTranslations: ["boca", "la boca"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 84,
    noun: "Hand",
    article: "die",
    plural: "Hände",
    translation: "mano",
    acceptedTranslations: ["mano", "la mano"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 85,
    noun: "Arm",
    article: "der",
    plural: "Arme",
    translation: "brazo",
    acceptedTranslations: ["brazo", "el brazo"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 86,
    noun: "Bein",
    article: "das",
    plural: "Beine",
    translation: "pierna",
    acceptedTranslations: ["pierna", "la pierna"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 87,
    noun: "Fuß",
    article: "der",
    plural: "Füße",
    translation: "pie",
    acceptedTranslations: ["pie", "el pie"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 88,
    noun: "Herz",
    article: "das",
    plural: "Herzen",
    translation: "corazón",
    acceptedTranslations: ["corazón", "corazon", "el corazón"],
    category: "Cuerpo",
    level: "A2"
  },

  // --- ROPA ---
  {
    id: 89,
    noun: "Kleid",
    article: "das",
    plural: "Kleider",
    translation: "vestido",
    acceptedTranslations: ["vestido", "el vestido"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 90,
    noun: "Hose",
    article: "die",
    plural: "Hosen",
    translation: "pantalón",
    acceptedTranslations: ["pantalón", "pantalon", "el pantalón", "pantalones"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 91,
    noun: "Hemd",
    article: "das",
    plural: "Hemden",
    translation: "camisa",
    acceptedTranslations: ["camisa", "la camisa"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 92,
    noun: "Schuh",
    article: "der",
    plural: "Schuhe",
    translation: "zapato",
    acceptedTranslations: ["zapato", "el zapato"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 93,
    noun: "Jacke",
    article: "die",
    plural: "Jacken",
    translation: "chaqueta",
    acceptedTranslations: ["chaqueta", "la chaqueta", "campera", "abrigo"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 94,
    noun: "Tasche",
    article: "die",
    plural: "Taschen",
    translation: "bolso",
    acceptedTranslations: ["bolso", "bolsa", "la bolsa", "el bolso", "mochila"],
    category: "Ropa",
    level: "A1"
  },

  // --- ESTUDIO, TRABAJO Y TIEMPO ---
  {
    id: 95,
    noun: "Buch",
    article: "das",
    plural: "Bücher",
    translation: "libro",
    acceptedTranslations: ["libro", "el libro"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 96,
    noun: "Stift",
    article: "der",
    plural: "Stifte",
    translation: "bolígrafo",
    acceptedTranslations: ["bolígrafo", "boligrafo", "lápiz", "lapiz", "pluma", "el bolígrafo"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 97,
    noun: "Zeitung",
    article: "die",
    plural: "Zeitungen",
    translation: "periódico",
    acceptedTranslations: ["periódico", "periodico", "diario", "el periódico"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 98,
    noun: "Brief",
    article: "der",
    plural: "Briefe",
    translation: "carta",
    acceptedTranslations: ["carta", "la carta"],
    category: "Estudio",
    level: "A2"
  },
  {
    id: 99,
    noun: "Wort",
    article: "das",
    plural: "Wörter",
    translation: "palabra",
    acceptedTranslations: ["palabra", "la palabra"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 100,
    noun: "Sprache",
    article: "die",
    plural: "Sprachen",
    translation: "idioma",
    acceptedTranslations: ["idioma", "lengua", "el idioma"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 101,
    noun: "Arbeit",
    article: "die",
    plural: "Arbeiten",
    translation: "trabajo",
    acceptedTranslations: ["trabajo", "el trabajo"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 102,
    noun: "Geld",
    article: "das",
    plural: "Gelder",
    translation: "dinero",
    acceptedTranslations: ["dinero", "el dinero", "plata"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 103,
    noun: "Zeit",
    article: "die",
    plural: "Zeiten",
    translation: "tiempo",
    acceptedTranslations: ["tiempo", "el tiempo", "hora"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 104,
    noun: "Uhr",
    article: "die",
    plural: "Uhren",
    translation: "reloj",
    acceptedTranslations: ["reloj", "el reloj"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 105,
    noun: "Tag",
    article: "der",
    plural: "Tage",
    translation: "día",
    acceptedTranslations: ["día", "dia", "el día"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 106,
    noun: "Nacht",
    article: "die",
    plural: "Nächte",
    translation: "noche",
    acceptedTranslations: ["noche", "la noche"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 107,
    noun: "Woche",
    article: "die",
    plural: "Wochen",
    translation: "semana",
    acceptedTranslations: ["semana", "la semana"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 108,
    noun: "Monat",
    article: "der",
    plural: "Monate",
    translation: "mes",
    acceptedTranslations: ["mes", "el mes"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 109,
    noun: "Jahr",
    article: "das",
    plural: "Jahre",
    translation: "año",
    acceptedTranslations: ["año", "ano", "el año"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 110,
    noun: "Name",
    article: "der",
    plural: "Namen",
    translation: "nombre",
    acceptedTranslations: ["nombre", "el nombre"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 111,
    noun: "Frage",
    article: "die",
    plural: "Fragen",
    translation: "pregunta",
    acceptedTranslations: ["pregunta", "la pregunta"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 112,
    noun: "Antwort",
    article: "die",
    plural: "Antworten",
    translation: "respuesta",
    acceptedTranslations: ["respuesta", "la respuesta"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 113,
    noun: "Problem",
    article: "das",
    plural: "Probleme",
    translation: "problema",
    acceptedTranslations: ["problema", "el problema"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 114,
    noun: "Reise",
    article: "die",
    plural: "Reisen",
    translation: "viaje",
    acceptedTranslations: ["viaje", "el viaje"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 115,
    noun: "Urlaub",
    article: "der",
    plural: "Urlaube",
    translation: "vacaciones",
    acceptedTranslations: ["vacaciones", "las vacaciones"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 116,
    noun: "Musik",
    article: "die",
    plural: "Musiken",
    translation: "música",
    acceptedTranslations: ["música", "musica", "la música"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 117,
    noun: "Film",
    article: "der",
    plural: "Filme",
    translation: "película",
    acceptedTranslations: ["película", "pelicula", "la película", "film"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 118,
    noun: "Spiel",
    article: "das",
    plural: "Spiele",
    translation: "juego",
    acceptedTranslations: ["juego", "el juego", "partido"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 119,
    noun: "Bild",
    article: "das",
    plural: "Bilder",
    translation: "imagen",
    acceptedTranslations: ["imagen", "cuadro", "foto", "la imagen", "el cuadro"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 120,
    noun: "Weg",
    article: "der",
    plural: "Wege",
    translation: "camino",
    acceptedTranslations: ["camino", "el camino", "ruta", "sendero"],
    category: "Vida Diaria",
    level: "A2"
  }
];
