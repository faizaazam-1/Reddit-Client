// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Reddit-Client/", // if it's a project repository
  plugins: [react()],
});
