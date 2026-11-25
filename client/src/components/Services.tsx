import { ArrowDown, ArrowRight } from "lucide-react";
import { serviceIds, type ServiceId } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import Reveal from "@/components/motion/Reveal";

export default function Services({
  onRequest,
}: {
  onRequest: (id: ServiceId) => void;
}) {
  const { t } = useLanguage();
  return (
    <section
      id="servicos"
      className="section services-section"
      aria-labelledby="services-title"
      tabIndex={-1}
    >
      <div className="shell services-layout">
        <Reveal className="section-heading services-heading" delay={40}>
          <div>
            <p className="eyebrow">{t.servicesLabel}</p>
            <h2 id="services-title">{t.servicesTitle}</h2>
          </div>
          <p>{t.servicesIntro}</p>
        </Reveal>
        <div>
          <div className="service-list">
            {serviceIds.map(id => (
              <Reveal as="article" key={id} className="service-row" delay={100}>
                <div>
                  <h3>{t.services[id].title}</h3>
                  <p>{t.services[id].description}</p>
                </div>
                <a
                  className="link service-action"
                  href="#contato"
                  onClick={() => onRequest(id)}
                  aria-label={`${t.quoteShort} · ${t.services[id].title}`}
                >
                  {t.quoteShort}
                  <ArrowDown size={15} aria-hidden="true" />
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal className="process" delay={180}>
            <h3>{t.processLabel}</h3>
            <ol>
              {t.process.map((step, index) => (
                <li key={step}>
                  {index > 0 && <ArrowRight size={14} aria-hidden="true" />}
                  {step}
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
