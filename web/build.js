// build.js
require("esbuild").build({
  entryPoints: ["src/embed/index.tsx"],
  bundle: true,
  outfile: "dist/cookie-banner.js",
  minify: true,
  format: "iife",
  globalName: "CookieBanner",
});
