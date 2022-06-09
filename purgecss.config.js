// create purgecss safelist for docsearch classes and ids

module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  css: [".next/static/css/*.css"],
  defaultExtractor: (content) => content.match(/[\w-/:.]+(?<!:)/g) || [],
  output: ".next/static/css",
  keyframes: true,
  skippedContentGlobs: ["pages-data/**"],
  safelist: [
    "body",
    "root",
    "html",
    /^DocSearch.*/g,
    /^DocSearch.*/,
    /^,.DocSearch.*/,
  ],
};
