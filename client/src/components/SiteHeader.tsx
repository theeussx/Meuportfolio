import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { ThemeSwitch } from "@/components/arc/theme-switch/theme-switch";
import { identity, navigation } from "@/content/portfolio";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "@/contexts/ThemeContext";
import { useActiveSection } from "@/hooks/useActiveSection";

export function Brand() {
  return (
    <a className="brand" href="/#inicio">
      {identity.brand}
      <span aria-hidden="true">.</span>
    </a>
  );
}

export default function SiteHeader() {
  const { language, t, toggleLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const active = useActiveSection();
  const [expanded, setExpanded] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (expanded) firstMenuLink.current?.focus();
  }, [expanded]);

  useEffect(() => {
    const desktop = matchMedia("(min-width: 900px)");
    function onDesktop(event: MediaQueryListEvent) {
      if (event.matches) setExpanded(false);
    }
    desktop.addEventListener("change", onDesktop);
    return () => desktop.removeEventListener("change", onDesktop);
  }, []);

  function closeAfterNavigation(id: string) {
    setExpanded(false);
    document.getElementById(id)?.focus({ preventScroll: true });
  }

  return (
    <>
      <a href="#conteudo" className="skip-link">
        {t.skip}
      </a>
      <header
        className="header"
        onKeyDown={event => {
          if (expanded && event.key === "Escape") {
            setExpanded(false);
            menuButton.current?.focus();
          }
        }}
        onBlur={event => {
          if (
            expanded &&
            event.relatedTarget instanceof Node &&
            !event.currentTarget.contains(event.relatedTarget)
          ) {
            setExpanded(false);
          }
        }}
      >
        <div className="shell header-inner">
          <Brand />
          <nav
            id="site-navigation"
            className="site-nav"
            aria-label={t.navLabel}
            data-expanded={expanded}
          >
            {navigation.map((id, index) => (
              <a
                ref={index === 0 ? firstMenuLink : undefined}
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                onClick={() => closeAfterNavigation(id)}
              >
                {t.nav[id]}
              </a>
            ))}
            <a
              className="mobile-contact"
              href="#contato"
              aria-current={active === "contato" ? "location" : undefined}
              onClick={() => closeAfterNavigation("contato")}
            >
              {t.contact}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
          <div className="header-controls">
            <button
              className="icon-action language-action"
              type="button"
              onClick={toggleLanguage}
              aria-label={t.language}
            >
              <span aria-hidden="true">{language === "br" ? "BR" : "EN"}</span>
            </button>
            <ThemeSwitch
              theme={theme}
              onThemeChange={setTheme}
              label={theme === "dark" ? t.switchToLight : t.switchToDark}
              iconOnly
              className="theme-action"
            />
            <a
              className="header-contact"
              href="#contato"
              aria-current={active === "contato" ? "location" : undefined}
              onClick={() => closeAfterNavigation("contato")}
            >
              {t.contact}
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
            <button
              ref={menuButton}
              className="icon-action menu-action"
              type="button"
              aria-expanded={expanded}
              aria-controls="site-navigation"
              aria-label={t.menu}
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? (
                <X size={21} aria-hidden="true" />
              ) : (
                <Menu size={21} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
