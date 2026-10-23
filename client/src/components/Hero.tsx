import { ChevronDown, Github, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <button
        type="button"
        onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
        aria-label={t.hero.switchLanguage}
        aria-pressed={language === "en"}
        className="absolute right-5 top-5 z-20 rounded-lg border border-cyan-700 px-4 py-2 text-sm font-semibold text-cyan-300 transition-colors hover:border-cyan-500 hover:bg-slate-900 sm:right-8 sm:top-8"
      >
        {language === "pt" ? "EN" : "BR"}
      </button>
      {/* Conteúdo central */}
      <div className="container relative z-10 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        {/* Avatar */}
        <motion.div
  initial={{ opacity: 0, scale: 0.75 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="mb-8 flex justify-center"
>
  <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden neon-border glow-effect">
    <img
      src="/images/avatar.png"
      alt="Mateus Henrique"
      className="w-full h-full object-cover"
    />
  </div>
</motion.div>

        {/* Nome + Cargo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-3 tracking-tight text-white drop-shadow-2xl">
            Mateus Henrique
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-cyan-400 drop-shadow-md">
            {t.hero.role}
          </p>
        </motion.div>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          {t.hero.description}
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#projetos"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-cyan-600 hover:bg-cyan-500 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            {t.hero.projects}
          </a>

          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-300 border border-cyan-700 rounded-lg hover:bg-slate-900 hover:border-cyan-500 transition-colors duration-200"
          >
            {t.hero.contact}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="mt-12 flex justify-center gap-6"
        >
          {[
            { Icon: Github, href: "https://github.com/theeussx", label: "GitHub" },
            { Icon: Mail, href: "mailto: mateushenrique6968@gmail.com.com", label: "E-mail" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-slate-900/50 border border-slate-800 hover:border-cyan-700 hover:bg-slate-900 transition-colors duration-200"
              aria-label={social.label}
              title={social.label}
            >
              <social.Icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-cyan-400/70 animate-pulse drop-shadow-lg" />
      </motion.div>
    </section>
  );
}
