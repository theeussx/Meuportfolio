import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CertificateCard from "./CertificateCard";
import { useLanguage } from "@/contexts/LanguageContext";

type CategoryFilter = "all" | "web" | "backend" | "tools" | "eventos";

const certificates = [
  {
    issuer: "IFRS",
    category: "web" as const,
    image: "/images/IFRSLogo.png",
    certificateUrl: "/images/Programador_Web.pdf",
  },
  {
    issuer: "UFRPE",
    category: "eventos" as const,
    image: "/images/SBPCLogo.png",
    certificateUrl: "/images/SBPC.png",
  },
/*
  {
    title: "Node.js & Express Backend",
    issuer: "Coursera",
    date: "Abril 2024",
    category: "backend" as const,
    description: "Desenvolvimento de APIs REST robustas com Node.js e Express",
    certificateUrl: "https://coursera.org",
  },
  {
    title: "TypeScript Avançado",
    issuer: "Frontend Masters",
    date: "Março 2024",
    category: "web" as const,
    description: "Type system avançado e padrões de design com TypeScript",
    certificateUrl: "https://frontendmasters.com",
  },
  {
    title: "Banco de Dados MySQL",
    issuer: "LinkedIn Learning",
    date: "Fevereiro 2024",
    category: "backend" as const,
    description: "Design de banco de dados, queries otimizadas e normalização",
    certificateUrl: "https://linkedin.com",
  },
  {
    title: "Git & GitHub Profissional",
    issuer: "Alura",
    date: "Janeiro 2024",
    category: "tools" as const,
    description: "Controle de versão, workflows colaborativos e boas práticas",
    certificateUrl: "https://alura.com.br",
  },
  {
    title: "Comunicação e Liderança",
    issuer: "Coursera",
    date: "Dezembro 2023",
    category: "soft-skills" as const,
    description: "Desenvolvimento de habilidades de comunicação e trabalho em equipe",
    certificateUrl: "https://coursera.org",
  },
  {
    title: "Tailwind CSS Masterclass",
    issuer: "Udemy",
    date: "Novembro 2023",
    category: "web" as const,
    description: "Domínio completo do Tailwind CSS para estilização moderna",
    certificateUrl: "https://udemy.com",
  },
*/
];

export default function Certificates() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const categories: { value: CategoryFilter; label: string }[] = [
    { value: "all", label: t.certificates.categories.all },
    { value: "web", label: t.certificates.categories.web },
    { value: "eventos", label: t.certificates.categories.events },
  ];

  const filteredCertificates =
    activeCategory === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="certificados"
      className="relative overflow-hidden bg-transparent py-20"
    >
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
            {t.certificates.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.certificates.description}
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-cyan-600 text-white border border-cyan-600"
                  : "border border-slate-700 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400"
              }`}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert) => (
                <motion.div key={cert.issuer} variants={itemVariants}>
                  <CertificateCard
                    {...cert}
                    title={t.certificates.items[certificates.indexOf(cert)].title}
                    date={t.certificates.items[certificates.indexOf(cert)].date}
                    description={t.certificates.items[certificates.indexOf(cert)].description}
                  />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  {t.certificates.empty}
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-20 border-t border-slate-800"
        >
          {[
            { label: t.certificates.stats[0], value: certificates.length },
            { label: t.certificates.stats[1], value: categories.length - 1 },
            { label: t.certificates.stats[2], value: "300+" },
            { label: t.certificates.stats[3], value: "8+" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-4 rounded-lg border border-slate-800 hover:border-cyan-500/30 transition-colors"
            >
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
