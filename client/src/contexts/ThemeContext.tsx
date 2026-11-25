import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

const storageKey = "theme";
const ThemeContext = createContext<{
  theme: Theme;
  setTheme: (theme: Theme) => void;
} | null>(null);

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.classList.toggle("dark", theme === "dark");
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute("content", theme === "dark" ? "#0d1016" : "#f5f6f8");
}

function transitionTheme(next: Theme) {
  const update = () => applyTheme(next);
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const viewTransitionDocument = document as Document & {
    startViewTransition?: (callback: () => void) => unknown;
  };
  if (reduced || !viewTransitionDocument.startViewTransition) {
    update();
    return;
  }
  try {
    viewTransitionDocument.startViewTransition(update);
  } catch {
    update();
  }
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    const current = document.documentElement.dataset.theme;
    if (current === "light" || current === "dark") setThemeState(current);
  }, []);

  function setTheme(next: Theme) {
    transitionTheme(next);
    setThemeState(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The current visit still uses the selected theme.
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("ThemeProvider is missing");
  return context;
}
