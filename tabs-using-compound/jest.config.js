// jest.config.js
export default {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy", // mock CSS imports
    "^@/(.*)$": "<rootDir>/src/$1", // if you use path aliases
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
};
