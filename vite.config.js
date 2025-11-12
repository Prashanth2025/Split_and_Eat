import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ghPages from "vite-plugin-gh-pages";

export default defineConfig({
  plugins: [react(), ghPages()],
  base: "/Split_and_Eat/", // ✅ Correct: only repo name, with leading and trailing slash
});
