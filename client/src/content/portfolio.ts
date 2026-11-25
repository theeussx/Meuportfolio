export const identity = {
  name: "Mateus Henrique",
  brand: "Theeussx",
  email: "mateushenrique6968@gmail.com",
  website: "https://theeussx.vercel.app",
  github: "https://github.com/theeussx",
  instagram: "https://instagram.com/theeussx_",
} as const;

export const navigation = ["projetos", "servicos", "sobre"] as const;

export const serviceIds = [
  "web",
  "systems",
  "automation",
  "modernization",
] as const;
export type ServiceId = (typeof serviceIds)[number];
export type Language = "br" | "en";

export const languages = {
  br: {
    locale: "BR",
    skip: "Pular para o conteúdo",
    navLabel: "Navegação principal",
    menu: "Menu",
    nav: { projetos: "Projetos", servicos: "Serviços", sobre: "Sobre" },
    contact: "Contato",
    language: "BR · Mudar idioma para inglês",
    theme: "Tema escuro",
    location: "Pernambuco, Brasil",
    role: "Desenvolvedor web e automações",
    heroHeading: ["Sites, sistemas", "e automações."],
    heroSummary:
      "Sou Mateus Henrique. Desenvolvo interfaces e ferramentas para tornar tarefas do dia a dia mais simples.",
    explore: "Explorar projetos",
    talk: "Vamos conversar",
    heroTalk: "Conversar",
    selected: "Projetos selecionados",
    workTitle: "Do código à interface.",
    workIntro:
      "Três projetos que exploram infraestrutura móvel, ferramentas para Android e ensino interativo.",
    caseStudy: "Ler estudo de caso",
    contribution: "Minha contribuição",
    context: "Contexto",
    features: "Funcionalidades",
    source: "Código-fonte",
    gallery: "Galeria de capturas",
    previous: "Captura anterior",
    next: "Próxima captura",
    openImage: "Abrir captura em tamanho real",
    links: {
      live: "Ver demonstração",
      docs: "Documentação",
      download: "Versões",
      source: "Código-fonte",
    },
    servicesLabel: "Serviços",
    servicesTitle: "O que posso construir com você.",
    servicesIntro:
      "Do primeiro site à integração entre ferramentas, o escopo parte da rotina do seu projeto.",
    services: {
      web: {
        title: "Desenvolvimento web",
        description:
          "Sites institucionais, landing pages e catálogos que apresentam o seu negócio com clareza e funcionam bem no celular.",
      },
      systems: {
        title: "Sistemas e aplicações",
        description:
          "Painéis e aplicações web para reunir informações, acompanhar tarefas e integrar as ferramentas que sua equipe já usa.",
      },
      automation: {
        title: "Automações",
        description:
          "Scripts, integrações e bots para tirar tarefas repetitivas da rotina e conectar serviços que hoje funcionam separados.",
      },
      modernization: {
        title: "Modernização digital",
        description:
          "Redesign, melhorias de desempenho e ajustes para celular em sites que precisam evoluir.",
      },
    },
    request: "Solicitar orçamento",
    quoteShort: "Orçamento",
    processLabel: "Como trabalho",
    process: [
      "Entendimento",
      "Planejamento",
      "Desenvolvimento",
      "Validação",
      "Entrega",
    ],
    skillsTitle: "Ferramentas na prática.",
    skills: [
      {
        title: "Front-end",
        tools: "HTML · CSS · React · TypeScript · Tailwind CSS",
        use: "Interfaces responsivas e experiências interativas.",
      },
      {
        title: "Back-end",
        tools: "Node.js · Express · APIs REST",
        use: "APIs e fluxos de dados para painéis e aplicações.",
      },
      {
        title: "Bancos de dados",
        tools: "SQL · MySQL",
        use: "Modelagem relacional e persistência de dados.",
      },
      {
        title: "Automações",
        tools: "Shell · Bash · ADB",
        use: "Scripts e rotinas de gerenciamento de dispositivos Android.",
      },
      {
        title: "Infraestrutura",
        tools: "Linux · Docker · Termux",
        use: "Ambientes de desenvolvimento, containers e hospedagem pessoal.",
      },
      {
        title: "Ferramentas",
        tools: "Git · GitHub · Vite",
        use: "Versionamento, publicação de código e builds.",
      },
    ],
    openTitle: "Código aberto",
    openCopy:
      "Nos meus repositórios públicos, você pode acompanhar commits, consultar a documentação e explorar as versões disponíveis.",
    openActivity: "Ver contribuições no GitHub",
    profile: "Perfil no GitHub",
    aboutLabel: "Sobre mim",
    aboutTitle: "Prazer, Mateus.",
    about: [
      "Sou um desenvolvedor de Pernambuco/Várzea e comecei a programar pelo celular, usando Termux. O que começou como um jeito de estudar com as ferramentas que eu tinha virou interesse por Linux, automações e desenvolvimento web.",
      "Gosto de entender como cada parte de um sistema funciona e cuidar de como as pessoas usam a interface. Hoje exploro essas duas frentes em projetos pessoais e de código aberto, entre Android, Linux e a web.",
      "Tenho interesse em projetos freelance, oportunidades profissionais e em colaborar com quem está construindo produtos úteis.",
    ],
    credentials: "Formação e certificados",
    viewDocument: "Ver certificado",
    certificates: [
      { title: "Programador Web", date: "Jan a jul de 2026 · 200 horas" },
      { title: "32ª SBPC Jovem", date: "14 a 19 de julho de 2025" },
    ],
    contactLabel: "Orçamento e contato",
    contactTitle: ["Conte sobre", "seu projeto."],
    contactCopy:
      "Descreva o que você precisa e em que etapa está. Uso essas informações para entender o escopo e conversar sobre prazo, investimento e próximos passos.",
    contactFallback: "Para vagas e parcerias, escreva diretamente.",
    emailCopy: "Copiar endereço de e-mail",
    footerLabel: "Navegação do rodapé",
    rights: "Todos os direitos reservados.",
    privacy: "Privacidade",
    top: "Voltar ao topo",
    notFound: "Página não encontrada",
    backHome: "Voltar ao portfólio",
  },
  en: {
    locale: "en",
    skip: "Skip to content",
    navLabel: "Main navigation",
    menu: "Menu",
    nav: { projetos: "Work", servicos: "Services", sobre: "About" },
    contact: "Contact",
    language: "EN · Switch language to Portuguese",
    theme: "Dark mode",
    location: "Pernambuco, Brazil",
    role: "Web & automation developer",
    heroHeading: ["Websites, apps", "and automation."],
    heroSummary:
      "I’m Mateus Henrique. I build interfaces and tools that make everyday tasks simpler.",
    explore: "Explore my work",
    talk: "Let’s talk",
    heroTalk: "Let’s talk",
    selected: "Selected work",
    workTitle: "From code to interface.",
    workIntro:
      "Three projects exploring mobile infrastructure, Android tooling, and interactive learning.",
    caseStudy: "Read the case study",
    contribution: "My contribution",
    context: "Context",
    features: "Features",
    source: "Source code",
    gallery: "Screenshot gallery",
    previous: "Previous screenshot",
    next: "Next screenshot",
    openImage: "Open full-size screenshot",
    links: {
      live: "View demo",
      docs: "Documentation",
      download: "Releases",
      source: "Source code",
    },
    servicesLabel: "Services",
    servicesTitle: "What we can build together.",
    servicesIntro:
      "From a first website to connecting existing tools, the scope starts with how you work.",
    services: {
      web: {
        title: "Web development",
        description:
          "Business websites, landing pages, and catalogs that make your offering clear and work well on mobile.",
      },
      systems: {
        title: "Systems and applications",
        description:
          "Dashboards and web applications that bring information together, track tasks, and connect the tools your team already uses.",
      },
      automation: {
        title: "Automation",
        description:
          "Scripts, integrations, and bots that cut repetitive work and connect services that currently operate separately.",
      },
      modernization: {
        title: "Website modernization",
        description:
          "Redesigns, performance improvements, and mobile refinements for websites that need to evolve.",
      },
    },
    request: "Request a quote",
    quoteShort: "Get a quote",
    processLabel: "How I work",
    process: ["Discovery", "Planning", "Development", "Review", "Delivery"],
    skillsTitle: "Tools in practice.",
    skills: [
      {
        title: "Front end",
        tools: "HTML · CSS · React · TypeScript · Tailwind CSS",
        use: "Responsive interfaces and interactive experiences.",
      },
      {
        title: "Back end",
        tools: "Node.js · Express · REST APIs",
        use: "APIs and data flows for dashboards and applications.",
      },
      {
        title: "Databases",
        tools: "SQL · MySQL",
        use: "Relational modeling and persistent data.",
      },
      {
        title: "Automation",
        tools: "Shell · Bash · ADB",
        use: "Scripts and workflows for managing Android devices.",
      },
      {
        title: "Infrastructure",
        tools: "Linux · Docker · Termux",
        use: "Development environments, containers, and personal hosting.",
      },
      {
        title: "Developer tools",
        tools: "Git · GitHub · Vite",
        use: "Version control, publishing code, and builds.",
      },
    ],
    openTitle: "Open source",
    openCopy:
      "My public repositories have the commit history, documentation, and available releases.",
    openActivity: "View GitHub contributions",
    profile: "GitHub profile",
    aboutLabel: "About me",
    aboutTitle: "Hi, I’m Mateus.",
    about: [
      "I’m a developer from Pernambuco, Brazil. I started coding on my phone with Termux. Using the tools I had to learn sparked my interest in Linux, automation, and web development.",
      "I enjoy understanding how a system works and paying attention to how people use its interface. I explore both sides through personal and open-source projects across Android, Linux, and the web.",
      "I’m interested in freelance projects, job opportunities, and collaborating with people building useful products.",
    ],
    credentials: "Education and certificates",
    viewDocument: "View certificate",
    certificates: [
      { title: "Web Programming", date: "Jan to Jul 2026 · 200 hours" },
      { title: "32nd SBPC Jovem", date: "Jul 14–19, 2025" },
    ],
    contactLabel: "Quotes and contact",
    contactTitle: ["Tell me about", "your project."],
    contactCopy:
      "Tell me what you need and where you are in the process. I’ll use that to understand the scope and discuss timing, budget, and next steps.",
    contactFallback: "For jobs and partnerships, email me directly.",
    emailCopy: "Copy email address",
    footerLabel: "Footer navigation",
    rights: "All rights reserved.",
    privacy: "Privacy",
    top: "Back to top",
    notFound: "Page not found",
    backHome: "Back to the portfolio",
  },
} as const;

export const certificates = [
  {
    issuer: "IFRS",
    logo: "/images/IFRSLogo.png",
    document: "/images/Programador_Web.pdf",
    format: "PDF",
  },
  {
    issuer: "SBPC · UFRPE",
    logo: "/images/SBPCLogo.png",
    document: "/images/SBPC.png",
    format: "PNG",
  },
] as const;
