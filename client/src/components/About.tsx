import { motion } from "framer-motion";
import {
  Smartphone,
  Code,
  Database,
  Briefcase,
  Wrench,
  Lightbulb,
} from "lucide-react";

const highlights = [
  {
    icon: Smartphone,
    title: "Desenvolvimento Responsivo",
    description: "Adapto projetos para funcionar perfeitamente em celulares e desktops",
  },
  {
    icon: Code,
    title: "Lógica em JavaScript",
    description: "Da lógica básica até manipulação de dados e automações",
  },
  {
    icon: Database,
    title: "Banco de Dados",
    description: "Experiência com MySQL e organização de dados estruturados",
  },
  {
    icon: Briefcase,
    title: "Trabalho Remoto",
    description: "Ganho dinheiro desenvolvendo sistemas de gerenciamento e automações para pequenas empresas.",
  },
  {
    icon: Wrench,
    title: "Infraestrutura e Servidores",
    description: "Experiência com Linux, docker, vps, desenvolvimento back-end, containers e automações.",
  },
  {
    icon: Lightbulb,
    title: "Visão de Futuro",
    description: "Meu objetivo é desenvolver sistemas úteis e eficientes, que facilitem a vida das pessoas e empresas.",
  },
];

export default function About() {
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
    <section id="sobre" className="py-20 bg-black relative overflow-hidden">
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
            Sobre Mim
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça um pouco sobre quem sou.
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
           <p className="text-gray-300 text-lg leading-relaxed">
  Sou um jovem desenvolvedor <span className="text-cyan-400 font-bold">Back-end</span> especializado em automações, infraestrutura e gerenciamento de servidores.
</p>

<p className="text-gray-300 text-lg leading-relaxed">
  Crio APIs, painéis web e sistemas que simplificam tarefas complexas. Tenho forte interesse em Linux e containers, sempre focado em ferramentas que unem alta performance e escalabilidade.
</p>

<p className="text-gray-300 text-lg leading-relaxed">
  Busco sempre evoluir aprendendo novas tecnologias para criar soluções eficientes, que entreguem uma ótima experiência de uso e façam a diferença para pequenas empresas e usuários.
</p>


            {/* CTA Button */}
            <motion.div
              whileHover={{ x: 5 }}
              className="pt-4"
            >
              <a
                href="#contato"
                className="inline-block px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 neon-border hover:glow-effect"
              >
                Vamos Conversar →
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
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
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
