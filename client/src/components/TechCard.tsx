import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TechCardProps {
  icon: LucideIcon;
  name: string;
  description: string;
  category: "frontend" | "backend" | "tools";
}

const categoryColors = {
  frontend: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-500/60",
  backend: "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60",
  tools: "from-orange-500/20 to-red-500/20 border-orange-500/30 hover:border-orange-500/60",
};

export default function TechCard({
  icon: Icon,
  name,
  description,
  category,
}: TechCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="group"
    >
      <div
        className={`h-full p-6 rounded-lg border bg-gradient-to-br ${categoryColors[category]} backdrop-blur hover:glow-effect transition-all duration-300 cursor-pointer`}
      >
        {/* Ícone */}
        <div className="mb-4 inline-block p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
          <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
        </div>

        {/* Nome */}
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {name}
        </h3>

        {/* Descrição */}
        <p className="text-gray-400 text-sm">{description}</p>

        {/* Indicador de categoria */}
        <div className="mt-4 pt-4 border-t border-slate-700/50">
          <span className="text-xs font-mono text-gray-500 uppercase">
            {category === "frontend" && "Frontend"}
            {category === "backend" && "Backend"}
            {category === "tools" && "Ferramentas"}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

