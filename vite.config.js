import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Basic Vite + React setup.
// Path aliases (@components, @pages, etc.) can be added here once we
// start wiring up imports.
export default defineConfig({
  plugins: [react()],
});
