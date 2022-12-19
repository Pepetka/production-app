/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

import path from 'path';

export default {
	clearMocks: true,
	testEnvironment: 'jsdom',
	coveragePathIgnorePatterns: [
		'\\\\node_modules\\\\',
	],
	moduleDirectories: [
		'node_modules',
	],
	moduleFileExtensions: [
		'js',
		'jsx',
		'ts',
		'tsx',
		'json',
		'node',
	],
	testMatch: [
		'<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
	],
	modulePaths: [
		'<rootDir>src',
	],
	rootDir: '../../',
	setupFilesAfterEnv: [
		'<rootDir>/config/jest/jest-setup.ts',
	],
	moduleNameMapper: {
		'\\.s?css$': 'identity-obj-proxy',
		'\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'\\.jpeg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'\\.png': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
		'@/(.*)$': '<rootDir>/src/$1',
	},
	globals: {
		__IS_DEV__: true,
		__PROJECT__: 'jest',
		__API__: JSON.stringify(''),
	},
	reporters: [
		'default',
		['jest-html-reporters', {
			publicPath: '<rootDir>/reports/unit',
			filename: 'report.html',
			openReport: false,
			inlineSource: true,
		}],
	],
};
