import path from 'path';
import { Configuration } from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';

export default (env: BuildEnv): Configuration => {
	const paths: BuildPaths = {
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		output: path.resolve(__dirname, 'build'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
		locales: path.resolve(__dirname, 'public', 'locales'),
		buildLocales: path.resolve(__dirname, 'build', 'locales'),
		icons: path.resolve(__dirname, 'public', 'icons'),
		buildIcons: path.resolve(__dirname, 'build', 'icons'),
		robot: path.resolve(__dirname, 'public', 'robots.txt'),
		buildRobot: path.resolve(__dirname, 'build', 'robots.txt'),
	};

	const mode = env.mode ?? 'development';
	const port = env.port ?? 3000;
	const apiUrl = env.apiUrl ?? 'http://localhost:8000';

	const isDev = mode === 'development';

	return buildWebpackConfig({
		mode,
		paths,
		isDev,
		port,
		project: 'frontend',
		apiUrl,
	});
};
