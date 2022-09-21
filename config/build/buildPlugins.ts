import HTMLWebpackPlugin from "html-webpack-plugin"
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import webpack, { ProgressPlugin, WebpackPluginInstance } from "webpack"
import { BuildOptions } from "./types/config"

export function buildPlugins({paths, isDev}: BuildOptions): WebpackPluginInstance[] {
	const plugins = [
		new HTMLWebpackPlugin({
			template: paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css",
			chunkFilename: "css/[name].[contenthash].css",
		}),
		new webpack.DefinePlugin({
			__IS_DEV_: JSON.stringify(isDev),
		})
	]

	if (isDev) {
		plugins.push(new webpack.HotModuleReplacementPlugin())
		plugins.push(new ReactRefreshWebpackPlugin())
	}

	return plugins
}
