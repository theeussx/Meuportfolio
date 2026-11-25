import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { identity } from "@/content/portfolio";
import { projects } from "@/content/projects";
import {
  technologies,
  technologyCategories,
  type TechnologyCategory,
} from "@/content/technologies";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Technologies() {
  const { language, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<TechnologyCategory>("all");
  const visibleTechnologies =
    activeCategory === "all"
      ? technologies
      : technologies.filter(technology => technology.category === activeCategory);

  return (
    <section
      id="tecnologias"
      className="section technology-section"
      aria-labelledby="technologies-title"
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.skillsLabel}</p>
            <h2 id="technologies-title">{t.skillsTitle}</h2>
          </div>
          <p className="skills-intro">{t.skillsIntro}</p>
        </div>
        <div className="technology-filters" role="group" aria-label={t.technologyFilterLabel}>
          {technologyCategories.map(category => (
            <button
              key={category}
              type="button"
              className="technology-filter"
              data-active={activeCategory === category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {t.technologyFilters[category]}
            </button>
          ))}
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">
          {language === "br"
            ? `${visibleTechnologies.length} tecnologias exibidas.`
            : `${visibleTechnologies.length} technologies shown.`}
        </p>
        <ul className="technology-grid">
          {visibleTechnologies.map(technology => {
            const iconColor = `#${technology.icon.hex}`;
            return (
              <li key={technology.id} className="technology-card">
                <div className="technology-icon" style={{ color: iconColor }}>
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label={technology.icon.title}
                    focusable="false"
                    dangerouslySetInnerHTML={{ __html: `<path d="${technology.icon.path}" />` }}
                  />
                </div>
                <h3>{technology.title}</h3>
                <p>{technology.description[language]}</p>
                <span className="technology-category">
                  {t.technologyFilters[technology.category]}
                </span>
              </li>
            );
          })}
        </ul>
        <section
          id="github"
          className="github-section"
          aria-labelledby="github-title"
        >
          <div>
            <Github size={25} aria-hidden="true" />
            <h3 id="github-title">{t.openTitle}</h3>
            <p>{t.openCopy}</p>
            <a
              href={`${identity.github}#user-content-07--contribution-activity`}
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.openActivity}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <ul>
            {projects.map(project => (
              <li key={project.id}>
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>
                    <span aria-hidden="true">theeussx / </span>
                    {project.name}
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}
