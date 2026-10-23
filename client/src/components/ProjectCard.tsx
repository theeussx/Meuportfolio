import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubLink,
  liveLink,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group h-full"
    >
      <div className="h-full rounded-xl overflow-hidden bg-slate-900/60 backdrop-blur-md border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 flex flex-col">
        {/* Imagem do Projeto */}
        <div className="relative h-52 overflow-hidden bg-slate-800">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-400 text-sm mb-5 flex-1 leading-relaxed">
            {description}
          </p>

          {/* Tecnologias */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 rounded-full hover:border-cyan-400/60 hover:bg-cyan-900/30 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-4 border-t border-slate-700/50 mt-auto">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800/80 hover:bg-cyan-950/50 border border-slate-600 hover:border-cyan-600 text-gray-200 hover:text-cyan-300 rounded-lg transition-all duration-300 font-medium"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>

            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-900 hover:border-cyan-700 text-cyan-300 rounded-lg transition-colors duration-200 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
