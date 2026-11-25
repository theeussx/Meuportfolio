import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Maximize2,
  Plus,
  X,
} from "lucide-react";
import { projects } from "@/content/projects";
import { useLanguage } from "@/contexts/LanguageContext";

type Project = (typeof projects)[number];

function ProjectGallery({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const [active, setActive] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLAnchorElement>(null);
  const shot = project.media[active];

  useEffect(() => {
    const element = dialog.current;
    if (!element) return;

    function onClose() {
      trigger.current?.focus();
    }
    element.addEventListener("close", onClose);
    return () => element.removeEventListener("close", onClose);
  }, []);

  if (!shot) return null;

  function change(direction: number) {
    setActive(
      current =>
        (current + direction + project.media.length) % project.media.length
    );
  }

  const controls = project.media.length > 1 && (
    <div className="gallery-controls">
      <button
        className="icon-action"
        type="button"
        aria-label={t.previous}
        onClick={() => change(-1)}
      >
        <ArrowLeft size={18} aria-hidden="true" />
      </button>
      <span className="counter" aria-live="polite">
        {active + 1} / {project.media.length}
      </span>
      <button
        className="icon-action"
        type="button"
        aria-label={t.next}
        onClick={() => change(1)}
      >
        <ArrowRight size={18} aria-hidden="true" />
      </button>
    </div>
  );

  return (
    <figure
      className="project-gallery"
      aria-label={`${t.gallery} · ${project.name}`}
    >
      <div className="project-media">
        <a
          ref={trigger}
          className="gallery-image-button"
          href={shot.src}
          aria-label={`${t.openImage} · ${project.name}`}
          onClick={event => {
            if (
              !dialog.current?.showModal ||
              event.metaKey ||
              event.ctrlKey ||
              event.shiftKey ||
              event.altKey
            )
              return;
            event.preventDefault();
            dialog.current.showModal();
          }}
        >
          <img
            key={shot.src}
            src={shot.src}
            width={shot.width}
            height={shot.height}
            alt={shot.alt[language]}
            loading="lazy"
            decoding="async"
          />
          <span aria-hidden="true">
            <Maximize2 size={18} />
          </span>
        </a>
      </div>
      <figcaption>
        <span aria-live="polite">{shot.caption[language]}</span>
        {controls}
      </figcaption>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label={`${t.gallery} · ${project.name}`}
        onKeyDown={event => {
          if (
            project.media.length < 2 ||
            !["ArrowLeft", "ArrowRight"].includes(event.key)
          )
            return;
          event.preventDefault();
          change(event.key === "ArrowLeft" ? -1 : 1);
        }}
      >
        <div className="dialog-toolbar">
          <strong>{project.name}</strong>
          <button
            className="icon-action"
            type="button"
            aria-label={language === "br" ? "Fechar galeria" : "Close gallery"}
            onClick={() => dialog.current?.close()}
            autoFocus
          >
            <X size={21} aria-hidden="true" />
          </button>
        </div>
        <img
          src={shot.src}
          width={shot.width}
          height={shot.height}
          alt={shot.alt[language]}
          loading="lazy"
          decoding="async"
        />
        <div className="dialog-toolbar">
          <span aria-live="polite">{shot.caption[language]}</span>
          {controls}
        </div>
      </dialog>
    </figure>
  );
}

function ProjectStory({ project }: { project: Project }) {
  const { language, t } = useLanguage();
  const copy = project.copy[language];
  return (
    <div className="project-story">
      <p className="eyebrow">{copy.category}</p>
      <h3>{project.name}</h3>
      <p className="project-summary">{copy.summary}</p>
      <ul
        className="tech-list"
        aria-label={language === "br" ? "Tecnologias" : "Technologies"}
      >
        {project.technologies.map(tool => (
          <li key={tool}>{tool}</li>
        ))}
      </ul>
      <details className="project-details">
        <summary>
          {t.caseStudy}
          <Plus size={18} aria-hidden="true" />
        </summary>
        <div className="project-details-copy">
          <p className="project-status">{copy.status}</p>
          <h4>{t.context}</h4>
          <p>{copy.context}</p>
          <h4>{t.contribution}</h4>
          <p>{copy.contribution}</p>
          <h4>{t.features}</h4>
          <ul>
            {copy.features.map(feature => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </details>
      <div className="project-links">
        {project.links.map(({ kind, url }) => (
          <a
            className="link"
            key={url}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.links[kind]}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        ))}
        {!project.links.some(({ kind }) => kind === "source") && (
          <a
            className="link"
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.source}
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { t } = useLanguage();
  const [featured, ...others] = projects;
  return (
    <section
      id="projetos"
      className="section projects-section"
      aria-labelledby="projects-title"
      tabIndex={-1}
    >
      <div className="shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.selected}</p>
            <h2 id="projects-title">{t.workTitle}</h2>
          </div>
          <p>{t.workIntro}</p>
        </div>
        {featured && (
          <article className="project-feature" data-project={featured.id}>
            <ProjectGallery project={featured} />
            <ProjectStory project={featured} />
          </article>
        )}
        <div className="project-pair">
          {others.map(project => (
            <article
              className="project-secondary"
              data-project={project.id}
              key={project.id}
            >
              <ProjectGallery project={project} />
              <ProjectStory project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
