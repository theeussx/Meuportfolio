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
    id: "pterodroid",
    name: "Pterodroid",
    technologies: ["React", "Node.js", "Express", "Socket.IO", "SQLite"],
    repository: "https://github.com/theeussx/pterodroid",
    links: [{ kind: "docs", url: "https://pterodroid-doc.vercel.app/" }],
    media: [
      {
        src: "/media/pterodroid-dashboard.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Painel Pterodroid com a lista de serviços e a visão de recursos do sistema.",
          en: "Pterodroid dashboard showing the service list and system resources.",
        },
        caption: {
          br: "Painel executado localmente com serviços de exemplo.",
          en: "Dashboard running locally with sample services.",
        },
      },
      {
        src: "/media/pterodroid-services.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Tela de gerenciamento com os serviços cadastrados e ações de configuração.",
          en: "Management screen with registered services and configuration controls.",
        },
        caption: {
          br: "Gerenciamento de serviços no painel local.",
          en: "Service management in the local dashboard.",
        },
      },
    ],
    copy: {
      br: {
        category: "Infraestrutura · Projeto open source",
        status: "Código e documentação públicos",
        summary:
          "Um painel de hospedagem pessoal que roda do Android ao servidor Linux.",
        context:
          "Gerenciar bots, APIs e sites pelo celular costuma exigir vários comandos e ferramentas. O Pterodroid reúne essas rotinas em uma interface web que roda em Termux, Ubuntu proot e Linux.",
        contribution:
          "Desenvolvi o painel e a API, integrando o gerenciamento de processos, a persistência em SQLite e o acompanhamento de logs em tempo real.",
        features: [
          "Criação e controle de serviços com modelos de configuração.",
          "Logs em tempo real, monitoramento de recursos e arquivos por serviço.",
          "Gerenciamento de instâncias locais de PostgreSQL e MariaDB.",
        ],
      },
      en: {
        category: "Infrastructure · Open source project",
        status: "Public source and documentation",
        summary:
          "A personal hosting dashboard that runs on Android and Linux servers.",
        context:
          "Running bots, APIs, and websites from a phone often means juggling several tools and commands. Pterodroid brings these routines into a web interface for Termux, Ubuntu proot, and Linux.",
        contribution:
          "I built the dashboard and API, integrating process management, SQLite storage, and real-time log streaming.",
        features: [
          "Service setup and controls with reusable configuration templates.",
          "Live logs, system monitoring, and per-service file management.",
          "Management of local PostgreSQL and MariaDB instances.",
        ],
      },
    },
  },
  {
    id: "zittodb",
    name: "ZittoDB",
    technologies: ["React", "TypeScript", "Tauri", "Rust", "ADB"],
    repository: "https://github.com/theeussx/zittodb",
    links: [
      {
        kind: "download",
        url: "https://github.com/theeussx/zittodb/releases/latest",
      },
      { kind: "docs", url: "https://zittodb.vercel.app/" },
    ],
    media: [
      {
        src: "/media/zittodb-demo.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Tela inicial do ZittoDB com dispositivos Android de exemplo e seus estados de conexão.",
          en: "ZittoDB home screen with sample Android devices and their connection states.",
        },
        caption: {
          br: "Interface do projeto em modo demonstração com dispositivos simulados.",
          en: "Project interface in demo mode with simulated devices.",
        },
      },
      {
        src: "/media/zittodb-device.webp",
        width: 1360,
        height: 820,
        alt: {
          br: "Visão geral de um aparelho Android de exemplo selecionado no ZittoDB.",
          en: "Overview of a sample Android device selected in ZittoDB.",
        },
        caption: {
          br: "Detalhes do dispositivo no modo demonstração.",
          en: "Device details in demo mode.",
        },
      },
    ],
    copy: {
      br: {
        category: "Aplicativo desktop · Projeto open source",
        status: "Versão 1.0.0 disponível para Linux",
        summary:
          "Uma interface para gerenciar dispositivos Android no Linux com ADB, scrcpy e Fastboot.",
        context:
          "Acompanhar dispositivos, arquivos e logs do Android pela linha de comando exige alternar entre várias ferramentas. O ZittoDB reúne essas rotinas em um aplicativo desktop com execução e histórico locais.",
        contribution:
          "Desenvolvi a interface React e integrei a bridge do Tauri com a camada Rust, que valida os parâmetros e executa cada operação no dispositivo selecionado.",
        features: [
          "Descoberta de dispositivos por USB ou Wi-Fi, com visão geral do aparelho.",
          "Espelhamento via scrcpy, gerenciamento de aplicativos e transferência de arquivos.",
          "Shell, leitura de logs e histórico local de operações.",
        ],
      },
      en: {
        category: "Desktop app · Open source project",
        status: "Version 1.0.0 available for Linux",
        summary:
          "An interface for managing Android devices on Linux with ADB, scrcpy, and Fastboot.",
        context:
          "Working with Android devices, files, and logs on the command line involves switching between tools. ZittoDB consolidates those tasks in one desktop app with local execution and activity history.",
        contribution:
          "I built the React interface and integrated the Tauri bridge with the Rust layer, which validates parameters and runs operations against the selected device.",
        features: [
          "USB and Wi-Fi device discovery with a device overview.",
          "Screen mirroring through scrcpy, app management, and file transfer.",
          "Shell access, log viewing, and local operation history.",
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
