import {resolve} from "path";
import {defineConfig} from "vite";

import Vue from "@vitejs/plugin-vue";
import VueJsx from "@vitejs/plugin-vue-jsx";
import UnoCSS from "unocss/vite";
import {viteMockServe} from "vite-plugin-mock";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    Vue(),
    VueJsx(),
    UnoCSS(),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
      ],
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false,
        }),
      ],
    }),
    viteMockServe({
      enable: true,
      mockPath: "mock",
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(process.cwd(), "src"),
      },
    ],
  },
});
