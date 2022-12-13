import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin';

export const buildBabelLoader = (isDev: boolean, isTSX: boolean) => ({
	test: isTSX ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
	exclude: /node_modules/,
	use: {
		loader: 'babel-loader',
		options: {
			cacheDirectory: true,
			presets: ['@babel/preset-env'],
			plugins: [
				[
					'@babel/plugin-transform-typescript',
					{
						isTSX,
					},
				],
				'@babel/plugin-transform-runtime',
				(isTSX && !isDev) && [
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
