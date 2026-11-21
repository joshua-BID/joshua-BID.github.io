// TODO: aggiorna email e link dei progetti
export const LINK = {
  email: "name@domain.com",
  github: "https://github.com/joshua-BID",
  linkedin: "https://www.linkedin.com/in/joshua-galarza-its/",
};

// i = slug simple-icons, g = testo/glifo di riserva se l'icona non carica
export const STACK = [
  [{ n: "Python", i: "python" }, { n: "Node.js", i: "nodedotjs" }, { n: "HTML", i: "html5", g: "HTML" }, { n: "CSS", i: "css3", g: "CSS" }, { n: "JavaScript", i: "javascript" }],
  [{ n: "PostgreSQL", i: "postgresql" }, { n: "MongoDB", i: "mongodb" }, { n: "MySQL", i: "mysql" }],
  [{ n: "Docker", i: "docker" }, { n: "API REST", g: "{ }" }, { n: "Linux", i: "linux" }, { n: "Cloud", g: "☁\uFE0E" }, { n: "Networking", g: "⇄" }],
  [{ n: "Metabase", i: "metabase" }, { n: "pandas", i: "pandas" }, { n: "Streamlit", i: "streamlit" }, { n: "scikit-learn", i: "scikitlearn" }, { n: "Plotly", i: "plotly" }],
];

export const PROJ = [
  {
    name: "MensaSave", year: "2026", gh: "https://github.com/joshua-BID/MensaSave", demo: "",
    img: "https://raw.githubusercontent.com/joshua-BID/MensaSave/main/docs/screenshots/02_dashboard_tempo.png",
    stack: "Python, pandas, MySQL, Docker, scikit-learn, Streamlit",
    team: { it: "Coppia", en: "Pair", es: "Pareja" },
    desc: {
      it: "Analisi degli sprechi alimentari in mensa: su 2.600 registrazioni la carne è il 24% dei kg sprecati ma il 54% del costo.",
      en: "Food waste analysis in a canteen: across 2,600 records, meat is 24% of wasted kg but 54% of the cost.",
      es: "Análisis del desperdicio de comida en un comedor: en 2.600 registros, la carne es el 24% de los kg desperdiciados pero el 54% del coste.",
    },
  },
  {
    name: "ShowTracker", year: "2025-26", gh: "", demo: "", img: "", // TODO: link GitHub e screenshot
    stack: "Node.js, MongoDB, API REST, JWT",
    team: { it: "3 persone", en: "3 people", es: "3 personas" },
    desc: {
      it: "Dati su film e serie dall'API TMDb, organizzati in una libreria personale su MongoDB: preferiti, liste e voti.",
      en: "Movie and TV data from the TMDb API, organized into a personal library on MongoDB: favorites, lists and ratings.",
      es: "Datos de películas y series de la API de TMDb, organizados en una biblioteca personal en MongoDB: favoritos, listas y valoraciones.",
    },
  },
  {
    name: "Game Platform", year: "2025-26", gh: "", demo: "", img: "", // TODO: link GitHub e screenshot
    stack: "JavaScript, HTML, CSS",
    team: { it: "6 persone", en: "6 people", es: "6 personas" },
    desc: {
      it: "Piattaforma web per gestire videogiochi: catalogo, libreria, wishlist, classifiche e grafici. Mi sono occupato di frontend e UX (responsive, modalità daltonici, i18n).",
      en: "Web platform to manage video games: catalog, library, wishlist, rankings and charts. I handled frontend and UX (responsive, colorblind mode, i18n).",
      es: "Plataforma web para gestionar videojuegos: catálogo, biblioteca, wishlist, rankings y gráficos. Me ocupé del frontend y la UX (responsive, modo daltónicos, i18n).",
    },
  },
];

