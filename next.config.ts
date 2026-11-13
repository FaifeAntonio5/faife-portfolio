import type { NextConfig } from "next";

const tailwind = ["@tailwindcss/turbopack"];
const isModule = /\.module\.css$/;

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": [
        // CSS Modules (Button.module.css, Hero.module.css...) continuam a ser módulos
        { condition: { path: isModule }, loaders: tailwind, as: "*.module.css" },
        // CSS global (globals.css)
        { condition: { not: { path: isModule } }, loaders: tailwind, as: "*.css" },
      ],
    },
  },
};

export default nextConfig;
