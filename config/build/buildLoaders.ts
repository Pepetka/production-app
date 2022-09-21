import { loader } from "mini-css-extract-plugin"
import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
	const babelLoader = {
		test: /\.(js|ts|jsx|tsx)$/,
		exclude: /node_modules/,
		use: {
			loader: "babel-loader",
			options: {
				presets: ['@babel/preset-env']
			}
		}
	}

	const typescriptLoader = {
		test: /\.tsx?$/,
		use: "ts-loader",
		exclude: /node_modules/,
	}

	const svgLoader = {
		test: /\.svg$/,
		use: ["@svgr/webpack"],
	}

	const fileLoader = {
		test: /\.(png|jpe?g|gif)$/i,
		use: [
			{
				loader: "file-loader",
			},
		],
	}

	const styleLoader = {
		test: /\.s[ac]ss$/i,
		use: [
			isDev ? "style-loader" : loader,
			{
				loader: "css-loader",
				options: {
					modules: {
						auto: (resPath: string) => !!resPath.includes(".module."),
						localIdentName: isDev ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
					},
				},
			},
			"sass-loader",
		],
	}

	return [babelLoader, typescriptLoader, styleLoader, svgLoader, fileLoader]
}
