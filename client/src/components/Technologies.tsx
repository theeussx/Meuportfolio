import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMysql,
  SiNodedotjs,
  SiOpenapiinitiative,
  SiReact,
  SiRust,
  SiSqlite,
  SiTailwindcss,
  SiAndroid,
  SiTypescript,
} from "react-icons/si";
import TechCard from "./TechCard";
import { useLanguage } from "@/contexts/LanguageContext";

type CategoryFilter = "all" | "frontend" | "backend" | "tools";

const technologies = [
  // Frontend
  {
    icon: SiHtml5,
    iconColor: "#E34F26",
    name: "HTML5",
    category: "frontend" as const,
  },
  {
    icon: SiCss,
    iconColor: "#1572B6",
    name: "CSS3",
    category: "frontend" as const,
  },
  {
    icon: SiJavascript,
    iconColor: "#F7DF1E",
    name: "JavaScript",
    category: "frontend" as const,
  },
  {
    icon: SiTypescript,
    iconColor: "#3178C6",
    name: "TypeScript",
    category: "frontend" as const,
  },
  {
    icon: SiReact,
    iconColor: "#61DAFB",
    name: "React",
    category: "frontend" as const,
  },
  {
    icon: SiTailwindcss,
    iconColor: "#06B6D4",
    name: "Tailwind CSS",
    category: "frontend" as const,
  },
  // Backend
  {
    icon: SiNodedotjs,
    iconColor: "#5FA04E",
    name: "Node.js",
    category: "backend" as const,
  },
  {
    icon: SiJavascript,
    iconColor: "#F7DF1E",
    name: "JavaScript",
    category: "backend" as const,
  },
  {
    icon: SiTypescript,
    iconColor: "#3178C6",
    name: "TypeScript",
    category: "backend" as const,
  },
  {
    icon: SiMysql,
    iconColor: "#4479A1",
    name: "MySQL",
    category: "backend" as const,
  },
  {
    icon: SiExpress,
    iconColor: "#E5E7EB",
    name: "Express.js",
    category: "backend" as const,
  },
  // Tools
  {
    icon: SiGit,
    iconColor: "#F05032",
    name: "Git & GitHub",
    category: "tools" as const,
  },
  {
    icon: SiAndroid,
    iconColor: "#E5E7EB",
    name: "Termux",
    category: "tools" as const,
  },
  {
    icon: SiOpenapiinitiative,
    iconColor: "#6BA539",
    name: "APIs REST",
    category: "tools" as const,
  },
  {
    icon: SiDocker,
    iconColor: "#2496ED",
    name: "Docker",
    category: "tools" as const,
  },
  {
    icon: SiLinux,
    iconColor: "#FCC624",
    name: "Linux",
    category: "tools" as const,
  },
  {
    icon: SiGnubash,
    iconColor: "#4EAA25",
    name: "Shell",
    category: "tools" as const,
  },
];

export default function Technologies() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: t.technologies.categories.all },
    { value: "frontend", label: t.technologies.categories.frontend },
    { value: "backend", label: t.technologies.categories.backend },
    { value: "tools", label: t.technologies.categories.tools },
  ];

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
      className="relative overflow-hidden border-t border-cyan-950/50 bg-transparent py-20 md:py-24"
    >
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
            {t.technologies.title}
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.technologies.description}
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
                <motion.div key={tech.name + tech.category} variants={itemVariants}>
                  <TechCard
                    {...tech}
                    description={t.technologies.descriptions[technologies.indexOf(tech)]}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12 text-gray-400 text-lg"
              >
                {t.technologies.empty}
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
            { label: t.technologies.stats[0], value: "14+" },
            { label: t.technologies.stats[1], value: "20+" },
            { label: t.technologies.stats[2], value: "1+" },
            { label: t.technologies.stats[3], value: "14+" },
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
