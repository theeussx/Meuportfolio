import { ChevronDown, Github, Mail, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background com imagem + overlay forte pra ficar escuro como as outras seções */}
      <div className="absolute inset-0 z-0">
        {/*
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" aria-hidden="true" />
        
        {/* Imagem de fundo com opacidade controlada */}
        <div
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: "url('/images/fundo.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

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
      alt="Mateus"
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
            Mateus
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-cyan-400 drop-shadow-md">
            Desenvolvedor back-end
          </p>
        </motion.div>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
        >
          Transformo ideias em código. Gosto de desenvolver sistemas automatizados e interfaces fluidas. Sempre estudando novas tecnologias e criando projetos que geram impacto real.
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
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-cyan-600 to-cyan-500 hover:from-cyan-700 hover:to-cyan-600 rounded-xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black"
          >
            Ver Projetos →
          </a>

          <a
            href="#contato"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-cyan-300 border-2 border-cyan-600/70 rounded-xl hover:bg-cyan-950/30 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
          >
            Entre em Contato
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
            { Icon: Mail, href: "mailto:seuemail@exemplo.com", label: "E-mail" },
            { Icon: Linkedin, href: "https://www.linkedin.com/in/theeussx", label: "LinkedIn" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-slate-900/50 border border-cyan-900/40 hover:border-cyan-500/60 hover:bg-cyan-950/30 transition-all duration-300 hover:scale-110 backdrop-blur-md"
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
