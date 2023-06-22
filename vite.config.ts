import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			svgr({
				exportAsDefault: true,
			}),
			react(),
		],
		resolve: {
			alias: [{ find: '@', replacement: '/src' }],
		},
		define: {
			__IS_DEV__: JSON.stringify(true),
			__PROJECT__: JSON.stringify('frontend'),
			__API__: JSON.stringify(env.VITE_API),
		},
	};
});