export const T = {
  it: {
    nav: ["Chi sono", "Progetti", "Stack", "Contatti"],
    role: "Aspirante Data Engineer", tag: "Trasformo dati grezzi in informazioni utili.",
    cta: ["Vedi i progetti", "Contattami"],
    aTitle: "Un po' su di me",
    about: "Vivo a Torino e studio all'ITS ICT Piemonte: programmazione, database, cloud e Machine Learning. Voglio lavorare con i dati: acquisirli da fonti diverse, organizzarli in database solidi e trasformarli in dashboard e report chiari. Sono autodidatta (Udemy, Codecademy) e credo nel lavoro di squadra.",
    tl: [["2026", "Progetto finale: MensaSave"], ["2025-26", "Corso: Strumenti AI e Machine Learning con Python"], ["2025-26", "Progetti di gruppo: ShowTracker e piattaforma videogiochi"]],
    svc: [["Database e dati", "Importazione, pulizia e organizzazione con Python e pandas; archiviazione in MySQL, PostgreSQL e MongoDB; ambienti riproducibili con Docker."], ["Analisi e visualizzazione", "Dashboard con Metabase, Plotly e Streamlit per trasformare i numeri in decisioni."], ["API, ML e AI", "Dati da API esterne, modelli con scikit-learn e report automatici generati da LLM."]],
    sTitle: "Il mio stack", layers: ["Linguaggi", "Database", "Infrastrutture e sistemi", "Dati e analisi"],
    stages: ["estrazione", "trasformazione", "caricamento", "servizio"], egg: ["fine", "Sei molto curioso/a"],
    pTitle: "Progetti", meta: ["Anno", "Team", "Stack"], soon: "Presto online",
    cTitle: "Parliamone", cText: "Cerchi un profilo motivato per uno stage sui dati? Scrivimi: rispondo volentieri a proposte e curiosità sui miei progetti.",
    btn: ["Scrivimi via email", "LinkedIn", "GitHub", "Scarica CV"],
  },
  en: {
    nav: ["About", "Projects", "Stack", "Contact"],
    role: "Aspiring Data Engineer", tag: "I turn raw data into useful information.",
    cta: ["See projects", "Get in touch"],
    aTitle: "A bit about me",
    about: "I live in Turin and study at ITS ICT Piemonte: programming, databases, cloud and Machine Learning. I want to work with data: collecting it from different sources, organizing it in solid databases and turning it into clear dashboards and reports. I'm self-taught (Udemy, Codecademy) and believe in teamwork.",
    tl: [["2026", "Final project: MensaSave"], ["2025-26", "Course: AI and Machine Learning tools with Python"], ["2025-26", "Group projects: ShowTracker and a video game platform"]],
    svc: [["Databases and data", "Import, cleaning and organization with Python and pandas; storage in MySQL, PostgreSQL and MongoDB; reproducible environments with Docker."], ["Analysis and visualization", "Dashboards with Metabase, Plotly and Streamlit that turn numbers into decisions."], ["APIs, ML and AI", "Data from external APIs, scikit-learn models and automatic LLM-generated reports."]],
    sTitle: "My stack", layers: ["Languages", "Databases", "Infrastructure and systems", "Data and analytics"],
    stages: ["extract", "transform", "load", "serve"], egg: ["the end", "You are very curious"],
    pTitle: "Projects", meta: ["Year", "Team", "Stack"], soon: "Coming soon",
    cTitle: "Let's talk", cText: "Looking for a motivated profile for a data internship? Write to me: I'm happy to hear about proposals or questions on my projects.",
    btn: ["Send me an email", "LinkedIn", "GitHub", "Download CV"],
  },
  es: {
    nav: ["Sobre mí", "Proyectos", "Stack", "Contacto"],
    role: "Aspirante a Data Engineer", tag: "Transformo datos en bruto en información útil.",
    cta: ["Ver proyectos", "Contáctame"],
    aTitle: "Un poco sobre mí",
    about: "Vivo en Turín y estudio en ITS ICT Piemonte: programación, bases de datos, cloud y Machine Learning. Quiero trabajar con datos: obtenerlos de fuentes distintas, organizarlos en bases de datos sólidas y convertirlos en dashboards e informes claros. Soy autodidacta (Udemy, Codecademy) y creo en el trabajo en equipo.",
    tl: [["2026", "Proyecto final: MensaSave"], ["2025-26", "Curso: Herramientas de IA y Machine Learning con Python"], ["2025-26", "Proyectos en grupo: ShowTracker y plataforma de videojuegos"]],
    svc: [["Bases de datos y datos", "Importación, limpieza y organización con Python y pandas; almacenamiento en MySQL, PostgreSQL y MongoDB; entornos reproducibles con Docker."], ["Análisis y visualización", "Dashboards con Metabase, Plotly y Streamlit para convertir números en decisiones."], ["API, ML e IA", "Datos de APIs externas, modelos con scikit-learn e informes automáticos generados por LLM."]],
    sTitle: "Mi stack", layers: ["Lenguajes", "Bases de datos", "Infraestructura y sistemas", "Datos y análisis"],
    stages: ["extracción", "transformación", "carga", "servicio"], egg: ["fin", "Eres muy curioso/a"],
    pTitle: "Proyectos", meta: ["Año", "Equipo", "Stack"], soon: "Próximamente",
    cTitle: "Hablemos", cText: "¿Buscas un perfil motivado para unas prácticas con datos? Escríbeme: respondo encantado a propuestas y dudas sobre mis proyectos.",
    btn: ["Escríbeme por email", "LinkedIn", "GitHub", "Descargar CV"],
  },
};
