import type { Config } from "@jest/types";
// Sync object
const config: Config.InitialOptions = {
  moduleDirectories: ["node_modules", "src"],
  verbose: true,
  testEnvironment: "node",
  testRegex: "/tests/.*\\.(test|spec)?\\.(ts|tsx)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
export default config;
