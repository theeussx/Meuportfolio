import { ArrowUp, ArrowUpRight } from "lucide-react";
import { identity, navigation } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { Brand } from "./SiteHeader";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-main">
          <div>
            <Brand />
            <p>{t.role}</p>
          </div>
          <nav aria-label={t.footerLabel}>
            {navigation.map(id => (
              <a href={`#${id}`} key={id}>
                {t.nav[id]}
              </a>
            ))}
            <a href="#contato">{t.contact}</a>
          </nav>
          <div className="footer-social">
            <a href={identity.github} target="_blank" rel="noopener noreferrer">
              GitHub <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a
              href={identity.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram <ArrowUpRight size={13} aria-hidden="true" />
            </a>
            <a href={`mailto:${identity.email}`}>
              E-mail <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            © {new Date().getFullYear()} {identity.name}. {t.rights}
          </small>
          <a href="#privacidade">{t.privacy}</a>
          <a href="#inicio">
            {t.top}
            <ArrowUp size={14} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
