import webpack, { RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCSSLoader } from '../build/loaders/buildCSSLoader';

export default ({ config }: {config: webpack.Configuration}) => {
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
		new webpack.DefinePlugin({
			__IS_DEV__: JSON.stringify(false),
			__PROJECT__: JSON.stringify('storybook'),
			__API__: JSON.stringify('https://storybookapi.ru'),
		}),
	);

	return config;
};
