import path from "path"
import HTMLWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"

const config: webpack.Configuration = {
	mode: "development",
	entry: {
		bundle: path.resolve(__dirname, "src", "index.ts"),
	},
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "[name].[contenthash].js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: "ts-loader",
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
		}),
		new webpack.ProgressPlugin(),
	],
}

export default config
