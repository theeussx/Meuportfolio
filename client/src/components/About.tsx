import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Certificates from "./Certificates";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="sobre"
      className="section about-section"
      aria-labelledby="about-title"
      tabIndex={-1}
    >
      <div className="shell about-layout">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.aboutLabel}</p>
            <h2 id="about-title">{t.aboutTitle}</h2>
          </div>
        </div>
        <div className="about-copy">
          {t.about.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="link" href="#contato">
            {t.talk}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </div>
        <Certificates />
      </div>
    </section>
  );
}
