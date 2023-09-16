const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './src',
});

const customJestConfig = {
	transform: { '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest' },
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@contexts/(.*)$': '<rootDir>/src/contexts/$1',
		'^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@services/(.*)$': '<rootDir>/src/services/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
	testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
