document.documentElement.classList.add("js");
let theme = "dark";
try {
  if (localStorage.getItem("theme") === "light") {
    theme = "light";
    document.documentElement.dataset.theme = "light";
    document.documentElement.classList.remove("dark");
    document.querySelector('meta[name="theme-color"]').content = "#f5f6f8";
  }
} catch {
  // The default theme is provided by the document.
}

const portraitBase =
  theme === "light" ? "/media/mateus-light" : "/media/mateus";
const portraitPreload = document.createElement("link");
portraitPreload.rel = "preload";
portraitPreload.as = "image";
portraitPreload.href = `${portraitBase}-800.webp`;
portraitPreload.setAttribute(
  "imagesrcset",
  `${portraitBase}-480.webp 480w, ${portraitBase}-800.webp 800w, ${portraitBase}-1120.webp 1120w`
);
portraitPreload.setAttribute(
  "imagesizes",
  "(min-width: 1250px) 410px, (min-width: 900px) 35vw, (min-width: 700px) 34vw, (min-width: 520px) 440px, 88vw"
);
portraitPreload.setAttribute("fetchpriority", "high");
document.head.append(portraitPreload);
