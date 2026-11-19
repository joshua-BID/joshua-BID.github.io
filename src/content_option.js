const logotext = "JOSH";
const meta = {
    title: "Joshua Galarza",
    description: "Sono Joshua, studente ITS ICT Piemonte e aspirante Data Engineer: trasformo dati grezzi in informazioni utili con Python, SQL e Docker."
};

const introdata = {
    title: "Ciao, sono Joshua Galarza",
    animated: {
        first: "Trasformo dati grezzi in informazioni utili",
        second: "Costruisco flussi di dati con Python e SQL",
        third: "Imparo costruendo progetti reali",
    },
    description: "Studente ITS ICT Piemonte, appassionato di dati: mi piace capire come vengono raccolti, organizzati e resi utilizzabili. Cerco uno stage in cui contribuire a progetti concreti e crescere accanto a professionisti.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // TODO: sostituisci con una tua foto
};

const dataabout = {
    title: "Un po' su di me",
    aboutme: "Vivo a Torino, in Piemonte, e studio all'ITS ICT Piemonte, dove mi sto formando su programmazione, database, cloud e Machine Learning. Il mio obiettivo è lavorare con i dati: acquisirli da fonti diverse, organizzarli in database solidi e trasformarli in informazioni chiare, come dashboard e report. Sono autodidatta per natura (corsi online su Udemy e Codecademy) e lavoro in team fin dal liceo: credo che i progetti migliori nascano dalla collaborazione e dalla voglia di imparare dagli altri.",
};

const worktimeline = [{
        jobtitle: "Progetto finale: MensaSave (analisi sprechi alimentari)",
        where: "ITS ICT Piemonte",
        date: "2026",
    },
    {
        jobtitle: "Corso: Strumenti AI e Machine Learning con Python",
        where: "ITS ICT Piemonte",
        date: "2025 - 2026",
    },
    {
        jobtitle: "Progetti di gruppo: ShowTracker e piattaforma videogiochi",
        where: "ITS ICT Piemonte",
        date: "2025 - 2026",
    },
];

const skills = [{
        name: "Python",
        value: 70,
    },
    {
        name: "SQL (MySQL)",
        value: 65,
    },
    {
        name: "pandas",
        value: 65,
    },
    {
        name: "Docker",
        value: 55,
    },
    {
        name: "JavaScript",
        value: 60,
    },
    {
        name: "MongoDB",
        value: 55,
    },
    {
        name: "scikit-learn",
        value: 50,
    },
];

const services = [{
        title: "Database e gestione dei dati",
        description: "Importazione, pulizia e organizzazione dei dati con Python e pandas, archiviazione in database relazionali (MySQL) e NoSQL (MongoDB), con ambienti riproducibili in Docker.",
    },
    {
        title: "Analisi e visualizzazione",
        description: "Dashboard interattive con Plotly e Streamlit per trasformare i numeri in informazioni chiare e utili alle decisioni.",
    },
    {
        title: "Integrazione di API, ML e AI",
        description: "Acquisizione di dati da API esterne, modelli di Machine Learning con scikit-learn e report automatici generati da LLM a partire da statistiche aggregate.",
    },
];

const dataportfolio = [{
        img: "https://raw.githubusercontent.com/joshua-BID/MensaSave/main/docs/screenshots/02_dashboard_tempo.png", // TODO: verifica che il link dell'immagine funzioni
        description: "MensaSave: analisi degli sprechi alimentari in mensa. Su 2.600 registrazioni la carne è il 24% dei kg sprecati ma il 54% del costo. Python, pandas, MySQL, Docker, scikit-learn, Streamlit. Progetto di coppia.",
        link: "https://github.com/joshua-BID/MensaSave",
    },
    {
        img: "https://picsum.photos/400/?grayscale", // TODO: sostituisci con uno screenshot di ShowTracker
        description: "ShowTracker: raccolta di dati su film e serie TV dall'API TMDb e organizzazione in una libreria personale (preferiti, liste, voti) su MongoDB. Node.js, MongoDB, API REST, JWT. Progetto di gruppo (3 persone).",
        link: "#", // TODO: link GitHub
    },
    {
        img: "https://picsum.photos/400/600/?grayscale", // TODO: sostituisci con uno screenshot della piattaforma
        description: "Piattaforma web per la gestione di videogiochi: catalogo, libreria, wishlist, classifiche e grafici. Mi sono occupato di frontend e UX (responsive, modalità daltonici, i18n). Progetto di gruppo (6 persone).",
        link: "#", // TODO: link GitHub
    },
];

const contactConfig = {
    YOUR_EMAIL: "name@domain.com", // TODO: la tua email
    YOUR_FONE: "(555)123-4567", // TODO: il tuo numero (o rimuovilo)
    description: "Cerchi un profilo motivato per uno stage sui dati? Scrivimi: rispondo volentieri a proposte, domande o semplici curiosità sui miei progetti.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    github: "https://github.com/joshua-BID",
    linkedin: "https://www.linkedin.com/in/joshua-galarza-its/", // TODO: il tuo profilo LinkedIn
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};