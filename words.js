/**
 * WortBlitz ⚡ - Banco de Vocabulario Oficial A1 & A2 (Goethe-Institut / CEFR)
 * Vocabulario de alta frecuencia: género (der, die, das), plural y traducciones en español.
 */

const GERMAN_NOUNS = [
  // ==========================================
  // 1. PERSONAS Y FAMILIA (Menschen & Familie)
  // ==========================================
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
    acceptedTranslations: ["niño", "el niño", "niña", "hijo", "hija", "chico"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 4,
    noun: "Baby",
    article: "das",
    plural: "Babys",
    translation: "bebé",
    acceptedTranslations: ["bebé", "el bebé", "bebe"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 5,
    noun: "Familie",
    article: "die",
    plural: "Familien",
    translation: "familia",
    acceptedTranslations: ["familia", "la familia"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 6,
    noun: "Vater",
    article: "der",
    plural: "Väter",
    translation: "padre",
    acceptedTranslations: ["padre", "el padre", "papá", "papa"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 7,
    noun: "Mutter",
    article: "die",
    plural: "Mütter",
    translation: "madre",
    acceptedTranslations: ["madre", "la madre", "mamá", "mama"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 8,
    noun: "Sohn",
    article: "der",
    plural: "Söhne",
    translation: "hijo",
    acceptedTranslations: ["hijo", "el hijo"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 9,
    noun: "Tochter",
    article: "die",
    plural: "Töchter",
    translation: "hija",
    acceptedTranslations: ["hija", "la hija"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 10,
    noun: "Bruder",
    article: "der",
    plural: "Brüder",
    translation: "hermano",
    acceptedTranslations: ["hermano", "el hermano"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 11,
    noun: "Schwester",
    article: "die",
    plural: "Schwestern",
    translation: "hermana",
    acceptedTranslations: ["hermana", "la hermana"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 12,
    noun: "Freund",
    article: "der",
    plural: "Freunde",
    translation: "amigo",
    acceptedTranslations: ["amigo", "el amigo", "novio"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 13,
    noun: "Freundin",
    article: "die",
    plural: "Freundinnen",
    translation: "amiga",
    acceptedTranslations: ["amiga", "la amiga", "novia"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 14,
    noun: "Kollege",
    article: "der",
    plural: "Kollegen",
    translation: "compañero de trabajo",
    acceptedTranslations: ["compañero de trabajo", "colega", "el colega", "compañero"],
    category: "Personas",
    level: "A2"
  },
  {
    id: 15,
    noun: "Kollegin",
    article: "die",
    plural: "Kolleginnen",
    translation: "compañera de trabajo",
    acceptedTranslations: ["compañera de trabajo", "colega", "la colega", "compañera"],
    category: "Personas",
    level: "A2"
  },
  {
    id: 16,
    noun: "Nachbar",
    article: "der",
    plural: "Nachbarn",
    translation: "vecino",
    acceptedTranslations: ["vecino", "el vecino"],
    category: "Personas",
    level: "A2"
  },
  {
    id: 17,
    noun: "Lehrer",
    article: "der",
    plural: "Lehrer",
    translation: "profesor",
    acceptedTranslations: ["profesor", "el profesor", "maestro"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 18,
    noun: "Arzt",
    article: "der",
    plural: "Ärzte",
    translation: "médico",
    acceptedTranslations: ["médico", "medico", "el médico", "doctor"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 19,
    noun: "Student",
    article: "der",
    plural: "Studenten",
    translation: "estudiante",
    acceptedTranslations: ["estudiante", "el estudiante", "universitario"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 20,
    noun: "Mädchen",
    article: "das",
    plural: "Mädchen",
    translation: "chica",
    acceptedTranslations: ["chica", "niña", "la chica", "la niña", "muchacha"],
    category: "Personas",
    level: "A1"
  },
  {
    id: 21,
    noun: "Junge",
    article: "der",
    plural: "Jungen",
    translation: "chico",
    acceptedTranslations: ["chico", "niño", "el chico", "el niño", "muchacho"],
    category: "Personas",
    level: "A1"
  },

  // ==========================================
  // 2. ANIMALES (Tiere)
  // ==========================================
  {
    id: 22,
    noun: "Hund",
    article: "der",
    plural: "Hunde",
    translation: "perro",
    acceptedTranslations: ["perro", "el perro"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 23,
    noun: "Katze",
    article: "die",
    plural: "Katzen",
    translation: "gato",
    acceptedTranslations: ["gato", "la gata", "el gato", "gata"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 24,
    noun: "Vogel",
    article: "der",
    plural: "Vögel",
    translation: "pájaro",
    acceptedTranslations: ["pájaro", "pajaro", "el pájaro", "ave"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 25,
    noun: "Pferd",
    article: "das",
    plural: "Pferde",
    translation: "caballo",
    acceptedTranslations: ["caballo", "el caballo"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 26,
    noun: "Fisch",
    article: "der",
    plural: "Fische",
    translation: "pez",
    acceptedTranslations: ["pez", "el pez", "pescado"],
    category: "Animales",
    level: "A1"
  },
  {
    id: 27,
    noun: "Kuh",
    article: "die",
    plural: "Kühe",
    translation: "vaca",
    acceptedTranslations: ["vaca", "la vaca"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 28,
    noun: "Schwein",
    article: "das",
    plural: "Schweine",
    translation: "cerdo",
    acceptedTranslations: ["cerdo", "el cerdo", "puerco", "chancho"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 29,
    noun: "Schaf",
    article: "das",
    plural: "Schafe",
    translation: "oveja",
    acceptedTranslations: ["oveja", "la oveja"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 30,
    noun: "Maus",
    article: "die",
    plural: "Mäuse",
    translation: "ratón",
    acceptedTranslations: ["ratón", "raton", "el ratón", "rata"],
    category: "Animales",
    level: "A2"
  },
  {
    id: 31,
    noun: "Bär",
    article: "der",
    plural: "Bären",
    translation: "oso",
    acceptedTranslations: ["oso", "el oso"],
    category: "Animales",
    level: "A2"
  },

  // ==========================================
  // 3. COMIDA Y BEBIDA (Essen & Trinken)
  // ==========================================
  {
    id: 32,
    noun: "Apfel",
    article: "der",
    plural: "Äpfel",
    translation: "manzana",
    acceptedTranslations: ["manzana", "la manzana"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 33,
    noun: "Banane",
    article: "die",
    plural: "Bananen",
    translation: "plátano",
    acceptedTranslations: ["plátano", "platano", "banana", "la banana", "el plátano"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 34,
    noun: "Brot",
    article: "das",
    plural: "Brote",
    translation: "pan",
    acceptedTranslations: ["pan", "el pan"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 35,
    noun: "Brötchen",
    article: "das",
    plural: "Brötchen",
    translation: "panecillo",
    acceptedTranslations: ["panecillo", "el panecillo", "bollo"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 36,
    noun: "Butter",
    article: "die",
    plural: "Butter",
    translation: "mantequilla",
    acceptedTranslations: ["mantequilla", "la mantequilla", "manteca"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 37,
    noun: "Ei",
    article: "das",
    plural: "Eier",
    translation: "huevo",
    acceptedTranslations: ["huevo", "el huevo"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 38,
    noun: "Käse",
    article: "der",
    plural: "Käse",
    translation: "queso",
    acceptedTranslations: ["queso", "el queso"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 39,
    noun: "Fleisch",
    article: "das",
    plural: "Fleisch",
    translation: "carne",
    acceptedTranslations: ["carne", "la carne"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 40,
    noun: "Hähnchen",
    article: "das",
    plural: "Hähnchen",
    translation: "pollo",
    acceptedTranslations: ["pollo", "el pollo"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 41,
    noun: "Reis",
    article: "der",
    plural: "Reis",
    translation: "arroz",
    acceptedTranslations: ["arroz", "el arroz"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 42,
    noun: "Kartoffel",
    article: "die",
    plural: "Kartoffeln",
    translation: "patata",
    acceptedTranslations: ["patata", "papa", "la patata", "la papa"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 43,
    noun: "Tomate",
    article: "die",
    plural: "Tomaten",
    translation: "tomate",
    acceptedTranslations: ["tomate", "el tomate"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 44,
    noun: "Salat",
    article: "der",
    plural: "Salate",
    translation: "ensalada",
    acceptedTranslations: ["ensalada", "la ensalada"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 45,
    noun: "Suppe",
    article: "die",
    plural: "Suppen",
    translation: "sopa",
    acceptedTranslations: ["sopa", "la sopa"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 46,
    noun: "Gemüse",
    article: "das",
    plural: "Gemüse",
    translation: "verdura",
    acceptedTranslations: ["verdura", "la verdura", "vegetales", "verduras"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 47,
    noun: "Obst",
    article: "das",
    plural: "Obst",
    translation: "fruta",
    acceptedTranslations: ["fruta", "la fruta", "frutas"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 48,
    noun: "Kuchen",
    article: "der",
    plural: "Kuchen",
    translation: "pastel",
    acceptedTranslations: ["pastel", "el pastel", "tarta", "torta", "bizcocho"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 49,
    noun: "Schokolade",
    article: "die",
    plural: "Schokoladen",
    translation: "chocolate",
    acceptedTranslations: ["chocolate", "el chocolate"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 50,
    noun: "Zucker",
    article: "der",
    plural: "Zucker",
    translation: "azúcar",
    acceptedTranslations: ["azúcar", "azucar", "el azúcar"],
    category: "Comida",
    level: "A2"
  },
  {
    id: 51,
    noun: "Salz",
    article: "das",
    plural: "Salze",
    translation: "sal",
    acceptedTranslations: ["sal", "la sal"],
    category: "Comida",
    level: "A2"
  },
  {
    id: 52,
    noun: "Wasser",
    article: "das",
    plural: "Wasser",
    translation: "agua",
    acceptedTranslations: ["agua", "el agua"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 53,
    noun: "Milch",
    article: "die",
    plural: "Milch",
    translation: "leche",
    acceptedTranslations: ["leche", "la leche"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 54,
    noun: "Kaffee",
    article: "der",
    plural: "Kaffees",
    translation: "café",
    acceptedTranslations: ["café", "cafe", "el café"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 55,
    noun: "Tee",
    article: "der",
    plural: "Tees",
    translation: "té",
    acceptedTranslations: ["té", "te", "el té"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 56,
    noun: "Saft",
    article: "der",
    plural: "Säfte",
    translation: "zumo",
    acceptedTranslations: ["zumo", "jugo", "el zumo", "el jugo"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 57,
    noun: "Bier",
    article: "das",
    plural: "Biere",
    translation: "cerveza",
    acceptedTranslations: ["cerveza", "la cerveza"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 58,
    noun: "Wein",
    article: "der",
    plural: "Weine",
    translation: "vino",
    acceptedTranslations: ["vino", "el vino"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 59,
    noun: "Flasche",
    article: "die",
    plural: "Flaschen",
    translation: "botella",
    acceptedTranslations: ["botella", "la botella"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 60,
    noun: "Glas",
    article: "das",
    plural: "Gläser",
    translation: "vaso",
    acceptedTranslations: ["vaso", "el vaso", "copa", "cristal"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 61,
    noun: "Tasse",
    article: "die",
    plural: "Tassen",
    translation: "taza",
    acceptedTranslations: ["taza", "la taza"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 62,
    noun: "Teller",
    article: "der",
    plural: "Teller",
    translation: "plato",
    acceptedTranslations: ["plato", "el plato"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 63,
    noun: "Restaurant",
    article: "das",
    plural: "Restaurants",
    translation: "restaurante",
    acceptedTranslations: ["restaurante", "el restaurante"],
    category: "Comida",
    level: "A1"
  },
  {
    id: 64,
    noun: "Rechnung",
    article: "die",
    plural: "Rechnungen",
    translation: "cuenta",
    acceptedTranslations: ["cuenta", "la cuenta", "factura"],
    category: "Comida",
    level: "A1"
  },

  // ==========================================
  // 4. HOGAR Y OBJETOS (Wohnen & Haushalt)
  // ==========================================
  {
    id: 65,
    noun: "Haus",
    article: "das",
    plural: "Häuser",
    translation: "casa",
    acceptedTranslations: ["casa", "la casa"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 66,
    noun: "Wohnung",
    article: "die",
    plural: "Wohnungen",
    translation: "apartamento",
    acceptedTranslations: ["apartamento", "el apartamento", "piso", "departamento"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 67,
    noun: "Zimmer",
    article: "das",
    plural: "Zimmer",
    translation: "habitación",
    acceptedTranslations: ["habitación", "habitacion", "la habitación", "cuarto", "pieza"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 68,
    noun: "Küche",
    article: "die",
    plural: "Küchen",
    translation: "cocina",
    acceptedTranslations: ["cocina", "la cocina"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 69,
    noun: "Bad",
    article: "das",
    plural: "Bäder",
    translation: "baño",
    acceptedTranslations: ["baño", "bano", "el baño"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 70,
    noun: "Schlafzimmer",
    article: "das",
    plural: "Schlafzimmer",
    translation: "dormitorio",
    acceptedTranslations: ["dormitorio", "el dormitorio", "habitación", "cuarto"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 71,
    noun: "Wohnzimmer",
    article: "das",
    plural: "Wohnzimmer",
    translation: "sala de estar",
    acceptedTranslations: ["sala de estar", "salón", "salon", "sala"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 72,
    noun: "Balkon",
    article: "der",
    plural: "Balkone",
    translation: "balcón",
    acceptedTranslations: ["balcón", "balcon", "el balcón"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 73,
    noun: "Garten",
    article: "der",
    plural: "Gärten",
    translation: "jardín",
    acceptedTranslations: ["jardín", "jardin", "el jardín"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 74,
    noun: "Tür",
    article: "die",
    plural: "Türen",
    translation: "puerta",
    acceptedTranslations: ["puerta", "la puerta"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 75,
    noun: "Fenster",
    article: "das",
    plural: "Fenster",
    translation: "ventana",
    acceptedTranslations: ["ventana", "la ventana"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 76,
    noun: "Wand",
    article: "die",
    plural: "Wände",
    translation: "pared",
    acceptedTranslations: ["pared", "la pared", "muro"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 77,
    noun: "Tisch",
    article: "der",
    plural: "Tische",
    translation: "mesa",
    acceptedTranslations: ["mesa", "la mesa"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 78,
    noun: "Stuhl",
    article: "der",
    plural: "Stühle",
    translation: "silla",
    acceptedTranslations: ["silla", "la silla"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 79,
    noun: "Bett",
    article: "das",
    plural: "Betten",
    translation: "cama",
    acceptedTranslations: ["cama", "la cama"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 80,
    noun: "Sofa",
    article: "das",
    plural: "Sofas",
    translation: "sofá",
    acceptedTranslations: ["sofá", "sofa", "el sofá", "sillón"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 81,
    noun: "Schrank",
    article: "der",
    plural: "Schränke",
    translation: "armario",
    acceptedTranslations: ["armario", "el armario", "ropero", "closet"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 82,
    noun: "Lampe",
    article: "die",
    plural: "Lampen",
    translation: "lámpara",
    acceptedTranslations: ["lámpara", "lampara", "la lámpara"],
    category: "Hogar",
    level: "A1"
  },
  {
    id: 83,
    noun: "Spiegel",
    article: "der",
    plural: "Spiegel",
    translation: "espejo",
    acceptedTranslations: ["espejo", "el espejo"],
    category: "Hogar",
    level: "A2"
  },
  {
    id: 84,
    noun: "Schlüssel",
    article: "der",
    plural: "Schlüssel",
    translation: "llave",
    acceptedTranslations: ["llave", "la llave"],
    category: "Hogar",
    level: "A1"
  },

  // ==========================================
  // 5. CIUDAD Y TRANSPORTE (Stadt & Verkehr)
  // ==========================================
  {
    id: 85,
    noun: "Stadt",
    article: "die",
    plural: "Städte",
    translation: "ciudad",
    acceptedTranslations: ["ciudad", "la ciudad"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 86,
    noun: "Dorf",
    article: "das",
    plural: "Dörfer",
    translation: "pueblo",
    acceptedTranslations: ["pueblo", "el pueblo"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 87,
    noun: "Straße",
    article: "die",
    plural: "Straßen",
    translation: "calle",
    acceptedTranslations: ["calle", "la calle"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 88,
    noun: "Platz",
    article: "der",
    plural: "Plätze",
    translation: "plaza",
    acceptedTranslations: ["plaza", "la plaza", "lugar"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 89,
    noun: "Weg",
    article: "der",
    plural: "Wege",
    translation: "camino",
    acceptedTranslations: ["camino", "el camino", "ruta", "sendero"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 90,
    noun: "Auto",
    article: "das",
    plural: "Autos",
    translation: "coche",
    acceptedTranslations: ["coche", "auto", "carro", "el coche", "el auto"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 91,
    noun: "Bus",
    article: "der",
    plural: "Busse",
    translation: "autobús",
    acceptedTranslations: ["autobús", "autobus", "bus", "el autobús", "colectivo", "micro"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 92,
    noun: "Zug",
    article: "der",
    plural: "Züge",
    translation: "tren",
    acceptedTranslations: ["tren", "el tren"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 93,
    noun: "U-Bahn",
    article: "die",
    plural: "U-Bahnen",
    translation: "metro",
    acceptedTranslations: ["metro", "el metro", "subte"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 94,
    noun: "Fahrrad",
    article: "das",
    plural: "Fahrräder",
    translation: "bicicleta",
    acceptedTranslations: ["bicicleta", "la bicicleta", "bici"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 95,
    noun: "Flugzeug",
    article: "das",
    plural: "Flugzeuge",
    translation: "avión",
    acceptedTranslations: ["avión", "avion", "el avión"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 96,
    noun: "Bahnhof",
    article: "der",
    plural: "Bahnhöfe",
    translation: "estación de tren",
    acceptedTranslations: ["estación de tren", "estacion de tren", "estación", "la estación"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 97,
    noun: "Flughafen",
    article: "der",
    plural: "Flughäfen",
    translation: "aeropuerto",
    acceptedTranslations: ["aeropuerto", "el aeropuerto"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 98,
    noun: "Haltestelle",
    article: "die",
    plural: "Haltestellen",
    translation: "parada",
    acceptedTranslations: ["parada", "la parada", "parada de autobús"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 99,
    noun: "Schule",
    article: "die",
    plural: "Schulen",
    translation: "escuela",
    acceptedTranslations: ["escuela", "la escuela", "colegio"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 100,
    noun: "Universität",
    article: "die",
    plural: "Universitäten",
    translation: "universidad",
    acceptedTranslations: ["universidad", "la universidad", "facultad"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 101,
    noun: "Krankenhaus",
    article: "das",
    plural: "Krankenhäuser",
    translation: "hospital",
    acceptedTranslations: ["hospital", "el hospital", "clínica"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 102,
    noun: "Apotheke",
    article: "die",
    plural: "Apotheken",
    translation: "farmacia",
    acceptedTranslations: ["farmacia", "la farmacia"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 103,
    noun: "Bank",
    article: "die",
    plural: "Banken",
    translation: "banco",
    acceptedTranslations: ["banco", "el banco"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 104,
    noun: "Geschäft",
    article: "das",
    plural: "Geschäfte",
    translation: "tienda",
    acceptedTranslations: ["tienda", "la tienda", "comercio", "negocio"],
    category: "Ciudad",
    level: "A2"
  },
  {
    id: 105,
    noun: "Supermarkt",
    article: "der",
    plural: "Supermärkte",
    translation: "supermercado",
    acceptedTranslations: ["supermercado", "el supermercado", "súper"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 106,
    noun: "Park",
    article: "der",
    plural: "Parks",
    translation: "parque",
    acceptedTranslations: ["parque", "el parque"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 107,
    noun: "Hotel",
    article: "das",
    plural: "Hotels",
    translation: "hotel",
    acceptedTranslations: ["hotel", "el hotel"],
    category: "Ciudad",
    level: "A1"
  },
  {
    id: 108,
    noun: "Brücke",
    article: "die",
    plural: "Brücken",
    translation: "puente",
    acceptedTranslations: ["puente", "el puente"],
    category: "Ciudad",
    level: "A2"
  },

  // ==========================================
  // 6. NATURALEZA Y CLIMA (Natur & Wetter)
  // ==========================================
  {
    id: 109,
    noun: "Sonne",
    article: "die",
    plural: "Sonnen",
    translation: "sol",
    acceptedTranslations: ["sol", "el sol"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 110,
    noun: "Mond",
    article: "der",
    plural: "Monde",
    translation: "luna",
    acceptedTranslations: ["luna", "la luna"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 111,
    noun: "Stern",
    article: "der",
    plural: "Sterne",
    translation: "estrella",
    acceptedTranslations: ["estrella", "la estrella"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 112,
    noun: "Himmel",
    article: "der",
    plural: "Himmel",
    translation: "cielo",
    acceptedTranslations: ["cielo", "el cielo"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 113,
    noun: "Wolke",
    article: "die",
    plural: "Wolken",
    translation: "nube",
    acceptedTranslations: ["nube", "la nube"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 114,
    noun: "Regen",
    article: "der",
    plural: "Regen",
    translation: "lluvia",
    acceptedTranslations: ["lluvia", "la lluvia"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 115,
    noun: "Schnee",
    article: "der",
    plural: "Schnee",
    translation: "nieve",
    acceptedTranslations: ["nieve", "la nieve"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 116,
    noun: "Wind",
    article: "der",
    plural: "Winde",
    translation: "viento",
    acceptedTranslations: ["viento", "el viento"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 117,
    noun: "Wetter",
    article: "das",
    plural: "Wetter",
    translation: "clima",
    acceptedTranslations: ["clima", "el clima", "tiempo"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 118,
    noun: "Baum",
    article: "der",
    plural: "Bäume",
    translation: "árbol",
    acceptedTranslations: ["árbol", "arbol", "el árbol"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 119,
    noun: "Blume",
    article: "die",
    plural: "Blumen",
    translation: "flor",
    acceptedTranslations: ["flor", "la flor"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 120,
    noun: "Wald",
    article: "der",
    plural: "Wälder",
    translation: "bosque",
    acceptedTranslations: ["bosque", "el bosque"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 121,
    noun: "Berg",
    article: "der",
    plural: "Berge",
    translation: "montaña",
    acceptedTranslations: ["montaña", "montana", "la montaña", "monte"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 122,
    noun: "Meer",
    article: "das",
    plural: "Meere",
    translation: "mar",
    acceptedTranslations: ["mar", "el mar"],
    category: "Naturaleza",
    level: "A1"
  },
  {
    id: 123,
    noun: "See",
    article: "der",
    plural: "Seen",
    translation: "lago",
    acceptedTranslations: ["lago", "el lago"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 124,
    noun: "Fluss",
    article: "der",
    plural: "Flüsse",
    translation: "río",
    acceptedTranslations: ["río", "rio", "el río"],
    category: "Naturaleza",
    level: "A2"
  },
  {
    id: 125,
    noun: "Strand",
    article: "der",
    plural: "Strände",
    translation: "playa",
    acceptedTranslations: ["playa", "la playa"],
    category: "Naturaleza",
    level: "A2"
  },

  // ==========================================
  // 7. CUERPO HUMANO (Körper & Gesundheit)
  // ==========================================
  {
    id: 126,
    noun: "Kopf",
    article: "der",
    plural: "Köpfe",
    translation: "cabeza",
    acceptedTranslations: ["cabeza", "la cabeza"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 127,
    noun: "Haar",
    article: "das",
    plural: "Haare",
    translation: "pelo",
    acceptedTranslations: ["pelo", "el pelo", "cabello"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 128,
    noun: "Auge",
    article: "das",
    plural: "Augen",
    translation: "ojo",
    acceptedTranslations: ["ojo", "el ojo"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 129,
    noun: "Ohr",
    article: "das",
    plural: "Ohren",
    translation: "oreja",
    acceptedTranslations: ["oreja", "la oreja", "oído", "el oído", "oido"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 130,
    noun: "Nase",
    article: "die",
    plural: "Nasen",
    translation: "nariz",
    acceptedTranslations: ["nariz", "la nariz"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 131,
    noun: "Mund",
    article: "der",
    plural: "Münder",
    translation: "boca",
    acceptedTranslations: ["boca", "la boca"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 132,
    noun: "Zahn",
    article: "der",
    plural: "Zähne",
    translation: "diente",
    acceptedTranslations: ["diente", "el diente"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 133,
    noun: "Hals",
    article: "der",
    plural: "Hälse",
    translation: "cuello",
    acceptedTranslations: ["cuello", "el cuello", "garganta"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 134,
    noun: "Hand",
    article: "die",
    plural: "Hände",
    translation: "mano",
    acceptedTranslations: ["mano", "la mano"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 135,
    noun: "Finger",
    article: "der",
    plural: "Finger",
    translation: "dedo",
    acceptedTranslations: ["dedo", "el dedo"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 136,
    noun: "Arm",
    article: "der",
    plural: "Arme",
    translation: "brazo",
    acceptedTranslations: ["brazo", "el brazo"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 137,
    noun: "Bein",
    article: "das",
    plural: "Beine",
    translation: "pierna",
    acceptedTranslations: ["pierna", "la pierna"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 138,
    noun: "Fuß",
    article: "der",
    plural: "Füße",
    translation: "pie",
    acceptedTranslations: ["pie", "el pie"],
    category: "Cuerpo",
    level: "A1"
  },
  {
    id: 139,
    noun: "Rücken",
    article: "der",
    plural: "Rücken",
    translation: "espalda",
    acceptedTranslations: ["espalda", "la espalda"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 140,
    noun: "Bauch",
    article: "der",
    plural: "Bäuche",
    translation: "barriga",
    acceptedTranslations: ["barriga", "vientre", "estómago", "el estómago", "panza"],
    category: "Cuerpo",
    level: "A2"
  },
  {
    id: 141,
    noun: "Herz",
    article: "das",
    plural: "Herzen",
    translation: "corazón",
    acceptedTranslations: ["corazón", "corazon", "el corazón"],
    category: "Cuerpo",
    level: "A2"
  },

  // ==========================================
  // 8. ROPA (Kleidung)
  // ==========================================
  {
    id: 142,
    noun: "Kleid",
    article: "das",
    plural: "Kleider",
    translation: "vestido",
    acceptedTranslations: ["vestido", "el vestido"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 143,
    noun: "Hose",
    article: "die",
    plural: "Hosen",
    translation: "pantalón",
    acceptedTranslations: ["pantalón", "pantalon", "el pantalón", "pantalones"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 144,
    noun: "Hemd",
    article: "das",
    plural: "Hemden",
    translation: "camisa",
    acceptedTranslations: ["camisa", "la camisa"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 145,
    noun: "T-Shirt",
    article: "das",
    plural: "T-Shirts",
    translation: "camiseta",
    acceptedTranslations: ["camiseta", "la camiseta", "remera", "playera"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 146,
    noun: "Pullover",
    article: "der",
    plural: "Pullover",
    translation: "jersey",
    acceptedTranslations: ["jersey", "el jersey", "suéter", "sueter", "chomba"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 147,
    noun: "Jacke",
    article: "die",
    plural: "Jacken",
    translation: "chaqueta",
    acceptedTranslations: ["chaqueta", "la chaqueta", "campera", "abrigo"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 148,
    noun: "Mantel",
    article: "der",
    plural: "Mäntel",
    translation: "abrigo",
    acceptedTranslations: ["abrigo", "el abrigo", "sobretodo"],
    category: "Ropa",
    level: "A2"
  },
  {
    id: 149,
    noun: "Schuh",
    article: "der",
    plural: "Schuhe",
    translation: "zapato",
    acceptedTranslations: ["zapato", "el zapato"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 150,
    noun: "Stiefel",
    article: "der",
    plural: "Stiefel",
    translation: "bota",
    acceptedTranslations: ["bota", "la bota", "botas"],
    category: "Ropa",
    level: "A2"
  },
  {
    id: 151,
    noun: "Socke",
    article: "die",
    plural: "Socken",
    translation: "calcetín",
    acceptedTranslations: ["calcetín", "calcetin", "el calcetín", "media"],
    category: "Ropa",
    level: "A2"
  },
  {
    id: 152,
    noun: "Brille",
    article: "die",
    plural: "Brillen",
    translation: "gafas",
    acceptedTranslations: ["gafas", "las gafas", "lentes", "anteojos"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 153,
    noun: "Tasche",
    article: "die",
    plural: "Taschen",
    translation: "bolso",
    acceptedTranslations: ["bolso", "bolsa", "la bolsa", "el bolso", "cartera"],
    category: "Ropa",
    level: "A1"
  },
  {
    id: 154,
    noun: "Koffer",
    article: "der",
    plural: "Koffer",
    translation: "maleta",
    acceptedTranslations: ["maleta", "la maleta", "valija"],
    category: "Ropa",
    level: "A2"
  },

  // ==========================================
  // 9. ESTUDIO Y APRENDIZAJE (Lernen & Bildung)
  // ==========================================
  {
    id: 155,
    noun: "Buch",
    article: "das",
    plural: "Bücher",
    translation: "libro",
    acceptedTranslations: ["libro", "el libro"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 156,
    noun: "Heft",
    article: "das",
    plural: "Hefte",
    translation: "cuaderno",
    acceptedTranslations: ["cuaderno", "el cuaderno", "libreta"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 157,
    noun: "Stift",
    article: "der",
    plural: "Stifte",
    translation: "bolígrafo",
    acceptedTranslations: ["bolígrafo", "boligrafo", "el bolígrafo", "pluma"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 158,
    noun: "Bleistift",
    article: "der",
    plural: "Bleistifte",
    translation: "lápiz",
    acceptedTranslations: ["lápiz", "lapiz", "el lápiz"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 159,
    noun: "Papier",
    article: "das",
    plural: "Papiere",
    translation: "papel",
    acceptedTranslations: ["papel", "el papel"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 160,
    noun: "Brief",
    article: "der",
    plural: "Briefe",
    translation: "carta",
    acceptedTranslations: ["carta", "la carta"],
    category: "Estudio",
    level: "A2"
  },
  {
    id: 161,
    noun: "E-Mail",
    article: "die",
    plural: "E-Mails",
    translation: "correo electrónico",
    acceptedTranslations: ["correo electrónico", "correo", "email", "el correo"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 162,
    noun: "Computer",
    article: "der",
    plural: "Computer",
    translation: "ordenador",
    acceptedTranslations: ["ordenador", "computadora", "computador", "el ordenador"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 163,
    noun: "Handy",
    article: "das",
    plural: "Handys",
    translation: "móvil",
    acceptedTranslations: ["móvil", "movil", "celular", "el móvil", "teléfono móvil"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 164,
    noun: "Wort",
    article: "das",
    plural: "Wörter",
    translation: "palabra",
    acceptedTranslations: ["palabra", "la palabra"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 165,
    noun: "Satz",
    article: "der",
    plural: "Sätze",
    translation: "frase",
    acceptedTranslations: ["frase", "la frase", "oración", "oracion"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 166,
    noun: "Sprache",
    article: "die",
    plural: "Sprachen",
    translation: "idioma",
    acceptedTranslations: ["idioma", "el idioma", "lengua"],
    category: "Estudio",
    level: "A1"
  },
  {
    id: 167,
    noun: "Wörterbuch",
    article: "das",
    plural: "Wörterbücher",
    translation: "diccionario",
    acceptedTranslations: ["diccionario", "el diccionario"],
    category: "Estudio",
    level: "A2"
  },
  {
    id: 168,
    noun: "Prüfung",
    article: "die",
    plural: "Prüfungen",
    translation: "examen",
    acceptedTranslations: ["examen", "el examen", "prueba"],
    category: "Estudio",
    level: "A2"
  },
  {
    id: 169,
    noun: "Hausaufgabe",
    article: "die",
    plural: "Hausaufgaben",
    translation: "tarea",
    acceptedTranslations: ["tarea", "la tarea", "deberes", "los deberes"],
    category: "Estudio",
    level: "A1"
  },

  // ==========================================
  // 10. VIDA DIARIA Y TRABAJO (Alltag & Beruf)
  // ==========================================
  {
    id: 170,
    noun: "Arbeit",
    article: "die",
    plural: "Arbeiten",
    translation: "trabajo",
    acceptedTranslations: ["trabajo", "el trabajo"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 171,
    noun: "Beruf",
    article: "der",
    plural: "Berufe",
    translation: "profesión",
    acceptedTranslations: ["profesión", "profesion", "la profesión", "oficio"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 172,
    noun: "Firma",
    article: "die",
    plural: "Firmen",
    translation: "empresa",
    acceptedTranslations: ["empresa", "la empresa", "compañía"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 173,
    noun: "Büro",
    article: "das",
    plural: "Büros",
    translation: "oficina",
    acceptedTranslations: ["oficina", "la oficina", "despacho"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 174,
    noun: "Termin",
    article: "der",
    plural: "Termine",
    translation: "cita",
    acceptedTranslations: ["cita", "la cita", "turno", "compromiso"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 175,
    noun: "Geld",
    article: "das",
    plural: "Gelder",
    translation: "dinero",
    acceptedTranslations: ["dinero", "el dinero", "plata"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 176,
    noun: "Euro",
    article: "der",
    plural: "Euros",
    translation: "euro",
    acceptedTranslations: ["euro", "el euro"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 177,
    noun: "Preis",
    article: "der",
    plural: "Preise",
    translation: "precio",
    acceptedTranslations: ["precio", "el precio"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 178,
    noun: "Zeit",
    article: "die",
    plural: "Zeiten",
    translation: "tiempo",
    acceptedTranslations: ["tiempo", "el tiempo", "hora"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 179,
    noun: "Uhr",
    article: "die",
    plural: "Uhren",
    translation: "reloj",
    acceptedTranslations: ["reloj", "el reloj", "hora"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 180,
    noun: "Stunde",
    article: "die",
    plural: "Stunden",
    translation: "hora",
    acceptedTranslations: ["hora", "la hora"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 181,
    noun: "Minute",
    article: "die",
    plural: "Minuten",
    translation: "minuto",
    acceptedTranslations: ["minuto", "el minuto"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 182,
    noun: "Tag",
    article: "der",
    plural: "Tage",
    translation: "día",
    acceptedTranslations: ["día", "dia", "el día"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 183,
    noun: "Morgen",
    article: "der",
    plural: "Morgen",
    translation: "mañana",
    acceptedTranslations: ["mañana", "la mañana"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 184,
    noun: "Abend",
    article: "der",
    plural: "Abende",
    translation: "tarde",
    acceptedTranslations: ["tarde", "la tarde", "noche", "la noche"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 185,
    noun: "Nacht",
    article: "die",
    plural: "Nächte",
    translation: "noche",
    acceptedTranslations: ["noche", "la noche"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 186,
    noun: "Woche",
    article: "die",
    plural: "Wochen",
    translation: "semana",
    acceptedTranslations: ["semana", "la semana"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 187,
    noun: "Wochenende",
    article: "das",
    plural: "Wochenenden",
    translation: "fin de semana",
    acceptedTranslations: ["fin de semana", "el fin de semana", "finde"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 188,
    noun: "Monat",
    article: "der",
    plural: "Monate",
    translation: "mes",
    acceptedTranslations: ["mes", "el mes"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 189,
    noun: "Jahr",
    article: "das",
    plural: "Jahre",
    translation: "año",
    acceptedTranslations: ["año", "ano", "el año"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 190,
    noun: "Name",
    article: "der",
    plural: "Namen",
    translation: "nombre",
    acceptedTranslations: ["nombre", "el nombre"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 191,
    noun: "Vorname",
    article: "der",
    plural: "Vornamen",
    translation: "nombre de pila",
    acceptedTranslations: ["nombre de pila", "nombre", "primer nombre"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 192,
    noun: "Nachname",
    article: "der",
    plural: "Nachnamen",
    translation: "apellido",
    acceptedTranslations: ["apellido", "el apellido"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 193,
    noun: "Adresse",
    article: "die",
    plural: "Adressen",
    translation: "dirección",
    acceptedTranslations: ["dirección", "direccion", "la dirección", "domicilio"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 194,
    noun: "Telefonnummer",
    article: "die",
    plural: "Telefonnummern",
    translation: "número de teléfono",
    acceptedTranslations: ["número de teléfono", "numero de telefono", "teléfono", "telefono"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 195,
    noun: "Frage",
    article: "die",
    plural: "Fragen",
    translation: "pregunta",
    acceptedTranslations: ["pregunta", "la pregunta"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 196,
    noun: "Antwort",
    article: "die",
    plural: "Antworten",
    translation: "respuesta",
    acceptedTranslations: ["respuesta", "la respuesta"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 197,
    noun: "Problem",
    article: "das",
    plural: "Probleme",
    translation: "problema",
    acceptedTranslations: ["problema", "el problema"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 198,
    noun: "Hilfe",
    article: "die",
    plural: "Hilfen",
    translation: "ayuda",
    acceptedTranslations: ["ayuda", "la ayuda", "auxilio"],
    category: "Vida Diaria",
    level: "A1"
  },
  {
    id: 199,
    noun: "Reise",
    article: "die",
    plural: "Reisen",
    translation: "viaje",
    acceptedTranslations: ["viaje", "el viaje"],
    category: "Vida Diaria",
    level: "A2"
  },
  {
    id: 200,
    noun: "Urlaub",
    article: "der",
    plural: "Urlaube",
    translation: "vacaciones",
    acceptedTranslations: ["vacaciones", "las vacaciones"],
    category: "Vida Diaria",
    level: "A2"
  }
];
