import { motion } from "framer-motion";
import { Award, ExternalLink, Download } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  category: "web" | "backend" | "tools" | "eventos";
  image?: string;
  certificateUrl?: string;
  description: string;
}

const categoryColors = {
  web: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 hover:border-cyan-500/60",
  backend:
    "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60",
  tools: "from-orange-500/20 to-red-500/20 border-orange-500/30 hover:border-orange-500/60",
  eventos:
    "from-green-500/20 to-emerald-500/20 border-green-500/30 hover:border-green-500/60",
} satisfies Record<CertificateCardProps["category"], string>;

export default function CertificateCard({
  title,
  issuer,
  date,
  category,
  image,
  certificateUrl,
  description,
}: CertificateCardProps) {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group h-full"
    >
      <div
        className={`h-full rounded-lg overflow-hidden neon-border bg-slate-900/50 backdrop-blur hover:glow-effect transition-all duration-300 flex flex-col bg-gradient-to-br ${categoryColors[category]}`}
      >
        {/* Imagem do Certificado */}
        <div className="relative h-40 overflow-hidden bg-slate-800">
          {image ? (
            <>
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
              <Award className="w-12 h-12 text-cyan-400/50" />
            </div>
          )}
        </div>

        {/* Conteúdo */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Categoria Badge */}
          <div className="mb-3 inline-block">
            <span className="px-3 py-1 text-xs font-mono bg-slate-800/50 border border-slate-700 text-cyan-400 rounded-full">
              {t.certificates.categoryLabels[category]}
            </span>
          </div>

          {/* Título */}
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
            {title}
          </h3>

          {/* Emissor */}
          <p className="text-cyan-400 text-sm font-medium mb-1">{issuer}</p>

          {/* Data */}
          <p className="text-gray-500 text-xs mb-3">{date}</p>

          {/* Descrição */}
          <p className="text-gray-400 text-sm mb-4 flex-1 line-clamp-2">
            {description}
          </p>

          {/* Links */}
          {certificateUrl && (
            <div className="pt-4 border-t border-slate-700">
              <a
                href={certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-cyan-500/20 border border-slate-700 hover:border-cyan-500/50 text-cyan-400 rounded transition-all duration-300 group/link"
              >
                <ExternalLink className="w-4 h-4" />
                <span className="text-sm font-medium">{t.certificates.viewCertificate}</span>
              </a>
            </div>
          )}
        </div>

        {/* Badge de verificação */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center"
        >
          <Award className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}
