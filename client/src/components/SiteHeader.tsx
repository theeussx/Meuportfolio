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
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
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

  useEffect(() => {
    let frame = 0;
    function updateScrollState() {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 18);
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    }
    function schedule() {
      if (frame === 0) frame = requestAnimationFrame(updateScrollState);
    }
    updateScrollState();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
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
        className={`header ${scrolled ? "is-scrolled" : ""}`}
        onKeyDown={event => {
          if (!expanded) return;
          if (event.key === "Escape") {
            setExpanded(false);
            menuButton.current?.focus();
            return;
          }
          if (event.key === "Tab") {
            const focusable = Array.from(
              event.currentTarget.querySelectorAll<HTMLElement>(
                'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
              )
            ).filter(element => element.getClientRects().length > 0);
            if (focusable.length === 0) return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!event.shiftKey && event.target === last) {
              event.preventDefault();
              first.focus();
            } else if (event.shiftKey && event.target === first) {
              event.preventDefault();
              last.focus();
            }
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
        <span
          className="reading-progress"
          style={{ transform: `scaleX(${progress / 100})` }}
          aria-hidden="true"
        />
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
              onThemeChange={next => setTheme(next)}
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
