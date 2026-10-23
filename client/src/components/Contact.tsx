import { motion } from "framer-motion";
import { Mail, Github, Instagram, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "mateushenrique6968@gmail.com",
    href: "mailto:mateushenrique6968@gmail.com",
    color: "hover:text-red-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@theeussx",
    href: "https://github.com/theeussx",
    color: "hover:text-gray-300",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@theeussx_",
    href: "https://instagram.com/theeussx_",
    color: "hover:text-pink-400",
  },
];

export default function Contact() {
  const { t } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contato" className="relative overflow-hidden bg-transparent py-20">
      <div className="container max-w-4xl mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            {t.contact.title}
          </h2>
          <p className="text-gray-400 text-lg">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={index}
                variants={itemVariants}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="h-full p-6 rounded-lg border border-slate-800 hover:border-cyan-500/50 bg-slate-900/30 backdrop-blur hover:glow-effect transition-all duration-300">
                  <div className="mb-4 inline-block p-3 rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                    <Icon className={`w-6 h-6 text-cyan-400 transition-colors ${link.color}`} />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {link.label}
                  </h3>

                  <p className="text-gray-400 text-sm break-all group-hover:text-gray-300 transition-colors">
                    {link.value}
                  </p>

                  <div className="mt-4 pt-4 border-t border-slate-700 flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">{t.contact.send}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center p-8 rounded-lg border border-slate-800 bg-slate-900/40"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.contact.ready}
          </h3>
          <p className="text-gray-400 mb-6">
            {t.contact.invitation}
          </p>
          <a
            href="mailto:mateushenrique6968@gmail.com"
            className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            {t.contact.sendEmail}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
