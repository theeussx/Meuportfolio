type Localized<T> = Record<"br" | "en", T>;

export type ProjectLinkKind = "live" | "docs" | "download" | "source";

export interface ProjectMedia {
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
  caption: Localized<string>;
}

interface ProjectCopy {
  category: string;
  status: string;
  summary: string;
  context: string;
  contribution: string;
  features: readonly string[];
}

export interface Project {
  id: string;
  name: string;
  technologies: readonly string[];
  repository: string;
  links: readonly { kind: ProjectLinkKind; url: string }[];
  media: readonly ProjectMedia[];
  copy: Localized<ProjectCopy>;
}

export const projects: readonly Project[] = [
  {
    id: "wardizitto",
    name: "Wardizitto",
    technologies: ["Node.js", "TypeScript", "Discord.js", "MySQL"],
    repository: "https://github.com/theeussx/Wardizitto",
    links: [],
    media: [
      {
        src: "/media/wardizitto.png",
        width: 1024,
        height: 1024,
        alt: {
          br: "Arte do Wardizitto, um bot Discord com uma figura encapuzada e olhos azuis brilhantes.",
          en: "Wardizitto artwork showing a hooded figure with bright blue eyes.",
        },
        caption: {
          br: "Identidade visual do bot modular para comunidades Discord.",
          en: "Visual identity for the modular bot built for Discord communities.",
        },
      },
    ],
    copy: {
      br: {
        category: "Bot Discord · Projeto open source",
        status: "Código e documentação públicos",
        summary:
          "Um bot Discord modular para administração, economia, moderação e comunidades.",
        context:
          "O Wardizitto v2 reorganiza o runtime com TypeScript estrito, módulos funcionais e fronteiras inspiradas em Clean Architecture. Configuração, banco, permissões, rate limiting, logs e roteamento do Discord ficam em serviços centralizados e testáveis.",
        contribution:
          "Estruturei um bot modular com foco em comunidades, separando regras de negócio, infraestrutura e apresentação para facilitar manutenção e evolução.",
        features: [
          "Administração, moderação, tickets e economia com comandos slash e prefixo.",
          "Persistência em MySQL com migrations versionadas e proteção contra concorrência.",
          "Rate limit, cooldowns, logs estruturados e integrações opcionais com Groq e VirusTotal.",
        ],
      },
      en: {
        category: "Discord bot · Open source project",
        status: "Public source and documentation",
        summary:
          "A modular Discord bot for administration, economy, moderation, and communities.",
        context:
          "Wardizitto v2 rebuilds the runtime around strict TypeScript, functional modules, and boundaries inspired by Clean Architecture. Configuration, database access, permissions, rate limiting, logging, and Discord routing live in centralized, testable services.",
        contribution:
          "I structured a modular bot for communities, separating business rules, infrastructure, and presentation to keep the project easier to maintain and evolve.",
        features: [
          "Administration, moderation, tickets, and economy through slash and prefix commands.",
          "MySQL persistence with versioned migrations and concurrency protection.",
          "Rate limiting, cooldowns, structured logs, and optional Groq and VirusTotal integrations.",
        ],
      },
    },
  },
  {
    id: "meuportfolio",
    name: "Meuportfolio",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    repository: "https://github.com/theeussx/Meuportfolio",
    links: [{ kind: "live", url: "https://theeussx.vercel.app/" }],
    media: [
      {
        src: "/media/compartilhamento.jpg",
        width: 1200,
        height: 630,
        alt: {
          br: "Imagem de apresentação do portfólio Meuportfolio com o título Sites, sistemas e automações.",
          en: "Meuportfolio presentation image with the title Sites, sistemas e automações.",
        },
        caption: {
          br: "Apresentação visual do portfólio de desenvolvimento web, sistemas e automações.",
          en: "Visual introduction to the portfolio for web development, systems, and automations.",
        },
      },
    ],
    copy: {
      br: {
        category: "Portfólio · Projeto open source",
        status: "Site publicado e código público",
        summary: "Meu portfólio de desenvolvimento web, automações e sistemas.",
        context:
          "O site reúne projetos, serviços, tecnologias, formação e formas de contato em uma experiência responsiva com suporte a tema claro e escuro e conteúdo em português e inglês.",
        contribution:
          "Planejei e implementei a interface, os componentes reutilizáveis, a navegação por seções e a apresentação dos projetos de código aberto.",
        features: [
          "Seções de projetos, serviços, tecnologias, sobre e contato.",
          "Tema claro/escuro, internacionalização e navegação responsiva.",
          "Galeria de projetos, certificados e links para código e demonstrações.",
        ],
      },
      en: {
        category: "Portfolio · Open source project",
        status: "Published site and public source",
        summary: "My portfolio for web development, automations, and systems.",
        context:
          "The site brings together projects, services, technologies, education, and contact options in a responsive experience with light and dark themes and Portuguese and English content.",
        contribution:
          "I planned and implemented the interface, reusable components, section navigation, and presentation of open source projects.",
        features: [
          "Project, services, technologies, about, and contact sections.",
          "Light/dark theme, internationalization, and responsive navigation.",
          "Project gallery, certificates, and links to source code and demos.",
        ],
      },
    },
  },
  {
    id: "feira-matematica",
    name: "Feira de Matemática",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    repository: "https://github.com/theeussx/feira-matematica",
    links: [{ kind: "live", url: "https://feira-de-matematica.vercel.app/" }],
    media: [
      {
        src: "/media/feira-home.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Página inicial da Feira de Matemática com uma introdução à realidade aumentada.",
          en: "Mathematics Fair homepage introducing augmented reality.",
        },
        caption: {
          br: "Página inicial da experiência educativa publicada.",
          en: "Homepage of the published educational experience.",
        },
      },
      {
        src: "/media/feira-demo.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Demonstração da Feira de Matemática com leituras de exemplo do acelerômetro nos eixos X, Y e Z.",
          en: "Mathematics Fair demo with sample accelerometer readings on the X, Y, and Z axes.",
        },
        caption: {
          br: "Demonstração local com leituras de exemplo e câmera desativada.",
          en: "Local demo with sample readings and the camera disabled.",
        },
      },
      {
        src: "/media/feira-quiz.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Primeira pergunta do quiz da Feira de Matemática sobre realidade aumentada.",
          en: "First question in the Mathematics Fair quiz, about augmented reality.",
        },
        caption: {
          br: "Quiz interativo executado localmente.",
          en: "Interactive quiz running locally.",
        },
      },
    ],
    copy: {
      br: {
        category: "Experiência web · Projeto educacional em equipe",
        status: "Site e código públicos",
        summary:
          "Uma experiência interativa para entender como o celular percebe movimento e espaço.",
        context:
          "Criado para uma feira escolar, o site explica como giroscópio, acelerômetro e matemática espacial sustentam a realidade aumentada. A demonstração apresenta as leituras dos três eixos de um acelerômetro com valores de exemplo.",
        contribution:
          "Desenvolvi o site da equipe, incluindo o conteúdo sobre sensores, a interface da demonstração e o quiz.",
        features: [
          "Demonstração dos três eixos do acelerômetro com valores de exemplo.",
          "Explicações sobre sensores, coordenadas e ângulos de rotação.",
          "Quiz interativo com feedback imediato.",
        ],
      },
      en: {
        category: "Web experience · Educational team project",
        status: "Public website and source",
        summary:
          "An interactive experience that shows how a phone senses motion and space.",
        context:
          "Built for a school fair, the site explains how gyroscopes, accelerometers, and spatial math power augmented reality. The demo shows sample readings from each of an accelerometer’s three axes.",
        contribution:
          "I built the team’s website, including the material on sensors, the demo interface, and the quiz.",
        features: [
          "A demonstration of all three accelerometer axes with sample values.",
          "Explanations of sensors, coordinates, and rotation angles.",
          "An interactive quiz with immediate feedback.",
        ],
      },
    },
  },
];
