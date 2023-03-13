import { defineConfig } from 'cypress';

export default defineConfig({
	projectId: 'kw7fb4',
	e2e: {
		setupNodeEvents(on, config) {},
		baseUrl: 'http://localhost:3000/',
	},
});
