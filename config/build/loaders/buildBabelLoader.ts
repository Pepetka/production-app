import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export const buildBabelLoader = (isDev: boolean, isTSX: boolean) => ({
	test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			presets: ['@babel/preset-env'],
			plugins: [
				[
					'@babel/plugin-transform-typescript',
					{
						isTSX,
					},
				],
				'@babel/plugin-transform-runtime',
				isTSX && [
					babelRemovePropsPlugin,
					{
						props: ['data-testid'],
					},
				],
				isDev && require.resolve('react-refresh/babel'),
			].filter(Boolean),
		},
	},
});
