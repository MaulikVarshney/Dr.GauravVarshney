import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Change the base path to match your repo name
export default defineConfig({
  plugins: [react()],
  base: "/Dr-GauravVarshney/",
  server: { port: 5173 },
});
