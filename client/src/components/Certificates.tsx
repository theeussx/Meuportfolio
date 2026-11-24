import { ArrowUpRight, FileText } from "lucide-react";
import { certificates } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section
      id="certificados"
      className="certificate-section"
      aria-labelledby="certificates-title"
    >
      <h3 id="certificates-title">{t.credentials}</h3>
      <ul>
        {certificates.map(({ issuer, document, format }, index) => {
          const { title, date } = t.certificates[index];
          return (
            <li key={document}>
              <a
                href={document}
                target="_blank"
                rel="noopener noreferrer"
                title={t.viewDocument}
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
    </section>
  );
}
