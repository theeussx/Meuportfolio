import { readFile, writeFile } from "node:fs/promises";
import { render } from "../node_modules/.portfolio-prerender/entry-server.js";

const home = new URL("../dist/index.html", import.meta.url);
const template = await readFile(home, "utf8");
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
  throw new Error("The HTML template is missing its prerender target.");
}

function withContent(html, pathname, page) {
  return html.replace(
    placeholder,
    () => `<div id="root" data-page="${page}">${render(pathname)}</div>`
  );
}

await writeFile(home, withContent(template, "/", "home"));

const notFound = template
  .replace(
    /<title>.*?<\/title>/,
    "<title>Página não encontrada | Theeussx</title>"
  )
  .replace(
    /<link rel="canonical"[^>]*>/,
    '<meta name="robots" content="noindex" />'
  )
  .replace(/\s*<meta (?:property="og:[^"]+"|name="twitter:[^"]+")[^>]*>/g, "")
  .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, "");

await writeFile(
  new URL("../dist/404.html", import.meta.url),
  withContent(notFound, "/404", "not-found")
);
