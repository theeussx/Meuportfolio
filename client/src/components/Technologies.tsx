import { ArrowUpRight, Github } from "lucide-react";
import { identity } from "@/content/portfolio";
import { projects } from "@/content/projects";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Technologies() {
  const { t } = useLanguage();
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
        </div>
        <dl className="skills-list">
          {t.skills.map(({ title, tools, use }) => (
            <div key={title} className="skill-row">
              <dt>{title}</dt>
              <dd>{tools}</dd>
              <dd>{use}</dd>
            </div>
          ))}
        </dl>
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
