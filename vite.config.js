import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Conference-ticket-generator/",
  plugins: [tailwindcss()],
});
