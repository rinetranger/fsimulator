module.exports = {
    testEnvironment: 'jest-environment-node',
    transform: {
      '^.+\\.(js|jsx|mjs|cjs|ts|tsx)$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!(axios)/)',
      ],
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFiles: ['<rootDir>/src/setupTests.js'],
  };
  