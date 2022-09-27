import { loader } from 'mini-css-extract-plugin';
import { RuleSetRule } from 'webpack';
import { BuildOptions } from './types/config';
import { buildCSSLoader } from './loaders/buildCSSLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|ts|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env'],
			},
		},
	};

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: 'ts-loader',
		exclude: /node_modules/,
	};

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

	return [babelLoader, typescriptLoader, styleLoader, svgLoader, fileLoader];
}
