import autoprefixer from "autoprefixer";
import csso from "postcss-csso";

/** @type {import('postcss-load-config').Config} */
export default {
  syntax: "postcss-lit",
  plugins: [autoprefixer(), csso()],
};
