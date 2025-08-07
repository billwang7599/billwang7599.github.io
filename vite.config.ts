import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
    plugins: [react()],
    server: {
        hmr: true, // explicitly enable HMR (default true)
    },
    base: "/billwang7599.github.io/",
    build: {
        outDir: "dist",
    },
});
