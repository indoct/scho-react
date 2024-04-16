// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import svgr from "vite-plugin-svgr";

// export default defineConfig({
//   plugins: [react(), svgr()],
//   build: {
//     outDir: "build",
//   },
//   loader: { ".js": "jsx" },
// });

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
