import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { languages, type Language } from "@/content/portfolio";

const storageKey = "portfolio-language";

const LanguageContext = createContext<{
  language: Language;
  t: (typeof languages)[Language];
  toggleLanguage: () => void;
} | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("br");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved === "br" || saved === "en") setLanguage(saved);
    } catch {
      // Preferences are optional when browser storage is unavailable.
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = languages[language].locale;
  }, [language]);

  function toggleLanguage() {
    const next = language === "br" ? "en" : "br";
    setLanguage(next);
    try {
      localStorage.setItem(storageKey, next);
    } catch {
      // The current visit still uses the selected language.
    }
  }

  return (
    <LanguageContext.Provider
      value={{ language, t: languages[language], toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("LanguageProvider is missing");
  return context;
}
