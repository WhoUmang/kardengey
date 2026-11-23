import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: "three-core",
              test: /node_modules[\\/]three[\\/]/,
              priority: 30,
              minSize: 200_000,
              maxSize: 450_000,
            },
            {
              name: "react-three",
              test: /node_modules[\\/]@react-three[\\/]/,
              priority: 25,
              minSize: 100_000,
              maxSize: 400_000,
            },
            {
              name: "motion-vendor",
              test: /node_modules[\\/](framer-motion|motion-dom|motion-utils)[\\/]/,
              priority: 20,
            },
            {
              name: "react-vendor",
              test: /node_modules[\\/](react|react-dom|scheduler)[\\/]/,
              priority: 15,
            },
            {
              name: "vendor",
              test: /node_modules[\\/]/,
              priority: 10,
              minSize: 30_000,
              maxSize: 400_000,
            },
          ],
        },
      },
    },
  },
});
