import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Certificates from "./Certificates";
import Reveal from "@/components/motion/Reveal";

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
        <Reveal className="section-heading" delay={40}>
          <div>
            <p className="eyebrow">{t.aboutLabel}</p>
            <h2 id="about-title">{t.aboutTitle}</h2>
          </div>
        </Reveal>
        <Reveal className="about-copy" delay={100}>
          {t.about.map(paragraph => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <a className="link" href="#contato">
            {t.talk}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </Reveal>
        <Certificates />
      </div>
    </section>
  );
}
