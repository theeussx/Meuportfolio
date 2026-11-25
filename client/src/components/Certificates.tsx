import { ArrowUpRight, FileText } from "lucide-react";
import { certificates } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/motion/Reveal";

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <Reveal
      as="section"
      id="certificados"
      className="certificate-section"
      ariaLabelledBy="certificates-title"
      delay={160}
    >
      <h3 id="certificates-title">{t.credentials}</h3>
      <ul>
        {certificates.map(({ id, issuer, document, format }) => {
          const certificate = t.certificates.find(item => item.id === id);
          if (!certificate) return null;
          const { title, date } = certificate;
          return (
            <li key={document}>
              <a
                href={document}
                target="_blank"
                rel="noopener noreferrer"
                title={t.viewDocument}
                aria-label={`${title} · ${issuer} · ${format}`}
              >
                <FileText size={21} aria-hidden="true" />
                <span>
                  <strong>{title}</strong>
                  <small>
                    {issuer} <span aria-hidden="true">/</span> {date}
                  </small>
                </span>
                <span className="certificate-format" aria-hidden="true">
                  {format}
                </span>
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </Reveal>
  );
}
