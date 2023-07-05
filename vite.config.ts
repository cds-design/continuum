import minifyLiterals from "rollup-plugin-minify-html-literals-v3";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import postCSS from "./scripts/postCSS";
import typeModifier from "./scripts/typeModifier";
import cem from "vite-plugin-cem";

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "#globals.css?used",
        replacement: "./src/styles/globals.css.ts",
      },
    ],
  },
  build: {
    minify: "terser",
    lib: {
      entry: {
        continuum: "./src/index.ts",
        constants: "./src/constants.ts",
      },
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [
    postCSS(),
    minifyLiterals(),
    dts({
      staticImport: true,
      exclude: "src/**/*.css.ts",
      outputDir: "types",
      afterBuild: typeModifier,
    }),
    cem({
      files: ["src/components/*/index.ts"],
      output: "custom-elements.json",
      lit: true,
      plugins: [],
    }),
  ],
});
