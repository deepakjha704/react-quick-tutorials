export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // mock CSS imports
    "^.+\\.svg$": "jest-transformer-svg",

    "^@/(.*)$": "<rootDir>/src/$1", // if you use path aliases
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.test.{js,jsx,ts,tsx}",
    "!src/**/index.{js,ts}",
    "!**/node_modules/**",
  ],
  coverageDirectory: "coverage",
};
