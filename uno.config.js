import {defineConfig} from "unocss";
import transformerVariantGroup from "@unocss/transformer-variant-group";

export default defineConfig({
  theme: {
    colors: {
      primary: "var(--color-primary)",
    },
  },
  transformers: [
    transformerVariantGroup(),
  ],
});