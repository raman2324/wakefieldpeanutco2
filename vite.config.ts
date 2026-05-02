import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { copyFileSync, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const copyFavicon = () => ({
  name: "copy-favicon",
  buildStart() {
    const src = resolve(__dirname, "src/assets/wakefield-logo.png");
    const destDir = resolve(__dirname, "public");
    const dest = resolve(destDir, "favicon.png");
    if (!existsSync(destDir)) mkdirSync(destDir, { recursive: true });
    if (existsSync(src)) copyFileSync(src, dest);
  },
});

export default defineConfig({
  plugins: [
    copyFavicon(),
    TanStackRouterVite({ autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
