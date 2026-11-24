import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const container = document.getElementById("root")!;
const app = <App pathname={window.location.pathname} />;

const page = ["/", "/index.html"].includes(window.location.pathname)
  ? "home"
  : "not-found";

if (container.hasChildNodes() && container.dataset.page === page) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
