module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'airbnb',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:i18next/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'plugin:storybook/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['ulbi-tv-plugin', 'react', 'jsx-a11y', '@typescript-eslint', 'i18next', 'react-hooks', 'unused-imports'],
	rules: {
		'import/order': [
			'error',
			{
				'newlines-between': 'never',
				pathGroups: [
					{
						pattern: '@/**',
						group: 'external',
						position: 'after',
					},
				],
			},
		],
		'max-len': 'off',
		'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
		'unused-imports/no-unused-imports': 'error',
		'ulbi-tv-plugin/path-checker': [
			'error',
			{
				alias: '@',
			},
		],
		'ulbi-tv-plugin/public-api-imports': [
			'error',
			{
				alias: '@',
			},
		],
		'ulbi-tv-plugin/layer-imports': [
			'error',
			{
				alias: '@',
				ignoreImportPatterns: ['**/Store'],
			},
		],
		'react/no-array-index-key': 'off',
		'no-tabs': 'off',
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.tsx'],
			},
		],
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
		'i18next/no-literal-string': [
			'error',
			{
				markupOnly: true,
				ignoreAttribute: [
					'size',
					'popupPosition',
					'as',
					'TitleTag',
					'Tag',
					'data-testid',
					'align',
					'reducerKey',
					'target',
					'direction',
					'justify',
					'aria-label',
				],
			},
		],
		'no-console': 'off',
		'linebreak-style': ['error', 'unix'],
		'react/display-name': 'off',
		'jsx-a11y/no-static-element-interactions': 'off',
		'jsx-a11y/click-events-have-key-events': 'off',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'no-param-reassign': 'off',
		'consistent-return': 'off',
		'no-undef': 'off',
		'react/prop-types': 'off',
	},
	globals: {
		__IS_DEV__: true,
		__PROJECT__: true,
		__API__: true,
	},
	overrides: [
		{
			files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
			rules: {
				'i18next/no-literal-string': 'off',
				'max-len': 'off',
			},
		},
	],
};
