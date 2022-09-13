import HTMLWebpackPlugin from "html-webpack-plugin"
import MiniCssExtractPlugin from "mini-css-extract-plugin"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import { BuildOptions } from "./types/config"

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: options.paths.html,
		}),
		new ProgressPlugin(),
		new MiniCssExtractPlugin({
			filename: "css/[name].[contenthash].css",
			chunkFilename: "css/[name].[contenthash].css",
		}),
	]
}
