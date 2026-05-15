import { defineConfig } from "vitest/config";
import { resolve } from "node:path";

export default defineConfig({
  test: {
    environment: "happy-dom",
    include: ["tests/unit/**/*.test.{ts,tsx}"],
    globals: true,
    fileParallelism: false,
    maxWorkers: 1,
    setupFiles: [],
  },
  resolve: {
    alias: { "@": resolve(__dirname) },
  },
});
