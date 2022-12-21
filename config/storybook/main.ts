import path from 'path';
import { Configuration, RuleSetRule, DefinePlugin } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';

export default {
	stories: [
		'../../src/**/*.stories.@(js|jsx|ts|tsx)',
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-addon-mock',
	],
	framework: '@storybook/react',
	staticDirs: ['../../public'],
	core: {
		builder: '@storybook/builder-webpack5',
	},
	webpackFinal: async (config: Configuration) => {
		const paths: BuildPaths = {
			entry: '',
			html: '',
			src: path.resolve(__dirname, '..', '..', 'src'),
			output: '',
			locales: '',
			buildLocales: '',
		};
		config!.resolve!.modules!.push(paths.src);
		config!.resolve!.extensions!.push('.ts', '.tsx');
		config!.resolve!.alias = { ...config!.resolve!.alias, '@': paths.src };
		config!.module!.rules!.push(buildCSSLoader(true));

		// @ts-ignore
		config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
			if (/svg/.test(rule.test as string)) return { ...rule, exclude: /\.svg$/i };

			return rule;
		});

		config!.module!.rules!.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		config!.plugins!.push(
			new DefinePlugin({
				__IS_DEV__: JSON.stringify(true),
				__PROJECT__: JSON.stringify('storybook'),
				__API__: JSON.stringify('https://storybookapi.ru'),
			}),
		);

		return config;
	},
};
