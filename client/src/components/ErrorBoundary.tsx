import { RotateCcw } from "lucide-react";
import { Component, type ReactNode } from "react";

export default class ErrorBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) return this.props.children;

    const isEnglish =
      typeof document !== "undefined" && document.documentElement.lang === "en";
    return (
      <main className="shell not-found">
        <h1>{isEnglish ? "Something went wrong." : "Algo deu errado."}</h1>
        <button
          type="button"
          className="button button-primary"
          onClick={() => window.location.reload()}
        >
          <RotateCcw size={18} aria-hidden="true" />
          {isEnglish ? "Reload page" : "Recarregar página"}
        </button>
      </main>
    );
  }
}
