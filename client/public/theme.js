document.documentElement.classList.add("js");
try {
  if (localStorage.getItem("theme") === "light") {
    document.documentElement.dataset.theme = "light";
    document.documentElement.classList.remove("dark");
    document.querySelector('meta[name="theme-color"]').content = "#f5f6f8";
  }
} catch {
  // The default theme is provided by the document.
}
