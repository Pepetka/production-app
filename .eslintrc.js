module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:import/errors',
		'plugin:import/warnings',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react',
		'@typescript-eslint',
		'i18next',
	],
	rules: {
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'no-tabs': 'off',
		indent: [2, 'tab'],
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
		'import/no-unresolved': 'off',
		'import/prefer-default-export': 'off',
		'no-unused-vars': 'warn',
		'react/require-default-props': 'off',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'warn',
		'react/function-component-definition': 'off',
		'no-shadow': 'off',
		'import/extensions': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-underscore-dangle': 'off',
		'max-len': ['error', { code: 150 }],
		'i18next/no-literal-string': ['error', {
			markupOnly: true,
			ignoreAttribute: ['data-testid'],
		}],
		'no-console': 'off',
		'linebreak-style': ['error', 'windows'],
		'react/display-name': 'off',
	},
	globals: {
		__IS_DEV__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.test.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
			},
		},
	],
};
