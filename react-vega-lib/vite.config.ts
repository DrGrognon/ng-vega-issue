import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    dts({ rollupTypes: true, tsconfigPath: "./tsconfig.app.json" }),
    react(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "vega", "vega-lite"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "react",
          "react-dom": "react-dom",
          vega: "vega",
          "vega-lite": "vega-lite",
        },
      },
    },
  },
});
