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
];

export default projects;
