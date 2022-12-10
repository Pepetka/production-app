import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const codeBabelLoader = buildBabelLoader(isDev, false);
	const tsxCodeBabelLoader = buildBabelLoader(isDev, true);

	const svgLoader = {
		test: /\.svg$/,
		use: ['@svgr/webpack'],
	};

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: 'file-loader',
			},
		],
	};

	const styleLoader = buildCSSLoader(isDev);

	return [codeBabelLoader, tsxCodeBabelLoader, styleLoader, svgLoader, fileLoader];
}
