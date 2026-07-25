import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import CertificateCard from "./CertificateCard";

type CategoryFilter = "all" | "web" | "backend" | "tools" | "eventos";

const certificates = [
  {
    title: "Certificado em Progamador Web",
    issuer: "IFRS",
    date: "25/01 a 25/07 - 2026",
    category: "web" as const,
    description: "Certificação completa em desenvolvimento web moderno com HTML, CSS, JavaScript e MySQL",
    image: "/images/IFRSLogo.png",
    certificateUrl: "/images/Programador_Web.pdf",
  },
  {
    title: "SBPC JOVEM 77⁰",
    issuer: "UFRPE",
    date: "14 a 19 de julho - 2025",
    category: "eventos" as conts,
    description: "Participação e aprovação da feira de ciências SBPC JOVEM",
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

const categories: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "web", label: "Web Development" },
  { value: "backend", label: "Backend" },
  { value: "tools", label: "Ferramentas" },
  { value: "eventos", label: "eventos" },
];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

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
      className="py-20 bg-black relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "url('/images/tech-pattern.png')",
          backgroundSize: "400px 400px",
        }}
      />

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
            Certificações & Credenciais
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Certificações que comprovam meu comprometimento com o aprendizado
            contínuo e excelência profissional.
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.value
                  ? "bg-cyan-500 text-black border border-cyan-500 glow-effect"
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
              filteredCertificates.map((cert, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <CertificateCard {...cert} />
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full text-center py-12"
              >
                <p className="text-gray-400 text-lg">
                  Nenhum certificado nesta categoria no momento.
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
            { label: "Certificados", value: certificates.length },
            { label: "Categorias", value: categories.length - 1 },
            { label: "Horas de Estudo", value: "300+" },
            { label: "Plataformas", value: "8+" },
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
