import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

export default function App({ pathname }: { pathname: string }) {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          {pathname === "/" || pathname === "/index.html" ? (
            <Home />
          ) : (
            <NotFound />
          )}
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
