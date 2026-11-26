import {
  siCss,
  siDocker,
  siExpress,
  siGit,
  siGithub,
  siHtml5,
  siLinux,
  siMysql,
  siNodedotjs,
  siReact,
  siRust,
  siSqlite,
  siTailwindcss,
  siTauri,
  siTypescript,
  siVite,
} from "simple-icons";

export const technologyCategories = ["all", "frontend", "backend", "tools"] as const;
export type TechnologyCategory = (typeof technologyCategories)[number];

type Localized = { br: string; en: string };

export type Technology = {
  id: string;
  category: Exclude<TechnologyCategory, "all">;
  icon: typeof siHtml5;
  title: string;
  description: Localized;
};

export const technologies: readonly Technology[] = [
  {
    id: "html5",
    category: "frontend",
    icon: siHtml5,
    title: "HTML5",
    description: {
      br: "Estrutura semântica e acessível para interfaces web.",
      en: "Semantic and accessible structure for web interfaces.",
    },
  },
  {
    id: "css",
    category: "frontend",
    icon: siCss,
    title: "CSS",
    description: {
      br: "Layouts responsivos, hierarquia visual e acabamento de interface.",
      en: "Responsive layouts, visual hierarchy, and interface polish.",
    },
  },
  {
    id: "react",
    category: "frontend",
    icon: siReact,
    title: "React",
    description: {
      br: "Interfaces dinâmicas e componentes reutilizáveis.",
      en: "Dynamic interfaces and reusable components.",
    },
  },
  {
    id: "typescript",
    category: "frontend",
    icon: siTypescript,
    title: "TypeScript",
    description: {
      br: "Tipagem para tornar o desenvolvimento mais seguro e previsível.",
      en: "Typing that makes development safer and more predictable.",
    },
  },
  {
    id: "tailwind",
    category: "frontend",
    icon: siTailwindcss,
    title: "Tailwind CSS",
    description: {
      br: "Estilização consistente para interfaces responsivas.",
      en: "Consistent styling for responsive interfaces.",
    },
  },
  {
    id: "node",
    category: "backend",
    icon: siNodedotjs,
    title: "Node.js",
    description: {
      br: "Serviços e ferramentas para aplicações JavaScript no servidor.",
      en: "Services and tools for JavaScript applications on the server.",
    },
  },
  {
    id: "express",
    category: "backend",
    icon: siExpress,
    title: "Express",
    description: {
      br: "APIs e rotas para conectar interfaces e dados.",
      en: "APIs and routes that connect interfaces and data.",
    },
  },
  {
    id: "mysql",
    category: "backend",
    icon: siMysql,
    title: "MySQL",
    description: {
      br: "Persistência relacional para informações de aplicações.",
      en: "Relational persistence for application data.",
    },
  },
  {
    id: "sqlite",
    category: "backend",
    icon: siSqlite,
    title: "SQLite",
    description: {
      br: "Banco local para ferramentas e aplicações independentes.",
      en: "Local database storage for independent tools and applications.",
    },
  },
  {
    id: "rust",
    category: "tools",
    icon: siRust,
    title: "Rust",
    description: {
      br: "Camada nativa usada na integração desktop do ZittoDB.",
      en: "Native layer used in the ZittoDB desktop integration.",
    },
  },
  {
    id: "tauri",
    category: "tools",
    icon: siTauri,
    title: "Tauri",
    description: {
      br: "Aplicações desktop leves com interface web e código nativo.",
      en: "Lightweight desktop apps with web interfaces and native code.",
    },
  },
  {
    id: "vite",
    category: "tools",
    icon: siVite,
    title: "Vite",
    description: {
      br: "Desenvolvimento e build rápidos para projetos web modernos.",
      en: "Fast development and builds for modern web projects.",
    },
  },
  {
    id: "git",
    category: "tools",
    icon: siGit,
    title: "Git",
    description: {
      br: "Histórico de mudanças e colaboração no código.",
      en: "Change history and collaboration around the codebase.",
    },
  },
  {
    id: "github",
    category: "tools",
    icon: siGithub,
    title: "GitHub",
    description: {
      br: "Repositórios públicos, documentação e distribuição dos projetos.",
      en: "Public repositories, documentation, and project distribution.",
    },
  },
  {
    id: "linux",
    category: "tools",
    icon: siLinux,
    title: "Linux",
    description: {
      br: "Ambiente para desenvolvimento, automações e hospedagem pessoal.",
      en: "Environment for development, automation, and personal hosting.",
    },
  },
  {
    id: "docker",
    category: "tools",
    icon: siDocker,
    title: "Docker",
    description: {
      br: "Containers para organizar ambientes e serviços locais.",
      en: "Containers for organizing local environments and services.",
    },
  },];
