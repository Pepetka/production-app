import HTMLWebpackPlugin from "html-webpack-plugin"
import { ProgressPlugin, WebpackPluginInstance } from "webpack"
import { BuildOptions } from "./types/config"

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({
			template: options.paths.html,
		}),
		new ProgressPlugin(),
	]
}
