// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    // 🚨 IMPORTANT: Replace 'your-repo-name' with the actual name of your GitHub repository.
    // If this is a user/organization page (yourusername.github.io), you can remove this 'base' line
    // or set it to '/' if you prefer.
    base: "/billwang7599.github.io/", // e.g., '/my-portfolio-site/'
    build: {
        outDir: "dist", // Default, but good to be explicit
    },
});
