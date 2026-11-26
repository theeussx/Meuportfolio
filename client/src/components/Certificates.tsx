import { ArrowUpRight, Award } from "lucide-react";
import { certificates } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/motion/Reveal";

export default function Certificates() {
  const { t } = useLanguage();
  return (
    <section
      id="certificados"
      className="section certificate-section"
      aria-labelledby="certificates-title"
      tabIndex={-1}
    >
      <div className="shell">
        <Reveal className="section-heading certificate-heading" delay={40}>
          <div>
            <p className="eyebrow">{t.credentialsLabel}</p>
            <h2 id="certificates-title">{t.credentials}</h2>
          </div>
          <div className="certificate-heading-aside">
            <p className="certificate-intro">{t.credentialsIntro}</p>
            <div className="certificate-count">
              <strong>{certificates.length}</strong>
              <span>{t.certificateCount}</span>
            </div>
          </div>
        </Reveal>
        <ul className="certificate-grid">
          {certificates.map(({ id, issuer, document, format }) => {
            const certificate = t.certificates.find(item => item.id === id);
            if (!certificate) return null;
            const { title, date } = certificate;
            return (
              <Reveal
                as="li"
                key={document}
                className="certificate-item"
                delay={100}
              >
                <a
                  className="certificate-card"
                  href={document}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.viewDocument}: ${title} · ${issuer} · ${date} · ${format}`}
                >
                  <span className="certificate-card-top">
                    <span className="certificate-icon">
                      <Award size={23} aria-hidden="true" />
                    </span>
                    <span className="certificate-format" aria-hidden="true">
                      {format}
                    </span>
                  </span>
                  <span className="certificate-card-info">
                    <strong>{title}</strong>
                    <small>
                      {issuer} <span aria-hidden="true">/</span> {date}
                    </small>
                  </span>
                  <span className="certificate-card-action">
                    {t.viewDocument}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
