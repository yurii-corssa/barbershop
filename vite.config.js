import { defineConfig } from "vite";
import { glob } from "glob";
import { viteStaticCopy } from "vite-plugin-static-copy";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",
  base: "/barbershop/",
  build: {
    rollupOptions: {
      input: glob.sync("./src/*.html"),
      output: {
        assetFileNames: "assets/[name].[ext]",
      },
    },
    outDir: "../dist",
  },
  plugins: [
    injectHTML(),
    FullReload(["./src/**/**.html"]),
    viteStaticCopy({
      targets: [
        {
          src: "img/main-page/hero/*",
          dest: "assets/",
        },
      ],
    }),
  ],
});
