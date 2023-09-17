import { createRoot } from 'react-dom/client';
import { StrictMode, Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@/app/provider/Theme';
import { ErrorBoundary } from '@/app/provider/ErrorBoundary';
import { PageLoader } from '@/widgets/PageLoader';
import { StoreProvider } from '@/app/provider/Store';
import App from '@/app/App';

import '@/app/styles/index.scss';
import '@/shared/config/i18n/i18nConfig';

createRoot(document.getElementById('root') as HTMLElement).render(
	<StrictMode>
		<Suspense fallback={<PageLoader />}>
			<BrowserRouter>
				<StoreProvider>
					<ThemeProvider>
						<ErrorBoundary>
							<App />
						</ErrorBoundary>
					</ThemeProvider>
				</StoreProvider>
			</BrowserRouter>
		</Suspense>
	</StrictMode>,
);
export { Theme } from '@/shared/const/theme';

if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then((registration) => {
				console.log('SW registered: ', registration);
			})
			.catch((registrationError) => {
				console.log('SW registration failed: ', registrationError);
			});
	});
}
