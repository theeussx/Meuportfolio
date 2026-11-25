import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "article" | "section" | "li";
  dataProject?: string;
  id?: string;
  role?: string;
  ariaLabel?: string;
  ariaLabelledBy?: string;
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  as = "div",
  dataProject,
  id,
  role,
  ariaLabel,
  ariaLabelledBy,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  // SSR must remain visible; the client arms the progressive reveal after hydration.
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setReady(true);
    if (reducedMotion) {
      setVisible(true);
      return;
    }
    const element = ref.current;
    if (!element || typeof IntersectionObserver !== "function") {
      setVisible(true);
      return;
    }
    const rect = element.getBoundingClientRect();
    if (rect.top <= window.innerHeight) setVisible(true);
    else setVisible(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8%" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const Component = as;
  return (
    <Component
      ref={ref as never}
      id={id}
      data-project={dataProject}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={`motion-reveal ${ready ? "motion-ready" : ""} ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  );
}
