import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // <--- CAMBIATO DA "/react-portfolio/" A "/"
  plugins: [react()],
});
