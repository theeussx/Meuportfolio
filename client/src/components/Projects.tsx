import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    image: "https://raw.githubusercontent.com/theeussx/feira-matematica/refs/heads/main/client/public/image/logo.png",
    technologies: ["HTML", "CSS", "Kotlin", "TypeScript", "React", "Tailwind"],
    github: "https://github.com/theeussx/feira-matematica",
    demo: "https://feira-de-matematica.vercel.app/",
  },
  {
    image: "https://raw.githubusercontent.com/theeussx/pterodroid/refs/heads/main/pterodroid.png",
    technologies: ["TypeScript", "JavaScript", "SQLite", "Shell", "Express", "Tailwind"],
    github: "https://github.com/theeussx/pterodroid",
    demo: "https://pterodroid-doc.vercel.app/",
  },
  {
    image: "https://raw.githubusercontent.com/theeussx/zittodb/refs/heads/main/src-tauri/icons/icon.png",
    technologies: ["TypeScript", "Rust", "CSS", "JavaScript", "Shell", "Makefile"],
    github: "https://github.com/theeussx/zittodb",
    demo: null,
  },
];
export default function Projects() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="projetos"
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
            {t.projects.title}
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            {t.projects.description}
          </p>
        </motion.div>

        {/* Grid de Projetos */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02, boxShadow: "0 0 25px rgba(0, 245, 255, 0.25)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group h-full"
            >
              <div className="h-full rounded-2xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-cyan-900/40 hover:border-cyan-500/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 flex flex-col">
                {/* Imagem */}
                <div className="relative h-52 overflow-hidden bg-slate-800">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={t.projects.items[index].title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-700">
                      <span className="text-6xl opacity-30">📸</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
                </div>

                {/* Conteúdo */}
                <div className="p-6 md:p-7 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {t.projects.items[index].title}
                  </h3>

                  <p className="text-gray-400 text-base mb-5 leading-relaxed flex-1">
                    {t.projects.items[index].description}
                  </p>

                  {/* Tecnologias */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 rounded-full hover:bg-cyan-900/50 hover:border-cyan-600/60 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800/80 hover:bg-cyan-950/50 border border-slate-700 hover:border-cyan-600 text-gray-200 hover:text-cyan-300 rounded-lg transition-all duration-300 font-medium"
                    >
                      <Github className="w-5 h-5" />
                      GitHub
                    </a>

                    {project.demo && project.demo !== "https://example.com" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-900 hover:border-cyan-700 text-cyan-300 rounded-lg transition-colors duration-200 font-medium"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <a
            href="https://github.com/theeussx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
            {t.projects.allProjects}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
