import { ArrowLeft } from "lucide-react";
import { Brand } from "@/components/SiteHeader";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();
  return (
    <main className="shell not-found">
      <Brand />
      <p>404</p>
      <h1>{t.notFound}</h1>
      <a className="button button-primary" href="/">
        <ArrowLeft size={18} aria-hidden="true" />
        {t.backHome}
      </a>
    </main>
  );
}
