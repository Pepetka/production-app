import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import { ThemeProvider } from 'app/provider/Theme';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { PageLoader } from 'widgets/PageLoader';
import { StoreProvider } from 'app/provider/Store';
import App from 'app/App';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18nConfig';

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
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
	</Suspense>,
);
