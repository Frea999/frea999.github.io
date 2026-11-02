const projects = [
  {
    slug: "lillero-webapp",
    title: "Lillero Webapp",
    year: "2026",
    summary: "En app til forældre der har børn med type-1 diabetes",
    description:
      "Lillero er en webapp lavet til telefonen, som er designet til at hjælpe forældre med at holde styr på deres barns diabetesbehandling. I appen er der funktioner som en kulhdrattæller, et fællesskab og adgang til generel viden. I projektet er der arbejdet med supabase til database og react til frontend.",
    tags: ["React", "Vite", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}wireframe-billede.png`,
    links: [
      {
        label: "Live site",
        href: "https://line-jpg.github.io/lillero-webapp/",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/Frea999/lillero-webapp",
      },
    ],
  },
  {
    slug: "uniquelyher",
    title: "Uniquely Her",
    year: "2026",
    summary:
      "En webshop til handel af tøj og accessories, med fokus på inklusion og diversitet",
    description:
      "En webshop til handel af tøj og accessories, med fokus på inklusion og diversitet. I projektet er der arbejdet med design, frontend og proces. Projektet er lavet i Figma og React.",
    tags: ["Design", "Frontend", "Proces"],
    image: `${import.meta.env.BASE_URL}webshop-billede.png`,
    links: [
      {
        label: "github repo",
        href: "https://github.com/CilleMDU/customer-experience-design-exam",
      },
      {
        label: "live site",
        href: "https://cillemdu.github.io/customer-experience-design-exam/",
      },
    ],
  },
   {
    slug: "mellemrum",
    title: "Mellemrun - Code optimization",
    year: "2026",
    summary:
      "Case lavet med fokus på af kode. Projektet er lavet i React.",
    tags: ["Code", "Frontend", "React"],
    image: `${import.meta.env.BASE_URL}mellemrum-case1.png`,
    sections: [
      {
        heading: "Beskrivelse",
        text: "Mellemrum er en hjemmeside der giver et overblik over events i byen Århus. til opgaven fik jeg en prototype af noget kode tildelt, som jeg skulle optimere så siden nemmere og vedligeholdelse og bedre for tilgængelighed.",
      },
      {
        heading: "Undersøgelse",
        text: "Da jeg kiggede koden igennem, var det mest med tilgængelighed i hovedet. Derfor var det første og vigtigste at man kunne bruge tabulator for at gennem siden, og at oplæseren virkede overalt. \nUdover det er der ting som UI-states, ændrer sproget i index.html og aria labels også spiller en rolle.\nUdover det så skulle tilmelding flowet for brugerne også virker med supabase. \nAlle de ting, som er optimeret, er udarbejdet i en teknisk audit, og rangeret efter priotering.",
        image: `${import.meta.env.BASE_URL}mellemrum-audit.png`,
      },
      {
        heading: "optimering af koden",
        text: "Jeg startede med at sørge for at tabulator virkede gennem hele siden. Det gjorde jeg ved at lave en pageheader for at gøre focus bedre. \nNæste var at tilføje ARIA label på email, så det fungerer med oplæseren i stedet for at den bare ser “input”.\nJeg opdagede også at i index.html at sproget var sat til engelsk, det gør at læseren næsten ikke fungerer på dansk side. Så det rettet jeg fra “en” til “da”\nOplæseren havde også svært ved  \"læs mere” knappen på events, da der stod det samme. Så jeg gjorde så den sagde “læs mere om (eventid)”. \nTilmeldingsflow er sat op med SQL inde i supabase. Der er også en besked efter man har tilmeldt sig, så brugeren ved at det virkede. Inde på /tilmeldinger kan man også se alle tilmeldingerne. \nDet sidste jeg tilføjede var UI states, til loading osv sådan det ikke bare er en hvid skærm når for eksempel internettet er langsomt.",
        image: `${import.meta.env.BASE_URL}mellemrum-tilmeldinger.png`,
      },
      {
        heading: "Reflektion",
        text: "Min løsning gør siden bedre i forhold til acessibility, ved at mange af de problemer der var med den er fikset. \nHvis jeg skulle arbejde videre med projektet, er der andre ting jeg ville kigge på, som for eksempel at man kan klikke på hele event cardet og ikke bare “læs mere” knappen. \nJeg vil også arbejde på at få performance til at være bedre på mobil, da den kun fik 80-85 i performance fra lighthouse, i modsætning til desktop som fik 91-97.",
        image: `${import.meta.env.BASE_URL}mellemrum-lighthouse.png`,
      },
    ],
    links: [
      {
        label: "github repo",
        href: "https://github.com/Frea999/mellemrum-case1",
      },
      {
        label: "live site",
        href: "https://frea999.github.io/mellemrum-case1/",
      },
    ],
  },
     {
    slug: "vuuh",
    title: "Vuuh - Onboarding",
    year: "2026",
    summary:
      "Et projekt med fokus på at optimere onboarding processen for brugere. Projektet er lavet i Figma.",
    tags: ["Design", "User flow", "Onboarding"],
    image: `${import.meta.env.BASE_URL}vuuh-onboarding.png`,
    sections: [
      {
        heading: "Beskrivelse",
        text: "Vuuh er en shopify extension, som hjælper med at connect shopify til et webstore. Appen er egnet til dem der måske har en enkelt butik, og ikke er vant til at arbejde med online butikker og shopify. Vores opgave gik ud på at bygge dem en onboarding proces, som kunne hjælpe brugeren med at forstå hvordan man bruger app'en og forbinder til shopify.",
        image: `${import.meta.env.BASE_URL}vuuh-onboarding.png`,
      },
      {
        heading: "Research",
        text: "I vores research startede vi med at kigge på bruger flowet når man  kommer ind på vuuh. \nTil det brugte vi heruistiske evalueringer og finding cards med prioriteringer på, hvad der var vigtigst. \nDet vi kom frem til var vigtigst er at man kan connect til shopify hurtigt og nemt. Det var meget forvirrende med det bruger flow der var i forvejen.\nVi fandt også at der manglede succesbeskeder og bekræftelse når brugeren gør noget, som er rigtigt. Det er vigtigt for vuuh, fordi det er en extension hvor målgruppen typisk er lidt ikke teknologiske.",
        image: `${import.meta.env.BASE_URL}vuuh-finding-card.png`,
      },
      {
        heading: "optimeringer",
        text: "Den første optimering vi lavet var at kigge på at lave en modal med en wizard, hvor den viser små videoer inden man kommer ind på siden, med hvordan man forbinder til shopify. Det valgte vi fordi at så bliver brugeren ikke overvældet inden de overhovedet er kommet ind på deres dashboard. \nDet næste var selve vejen til at connecte til Shopify. Vi flyttede rundt på hvor nogle af tingene lå, så det altid var enten forrest eller øverst på siden. \nVi tilføjede også succesbeskeder steder på siden, så brugeren altid vidste, om det de gjorde er korrekt, og de er på vej i den rigtige retning.",
        image: `${import.meta.env.BASE_URL}vuuh-shopify-flow.png`,
      },
      {
        heading: "Reflektion",
        text: "Jeg vil sige at de findings vi havde, blev godt løst. Man lærte undervejs at tænke som om man er målgruppen, når man træf valg og forstå deres behov. \nHvis vi havde mere tid, så vil jeg nok gerne have arbejdet mere med nogle af deres andre sektioner, for eksempel ordre sektionen. Den er meget forvirrende og forstå, og jeg tror hvis der var mere arbejde på den vil den også blive meget bedre.",
        image: `${import.meta.env.BASE_URL}vuuh-fokus-fremadrettet.png`,
      },
    ],
    links: [
      {
        label: "UX Audit",
        href: "https://www.figma.com/design/gyLtcPLHRLcjOeT8V9AzDI/vuuh---designfil?node-id=71-21&t=a7w9I3T3DnUZz8Iq-1",
      },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/gyLtcPLHRLcjOeT8V9AzDI/vuuh---designfil?node-id=107-26&viewport=476%2C275%2C0.05&t=ccZpOGzkDKXEOnUL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=107%3A26&page-id=87%3A21",
      },
    ],
  },
       {
    slug: "larouge",
    title: "La rouge heritage - design",
    year: "2026",
    summary:
      "Et designprojekt for at skabe en stærkere brandidentitet. Arbejdet med designsystem og branding. ",
    tags: ["Design", "Designsystem", "Branding"],
    image: `${import.meta.env.BASE_URL}la-rouge-billede.png`,
    sections: [
      {
        heading: "Beskrivelse",
        text: "Vi fik en case fra la rouge om at lave et subbrand til dem hvor de kunne sælge deres tøj second hand. Det fungerede ved at kunden kunne sende sit gamle la rouge tøj ind til dem, og få et beløb tilbage, som kan bruges hos la rouge.",
      },
      {
        heading: "Informationssøgning",
        text: "Vi startede med at kigge La Rouges sociale medier og deres egen hjemmeside igennem for at få en god forståelse af, hvad deres brand identitet er, samt hvem deres målgruppe er. \nI det fandt vi at deres målgruppe er kvinder i en målgruppe omkring de 40 år. \nDesværre ligger den målgruppe lidt ude for second hand shopping, så vi valgte til vores sub-brand at appellere til en yngre målgruppe.",
        image: `${import.meta.env.BASE_URL}larouge-spejl.png`,
      },
      {
        heading: "Subbrand oprettelse",
        text: "Navnet på vores subbrand er la rouge heritage. Til vores underbrand lavet vi et nyt logo, som stadig bevarede identiteten af det gamle, men havde lidt “edge” ved sig i form af “heritage” skrevet over det med rød skrift. \nI vores design valgte vi at det skulle være mere rebelsk, med flere farver og brug af ikke perfekte omrids til tekst og ikoner. \nVi blev også hurtigt enige om at det skulle være så nemt som muligt at kunne sende sit tøj tilbage til la rouge second hand shoppen, for at skabe mindst mulig kognitiv friktion hos brugeren.",
        image: `${import.meta.env.BASE_URL}larouge-heritage-logo.svg`,
        imageBackground: "#4f1830",
      },
      {
        heading: "refleksion",
        text: "Efter at have arbejdet med projektet har jeg lært om hvad udfordringen ved at arbejde med et sub-brand kan bestå af. \nDet er udfordringer, som at tænke over hvor meget væk man kan gå fra brandets oprindelige identitet og målgruppe.\nI vores tilfælde lavede vi noget tæt op af la rouge, men man kunne for eksempel have lavet et sub brand, som overhovedet ikke mindede om det oprindelige brand.",
        image: `${import.meta.env.BASE_URL}larouge-shop.png`,
      },
    ],
    links: [
      {
        label: "Brand deck",
        href: "https://www.figma.com/design/2bQlhqwMLnF2UnpVcmpyxg/La-Rouge-Heritage?node-id=211-1206&t=W284wiHU2TffaWoB-1",
      },
      {
        label: "Figma prototype",
        href: "https://www.figma.com/proto/2bQlhqwMLnF2UnpVcmpyxg/La-Rouge-Heritage?node-id=195-204&viewport=574%2C347%2C0.18&t=bo0bGP7MVfrqXtMA-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=195%3A204&page-id=195%3A203",
      },
    ],
  },
];


export default projects;
