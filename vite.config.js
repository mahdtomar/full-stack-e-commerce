import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/full-stack-e-commerce",
  assetsInclude: ["**/*.svg"], // Ensure SVGs are included in the build
});
