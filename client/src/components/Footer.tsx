import { motion } from "framer-motion";
import { Github, Instagram, Mail, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-slate-800 bg-transparent">
      <div className="container max-w-6xl mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-2 glow-text">
              Mateus Henrique
            </h3>
            <p className="text-gray-400 text-sm">
              {t.footer.role}
            </p>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-2">
              {[
                { label: t.footer.projects, href: "#projetos" },
                { label: t.footer.technologies, href: "#tecnologias" },
                { label: t.footer.about, href: "#sobre" },
                { label: t.footer.contact, href: "#contato" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/theeussx"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-slate-700 hover:border-cyan-500/50 flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
  href="https://instagram.com/theeussx_"
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 rounded-full border border-slate-700 hover:border-pink-500/50 flex items-center justify-center text-gray-400 hover:text-pink-400 transition"
>
  <Instagram className="w-5 h-5" />
</a>
              
              <a
                href="mailto:mateushenrique6968@gmail.com"
                className="w-10 h-10 rounded-full border border-slate-700 hover:border-red-500/50 flex items-center justify-center text-gray-400 hover:text-red-400 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 my-8" />

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm"
        >
          <p>
            &copy; 2025 – {currentYear} {t.footer.copyright}
          </p>
          <p className="flex items-center gap-1 mt-4 md:mt-0">
            {t.footer.madeWith} <Heart className="w-4 h-4 text-red-500" /> {t.footer.byMe}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
