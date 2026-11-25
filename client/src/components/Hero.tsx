import { ArrowDownRight, ArrowUpRight, Github, MapPin } from "lucide-react";
import { identity } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section id="inicio" className="shell hero" aria-labelledby="hero-title">
      <div className="hero-body">
        <p className="eyebrow hero-role">
          {t.role}
        </p>
        <h1 id="hero-title">
          {t.heroHeading[0]}
          <br />
          <span>{t.heroHeading[1]}</span>
        </h1>
        <p className="hero-summary">{t.heroSummary}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            {t.explore}
            <ArrowDownRight size={19} aria-hidden="true" />
          </a>
          <a className="button button-outline" href="#contato">
            {t.heroTalk}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <a
          className="link hero-github"
          href={identity.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={17} aria-hidden="true" />
          GitHub <span aria-hidden="true">/</span> {identity.brand}
          <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
      <figure className="portrait">
        <div className="portrait-frame">
          <img
            src="/media/mateus-800.webp"
            srcSet="/media/mateus-480.webp 480w, /media/mateus-800.webp 800w, /media/mateus-1120.webp 1120w"
            sizes="(min-width: 1250px) 410px, (min-width: 900px) 35vw, (min-width: 700px) 34vw, (min-width: 520px) 440px, 88vw"
            width={800}
            height={1040}
            fetchPriority="high"
            alt={identity.name}
          />
        </div>
        <figcaption>
          <span>{identity.name}</span>
          <span>
            <MapPin size={14} aria-hidden="true" />
            {t.location}
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
