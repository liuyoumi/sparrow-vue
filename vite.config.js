import {resolve} from "path";
import {defineConfig} from "vite";

import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import Components from "unplugin-vue-components/vite";
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers";
import {viteMockServe} from "vite-plugin-mock";

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
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
