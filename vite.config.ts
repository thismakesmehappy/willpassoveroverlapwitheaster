import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
// npm i vite-tsconfig-paths

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "./",
  build: {
    rollupOptions: {
      // preserveEntrySignatures: "exports-only",
      output: {
        minifyInternalExports: true,
        compact: true,
        // preserveModules: true,
        manualChunks: {
          dateholidays: ["date-holidays"],
          dateholidaysparser: ["date-holidays-parser"],
          moment: ["moment"],
          momenttimezones: ["node_modules/moment-timezone/moment-timezone.js"],
          momenttimezonespacked: [
            "node_modules/moment-timezone/data/packed/latest.json",
          ],
          react: ["react", "react-dom"],
          hebcal: ["@hebcal/core"],
          dateholidayparserdeps: [
            "caldate",
            "astronomia",
            "astronomia/data",
            "date-bengali-revised",
            "date-chinese",
            "date-easter",
            "deepmerge",
          ],
          dateholidaysparsersmall: [
            "node_modules/date-holidays-parser/lib/internal/hebrew-calendar.cjs",
            "node_modules/date-holidays-parser/lib/internal/utils.cjs",
            "node_modules/date-holidays-parser/lib/Easter.cjs",
            "node_modules/date-holidays-parser/lib/Holidays.cjs",
            "node_modules/date-holidays-parser/src/Parser.js",
            "node_modules/date-holidays-parser/src/Holidays.js",
            "node_modules/date-holidays-parser/src/Data.js",
            "node_modules/date-holidays-parser/src/Rule.js",
            "node_modules/date-holidays-parser/src/utils.js",
          ],
        },
      },
    },
  },
});
