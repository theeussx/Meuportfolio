import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "pt" | "en";

const translations = {
  pt: {
    hero: {
      role: "Desenvolvedor back-end",
      description:
        "Gosto de desenvolver sistemas automatizados e interfaces fluidas. Sempre estudando novas tecnologias e criando projetos úteis para o dia a dia.",
      projects: "Ver Projetos →",
      contact: "Entre em Contato",
      switchLanguage: "Mudar idioma para inglês",
    },
    projects: {
      title: "Projetos em Destaque",
      description:
        "Alguns dos meus trabalhos mais recentes que demonstram minhas habilidades em desenvolvimento web, automação e soluções criativas.",
      items: [
        {
          title: "Site feira de matemática AR",
          description:
            "Um projeto educativo interativo que demonstra como a Realidade Aumentada funciona através de sensores, matemática e cálculos espaciais em tempo real.",
        },
        {
          title: "Pterodroid",
          description:
            "O Pterodroid é um painel de hospedagem pessoal, concebido com a inspiração do Pterodactyl, mas meticulosamente adaptado para operar em ambientes móveis.",
        },
        {
          title: "Zittodb",
          description:
            "Projeto desenvolvido para quem usa adb e deseja uma interface gráfica para gerenciar seus dispositivos Android com Linux. Com ele, você pode visualizar informações do dispositivo, instalar aplicativos, executar comandos adb e muito mais.",
        },
      ],
      allProjects: "Ver Todos os Projetos no GitHub →",
    },
    technologies: {
      title: "Ferramentas que utilizo nos meus projetos",
      description: "Tecnologias que fazem parte dos meus projetos.",
      categories: { all: "Todas", frontend: "Frontend", backend: "Backend", tools: "Ferramentas" },
      empty: "Nenhuma tecnologia nesta categoria no momento.",
      stats: ["Tecnologias", "Projetos", "Anos de experiência", "Clientes"],
      descriptions: [
        "Estrutura semântica e acessível para web",
        "Estilos modernos, animações e layouts responsivos",
        "Lógica interativa e manipulação de DOM",
        "Tipagem segura e melhor experiência de desenvolvimento",
        "Interfaces dinâmicas e componentes reutilizáveis",
        "Estilização rápida com utility-first CSS",
        "Runtime JavaScript para backend ágil",
        "Linguagem usada também no desenvolvimento back-end com Node.js",
        "JavaScript com tipagem estática para aplicações back-end",
        "Banco de dados relacional estruturado",
        "Framework web minimalista e flexível",
        "Controle de versão e colaboração",
        "Ambiente Linux no Android para scripts",
        "Integração e comunicação entre serviços",
        "Containers para empacotar e executar aplicações",
        "Ambiente para servidores, containers e automações",
        "Scripts e automações de linha de comando",
      ],
    },
    certificates: {
      title: "Certificações & Credenciais",
      description:
        "Certificações que comprovam meu comprometimento com o aprendizado contínuo e excelência profissional.",
      categories: { all: "Todos", web: "Desenvolvimento Web", events: "Eventos" },
      empty: "Nenhum certificado nesta categoria no momento.",
      stats: ["Certificados", "Categorias", "Horas de estudo", "Plataformas"],
      items: [
        {
          title: "Certificado em Programador Web",
          date: "25/01 a 25/07 - 2026",
          description: "Certificado em desenvolvimento web com HTML, CSS, JavaScript e MySQL",
        },
        {
          title: "SBPC JOVEM 77º",
          date: "14 a 19 de julho - 2025",
          description: "Participação e aprovação da feira de ciências SBPC JOVEM na UFRPE.",
        },
      ],
      categoryLabels: {
        web: "Desenvolvimento Web",
        backend: "Backend",
        tools: "Ferramentas",
        eventos: "Eventos",
      },
      viewCertificate: "Ver Certificado",
    },
    about: {
      title: "Sobre Mim",
      subtitle: "Conheça um pouco sobre quem sou.",
      paragraphs: [
        "Sou um jovem desenvolvedor Back-end especializado em automações, infraestrutura e gerenciamento de servidores.",
        "Crio APIs, painéis web e sistemas que simplificam tarefas complexas. Tenho forte interesse em Linux e containers, sempre focado em ferramentas que unem alta performance e escalabilidade.",
        "Busco sempre evoluir aprendendo novas tecnologias para criar soluções eficientes, que entreguem uma ótima experiência de uso e façam a diferença para pequenas empresas e usuários.",
      ],
      contact: "Vamos Conversar →",
      highlights: [
        {
          title: "Desenvolvimento Responsivo",
          description: "Adapto projetos para funcionar perfeitamente em celulares e desktops",
        },
        {
          title: "Lógica em JavaScript",
          description: "Da lógica básica até manipulação de dados e automações",
        },
        {
          title: "Banco de Dados",
          description: "Experiência com MySQL e organização de dados estruturados",
        },
        {
          title: "Trabalho Remoto",
          description:
            "Ganho dinheiro desenvolvendo sistemas de gerenciamento e automações para pequenas empresas.",
        },
        {
          title: "Infraestrutura e Servidores",
          description:
            "Experiência com Linux, docker, vps, desenvolvimento back-end, containers e automações.",
        },
        {
          title: "Visão de Futuro",
          description:
            "Meu objetivo é desenvolver sistemas úteis e eficientes, que facilitem a vida das pessoas e empresas.",
        },
      ],
    },
    contact: {
      title: "Entre em Contato",
      description:
        "Estou sempre aberto a novas oportunidades de projetos. Vamos conversar sobre sua ideia e colocar em prática!",
      send: "Enviar",
      ready: "Pronto para começar?",
      invitation:
        "Tenho interesse em trabalhos freelance, projetos em equipe, sistemas para empresas e oportunidades de aprendizado. Sinta-se à vontade para entrar em contato!",
      sendEmail: "Enviar Email →",
    },
    footer: {
      role: "Desenvolvedor back-end criando sistemas automatizados.",
      quickLinks: "Links Rápidos",
      projects: "Projetos",
      technologies: "Tecnologias",
      about: "Sobre",
      contact: "Contato",
      social: "Redes Sociais",
      copyright: "Mateus todos os direitos reservados.",
      madeWith: "Desenvolvido com",
      byMe: "por mim mesmo.",
    },
    notFound: {
      title: "Página Não Encontrada",
      message: "Desculpe, a página que você procura não existe.",
      details: "Ela pode ter sido movida ou removida.",
      home: "Voltar ao Início",
    },
  },
  en: {
    hero: {
      role: "Back-end Developer",
      description:
        "I enjoy building automated systems and smooth interfaces. I am always learning new technologies and creating useful projects for everyday life.",
      projects: "View Projects →",
      contact: "Get in Touch",
      switchLanguage: "Switch language to Portuguese",
    },
    projects: {
      title: "Featured Projects",
      description:
        "Some of my latest work, showcasing my skills in web development, automation, and creative solutions.",
      items: [
        {
          title: "AR Mathematics Fair Website",
          description:
            "An interactive educational project that demonstrates how Augmented Reality works through sensors, mathematics, and real-time spatial calculations.",
        },
        {
          title: "Pterodroid",
          description:
            "Pterodroid is a personal hosting panel inspired by Pterodactyl, carefully adapted to work in mobile environments.",
        },
        {
          title: "Zittodb",
          description:
            "A project for adb users who want a graphical interface to manage Android devices with Linux. View device information, install apps, run adb commands, and more.",
        },
      ],
      allProjects: "View All Projects on GitHub →",
    },
    technologies: {
      title: "Tools I Use in My Projects",
      description: "Technologies that are part of my projects.",
      categories: { all: "All", frontend: "Frontend", backend: "Backend", tools: "Tools" },
      empty: "There are no technologies in this category right now.",
      stats: ["Technologies", "Projects", "Years of experience", "Clients"],
      descriptions: [
        "Accessible, semantic structure for the web",
        "Modern styles, animations, and responsive layouts",
        "Interactive logic and DOM manipulation",
        "Type safety and a better development experience",
        "Dynamic interfaces and reusable components",
        "Fast styling with utility-first CSS",
        "JavaScript runtime for agile back-end development",
        "Also used for back-end development with Node.js",
        "Statically typed JavaScript for back-end applications",
        "Structured relational database",
        "Minimal and flexible web framework",
        "Version control and collaboration",
        "Linux environment on Android for scripts",
        "Integration and communication between services",
        "Containers for packaging and running applications",
        "Environment for servers, containers, and automation",
        "Command-line scripts and automation",
      ],
    },
    certificates: {
      title: "Certificates & Credentials",
      description:
        "Certificates that demonstrate my commitment to continuous learning and professional excellence.",
      categories: { all: "All", web: "Web Development", events: "Events" },
      empty: "There are no certificates in this category right now.",
      stats: ["Certificates", "Categories", "Study Hours", "Platforms"],
      items: [
        {
          title: "Web Developer Certificate",
          date: "January 25 to July 25, 2026",
          description: "Certificate in web development with HTML, CSS, JavaScript, and MySQL",
        },
        {
          title: "SBPC JOVEM 77th",
          date: "July 14–19, 2025",
          description: "Participation and approval at the SBPC JOVEM science fair at UFRPE.",
        },
      ],
      categoryLabels: {
        web: "Web Development",
        backend: "Backend",
        tools: "Tools",
        eventos: "Events",
      },
      viewCertificate: "View Certificate",
    },
    about: {
      title: "About Me",
      subtitle: "Get to know a little about me.",
      paragraphs: [
        "I am a young back-end developer specializing in automation, infrastructure, and server management.",
        "I build APIs, web dashboards, and systems that simplify complex tasks. I am especially interested in Linux and containers, focusing on tools that combine high performance and scalability.",
        "I am always learning new technologies to create efficient solutions that provide a great user experience and make a difference for small businesses and their users.",
      ],
      contact: "Let's Talk →",
      highlights: [
        {
          title: "Responsive Development",
          description: "I adapt projects to work seamlessly on phones and desktops",
        },
        {
          title: "JavaScript Logic",
          description: "From basic logic to data manipulation and automation",
        },
        {
          title: "Database",
          description: "Experience with MySQL and structured data organization",
        },
        {
          title: "Remote Work",
          description:
            "I earn money by developing management systems and automation for small businesses.",
        },
        {
          title: "Infrastructure & Servers",
          description:
            "Experience with Linux, Docker, VPS, back-end development, containers, and automation.",
        },
        {
          title: "Future Vision",
          description:
            "My goal is to build useful, efficient systems that make life easier for people and businesses.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      description:
        "I am always open to new project opportunities. Let's discuss your idea and bring it to life!",
      send: "Send",
      ready: "Ready to get started?",
      invitation:
        "I am interested in freelance work, team projects, business systems, and learning opportunities. Feel free to get in touch!",
      sendEmail: "Send Email →",
    },
    footer: {
      role: "Back-end developer building automated systems.",
      quickLinks: "Quick Links",
      projects: "Projects",
      technologies: "Technologies",
      about: "About",
      contact: "Contact",
      social: "Social Media",
      copyright: "Mateus. All rights reserved.",
      madeWith: "Built with",
      byMe: "by me.",
    },
    notFound: {
      title: "Page Not Found",
      message: "Sorry, the page you are looking for does not exist.",
      details: "It may have been moved or removed.",
      home: "Go Home",
    },
  },
} as const;

type Translations = (typeof translations)[Language];

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "en" ? "en" : "pt";
  });

  useEffect(() => {
    window.localStorage.setItem("portfolio-language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = language === "pt" ? "Mateus Henrique | Portfólio" : "Mateus Henrique | Portfolio";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
