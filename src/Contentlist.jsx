export const firms = [
  "Krankenhaus Essen",
  "Polizei Saarland",
  "TTW",
  "Juwwi Inc.",
  "Damenstrümpfe Shop",
  "Hundesportverein",
  "C13",
  "Klaus Jakob",
  "Brauerei Ems",
  "Kirche Köln",
  "Blutspende e.V.",
  "Stadt Tübungen",
  "Stadt Blankenburg",
  "Feuerwehr Ötzingen",
  "StackOverflow",
  "Filmstudio Baden",
  "Fotostudio Rütger",
  "Autobauer Süd",
  "Schützenverein Siegburg",
  "Konditorei Wien",
  "Schnitzelhaus - Armes Schwein(vegan)",
  "Schuhputzer vom Bahnhof",
  "Kirchlicher Gangsterrap e.V",
  "Fleischerei Dahmer",
  "Kopenhagener Werft",
  "Schweizer Marine",
];

export const officeData = [
  {
    office1: {
      officeImageUrl: "./assets/office/1.jpg",
      titel: "Büro: Straßenverkäufer",
      imageTitle: "Auf der Straße",
      beschreibung:
        "Ohne Dach über dem Kopf startest du dein Unternehmen mit den einfachsten Mitteln",
      preis: 2000,
      incomemultiplikator: 1.2,
      nextOffice: "office2",
    },
  },
  {
    office2: {
      officeImageUrl: "./assets/office/2.jpg",
      titel: "Büro: Unter der Brücke",
      imageTitle: "Unter der Brücke",
      beschreibung:
        "Immerhin wirst du und dein Equipment nicht nass. Du kannst hier die ersten Meetings starten.",
      preis: 5000,
      incomemultiplikator: 1.5,
      nextOffice: "office3",
    },
  },
  {
    office3: {
      officeImageUrl: "./assets/office/3.jpg",
      titel: "Büro: Fast Food Restaurant",
      imageTitle: "Restaurant",
      beschreibung:
        "Deine ersten Einnahmen Sorgen für Kaffee und die Nutzung eines öffentlichen Internetanschlusses",
      preis: 10000,
      incomemultiplikator: 1.5,
      nextOffice: "office4",
    },
  },
  {
    office4: {
      officeImageUrl: "./assets/office/4.jpg",
      titel: "Büro: Homeoffice",
      imageTitle: "Homeoffice",
      beschreibung:
        "Warum bist du da nicht früher drauf gekommen? Einfach von zu Hause arbeiten",
      preis: 16000,
      incomemultiplikator: 1.5,
      nextOffice: "office5",
    },
  },
  {
    office5: {
      officeImageUrl: "./assets/office/5.jpg",
      titel: "Büro: Kleines Büro",
      imageTitle: "Kleines Büro",
      beschreibung: "Deine erste kleine Firmenzentrale. Glückwunsch!",
      preis: 25000,
      incomemultiplikator: 1.5,
      nextOffice: "office6",
    },
  },
  {
    office6: {
      officeImageUrl: "./assets/office/6.jpg",
      titel: "Büro: Mittleres Büro",
      imageTitle: "Mittleres Büro",
      beschreibung:
        "Jetzt verhandeln auch die Großen mit dir. Und es gibt Pizza und Kuchen für alle!",
      preis: 75000,
      incomemultiplikator: 1.5,
      nextOffice: "office7",
    },
  },
  {
    office7: {
      officeImageUrl: "./assets/office/7.webp",
      titel: "Büro: Wolkenkratzer",
      imageTitle: "Skyline",
      beschreibung:
        "Du hast es geschafft!!! Deine Firma ist das wichtigste Unternehmen weltweit!!! The Sky is the limit!",
      incomemultiplikator: 1.5,
      nextOffice: "office7",
    },
  },
];

export const workerImg = [
  {
    workerImageUrl: "./assets/worker/Hassan.png",
    name: "Hassan",
    active: true,
    hidden: false,
    cost: 0,
  },
  {
    workerImageUrl: "./assets/worker/Marius.png",
    name: "Marius",
    active: true,
    hidden: false,
    cost: 0,
  },
  {
    workerImageUrl: "./assets/worker/Katharina.png",
    name: "Katharina",
    active: false,
    hidden: false,
    extra: "startSearch",
    cost: 300,
  },
  {
    workerImageUrl: "./assets/worker/Nathaniel.png",
    name: "Nathaniel",
    active: false,
    hidden: false,
    extra: "startDevelop",
    cost: 1000,
  },
  {
    workerImageUrl: "./assets/worker/Franz.png",
    name: "Franz",
    active: false,
    hidden: false,
    cost: 3000,
  },
  {
    workerImageUrl: "./assets/worker/Dave.png",
    name: "Dave",
    active: false,
    hidden: false,
    cost: 5000,
  },
  {
    workerImageUrl: "./assets/worker/Romeo.png",
    name: "Romeo",
    active: false,
    hidden: false,
    cost: 8000,
  },
  {
    workerImageUrl: "./assets/worker/Mike.png",
    name: "Mike",
    active: false,
    hidden: false,
    cost: 10000,
  },
  {
    workerImageUrl: "./assets/worker/Cornelius.png",
    name: "Cornelius",
    active: false,
    hidden: false,
    cost: 14000,
  },
  {
    workerImageUrl: "./assets/worker/Nadia.png",
    name: "Nadia",
    active: false,
    hidden: false,
    cost: 18000,
  },
  {
    workerImageUrl: "./assets/worker/Tony.png",
    name: "Tony",
    active: false,
    hidden: false,
    cost: 22000,
  },
  {
    workerImageUrl: "./assets/worker/Christopher.png",
    name: "Christopher",
    active: false,
    hidden: false,
    cost: 30000,
  },
  {
    workerImageUrl: "./assets/worker/who.png",
    name: "Who",
    hidden: true,
  },
];

export const sounds = [
  {
    soundUrl: "./assets/sounds/howdareyou.mp3",
    name: "How dare you?",
  },
  {
    soundUrl: "./assets/sounds/ehernicht.mp3",
    name: "EherNicht",
  },
  {
    soundUrl: "./assets/sounds/worangelegen.mp3",
    name: "Woran",
  },
  {
    soundUrl: "./assets/sounds/haltstop.mp3",
    name: "HaltStop",
  },
  {
    soundUrl: "./assets/sounds/neee.mp3",
    name: "Neee",
  },
  {
    soundUrl: "./assets/sounds/jaaberauchnein.mp3",
    name: "JaAber",
  },
  {
    soundUrl: "./assets/sounds/nogod.mp3",
    name: "NoGod",
  },
  {
    soundUrl: "./assets/sounds/fatal.mp3",
    name: "Fatal",
  },
  {
    soundUrl: "./assets/sounds/computernein.mp3",
    name: "Computer",
  },
  {
    soundUrl: "./assets/sounds/ok.mp3",
    name: "Ok",
  },
];
