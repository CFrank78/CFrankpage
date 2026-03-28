// gitprofile.config.ts
 
const config = {
  github: {
    username: 'CFrank78',
    sortBy: 'stars',
    limit: 10,
    exclude: {
      forks: false,
      projects: [],
    },
  },
  social: {
    linkedin: '',
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
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '',
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
    'DevOps',
    'Unity',
  ],
  experiences: [],
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
  blog: {
    source: 'dev',
    username: '',
    limit: 2,
  },
  googleAnalytics: {
    id: '',
  },
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  
  // --- SECCIÓN DE PROYECTOS ACTUALIZADA ---
  projects: {
    github: {
      display: true,
      header: 'Proyectos en GitHub',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: ['CFrank78/sistemaFacturaUsuario'], 
      },
    },
    external: {
      header: 'Más sobre mis proyectos',
      projects: [
        {
          title: 'Sistema de Facturación para Benjamín Hill',
          description:
            'Diseño y desarrollo integral de un sistema de facturación desde cero con C#. Modelado y administración de base de datos relacional en SQL Server para gestionar transacciones y clientes de manera segura.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/CFrank78/sistemaFacturaUsuario',
        },
        {
          title: 'Desarrollo de Videojuego Independiente',
          description:
            'Proyecto colaborativo. Desarrollo de mecánicas y lógica de juego utilizando C# y Unity, aplicando diseño de código orientado a objetos para un rendimiento óptimo.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: '',
        },
      ],
    },
  },
  // ----------------------------------------

  seo: {
    title: 'Portafolio de Frank | Backend Developer',
    description: 'Portafolio de desarrollo de software de Frank, estudiante de la UNISON enfocado en Backend y Bases de Datos.',
    imageURL: '',
  },
  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
      'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
      'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black',
      'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade',
      'night', 'coffee', 'winter', 'dim', 'nord', 'sunset', 'procyon',
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
