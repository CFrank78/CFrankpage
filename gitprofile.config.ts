// gitprofile.config.ts

// gitprofile.config.ts

const config = {
  github: {
    username: 'CFrank78', // Tu usuario de GitHub
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: false,
      projects: [],
    },
  },
  social: {
    linkedin: '', // Pon aquí tu usuario de LinkedIn cuando lo tengas
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // Ejemplo: '1/john-doe'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '', // Agrega tu correo electrónico aquí
  },
  resume: {
    fileUrl:
      '', // Si subes el PDF de tu Awesome CV a Google Drive, puedes pegar el link aquí
  },
  skills: [
    'C#',
    'SQL Server',
    'Java (Intermedio)',
    'Python (Básico)',
    'C++ (Básico)',
    'Desarrollo Backend',
    'Bases de Datos Relacionales',
    'Normalización de BD',
  ],
  experiences: [
    // Se deja en blanco ya que destacaremos tus proyectos académicos y personales
  ],
  certifications: [
    {
      name: 'Administración y Normalización Avanzada de Base de Datos',
      body: 'Certificado de 10 horas académicas',
      year: 'Marzo 2026',
      link: '',
    },
  ],
  educations: [
    {
      institution: 'Universidad de Sonora (UNISON)',
      degree: 'Ingeniería en Sistemas de Información',
      from: '2017',
      to: 'Presente',
    },
  ],
  publications: [],
  // Aquí agregamos los proyectos que no necesariamente están como repositorios públicos aún
  externalProjects: [
    {
      title: 'Sistema de Facturación para Benjamín Hill',
      description:
        'Proyecto académico individual. Diseño y desarrollo integral de un sistema de facturación desde cero con C#. Modelado y administración de base de datos relacional en SQL Server para gestionar transacciones y clientes de manera segura.',
      imageUrl: '',
      link: '', // Si luego subes este código a un repo público, pon el link aquí
    },
  ],
  // Configuración de SEO y tema de la página
  seo: {
    title: 'Portafolio de Frank | Backend Developer',
    description: 'Portafolio de desarrollo de software de Frank, estudiante de la UNISON enfocado en Backend y Bases de Datos.',
    imageURL: '',
  },
  socialMedia: {
    facebook: '',
    twitter: '',
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },
  footer: `Hecho con ❤️ por Frank`,
  enablePWA: true,
};

export default config;
