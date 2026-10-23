import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Database,
  Briefcase,
  Wrench,
  Lightbulb,
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const highlightIcons = [Smartphone, Code, Database, Briefcase, Wrench, Lightbulb];

export default function About() {
  const { language, t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="sobre" className="relative overflow-hidden bg-transparent py-20">
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            {t.about.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {t.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300 text-lg leading-relaxed">
                {index === 0
                  ? paragraph.split(/(back-end)/i).map((part, partIndex) =>
                      part.toLowerCase() === "back-end" ? (
                        <span key={partIndex} className="text-cyan-400 font-bold">
                          {language === "pt" ? "Back-end" : "back-end"}
                        </span>
                      ) : (
                        part
                      ),
                    )
                  : paragraph}
              </p>
            ))}

            {/* CTA Button */}
            <motion.div
              whileHover={{ x: 5 }}
              className="pt-4"
            >
              <a
                href="#contato"
                className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                {t.about.contact}
              </a>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden neon-border glow-effect">
              <img
                src="/images/avatar.png"
                alt="Mateus Henrique"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {t.about.highlights.map((highlight, index) => {
            const Icon = highlightIcons[index];
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="p-6 rounded-lg border border-slate-800 hover:border-cyan-500/30 bg-slate-900/30 backdrop-blur hover:glow-effect transition-all duration-300 group">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
