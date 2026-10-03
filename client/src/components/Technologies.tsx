import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Code2,
  Palette,
  Zap,
  Database,
  Server,
  Smartphone,
  GitBranch,
  Terminal,
  Cpu,
  Package,
  Layers,
  Shield,
} from "lucide-react";
import TechCard from "./TechCard";

type CategoryFilter = "all" | "frontend" | "backend" | "tools";

const technologies = [
  // Frontend
  {
    icon: Code2,
    name: "HTML5",
    description: "Estrutura semântica e acessível para web",
    category: "frontend" as const,
  },
  {
    icon: Palette,
    name: "CSS3",
    description: "Estilos modernos, animações e layouts responsivos",
    category: "frontend" as const,
  },
  {
    icon: Zap,
    name: "JavaScript",
    description: "Lógica interativa e manipulação de DOM",
    category: "frontend" as const,
  },
  {
    icon: Shield,
    name: "TypeScript",
    description: "Type safety e melhor experiência de desenvolvimento",
    category: "frontend" as const,
  },
  {
    icon: Layers,
    name: "React",
    description: "Interfaces dinâmicas e componentes reutilizáveis",
    category: "frontend" as const,
  },
  {
    icon: Palette,
    name: "Tailwind CSS",
    description: "Estilização rápida com utility-first CSS",
    category: "frontend" as const,
  },
  // Backend
  {
    icon: Server,
    name: "Node.js",
    description: "Runtime JavaScript para backend ágil",
    category: "backend" as const,
  },
  {
    icon: Database,
    name: "MySQL",
    description: "Banco de dados relacional estruturado",
    category: "backend" as const,
  },
  {
    icon: Package,
    name: "Express.js",
    description: "Framework web minimalista e flexível",
    category: "backend" as const,
  },
  // Tools
  {
    icon: GitBranch,
    name: "Git & GitHub",
    description: "Controle de versão e colaboração",
    category: "tools" as const,
  },
  {
    icon: Terminal,
    name: "Termux",
    description: "Ambiente Linux no Android para scripts",
    category: "tools" as const,
  },
  {
    icon: Cpu,
    name: "APIs REST",
    description: "Integração e comunicação entre serviços",
    category: "tools" as const,
  },
];

const categories: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "frontend", label: "Frontend" },
  { value: "backend", label: "Backend" },
  { value: "tools", label: "Ferramentas" },
];

export default function Technologies() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
  } as const;

  return (
    <section
      id="tecnologias"
      className="py-20 md:py-24 bg-black relative overflow-hidden border-t border-cyan-950/50"
    >
      
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-950/15 via-transparent to-purple-950/10" />
        {/* Se quiser manter o pattern: */}
        {/* <div style={{ backgroundImage: "url('/images/tech-pattern.png')", backgroundSize: "400px" }} className="w-full h-full opacity-5" /> */}
      </div>

      <div className="container max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-600 animate-pulse">
            Ferramentas que utilizo nos meus projetos
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Tecnologias que fazem parte dos meus projetos.
          </p>
        </motion.div>

       
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 rounded-full font-medium text-sm md:text-base transition-all duration-300 backdrop-blur-md border ${
                activeCategory === category.value
                  ? "bg-cyan-600/30 border-cyan-500 text-white shadow-neon-cyan"
                  : "bg-slate-900/40 border-cyan-900/50 text-gray-300 hover:border-cyan-500 hover:text-cyan-300 hover:bg-cyan-950/30"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de TechCards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredTechnologies.length > 0 ? (
              filteredTechnologies.map((tech, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <TechCard {...tech} />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12 text-gray-400 text-lg"
              >
                Nenhuma tecnologia nesta categoria no momento.
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats com glass effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20 pt-16 border-t border-cyan-950/50"
        >
          {[
            { label: "Tecnologias", value: "12+" },
            { label: "Projetos", value: "10+" },
            { label: "Anos Exp.", value: "1+" },
            { label: "Clientes", value: "10+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,245,255,0.3)" }}
              className="text-center p-6 rounded-xl bg-slate-900/40 backdrop-blur-md border border-cyan-900/40 hover:border-cyan-500/60 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-glow">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
