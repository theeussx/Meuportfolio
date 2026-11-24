import { useEffect, useState } from "react";
import { navigation } from "@/content/portfolio";

const sectionIds = ["inicio", ...navigation, "contato"] as const;
type SectionId = (typeof sectionIds)[number];

export function useActiveSection() {
  const [active, setActive] = useState<SectionId>("inicio");

  useEffect(() => {
    const sections = sectionIds.flatMap(id => {
      const element = document.getElementById(id);
      return element ? [{ id, element }] : [];
    });
    let frame = 0;

    function update() {
      frame = 0;
      const readingLine = Math.max(88, window.innerHeight * 0.31);
      let current: SectionId = "inicio";
      for (const { id, element } of sections) {
        if (element.getBoundingClientRect().top > readingLine) break;
        current = id;
      }
      setActive(current);
    }

    function schedule() {
      if (frame === 0) frame = requestAnimationFrame(update);
    }

    const main = document.getElementById("conteudo");
    const resize =
      typeof ResizeObserver === "function"
        ? new ResizeObserver(schedule)
        : null;
    if (main) resize?.observe(main);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      resize?.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  return active;
}
