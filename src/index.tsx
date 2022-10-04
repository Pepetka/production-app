import { Suspense } from 'react';
import App from 'app/App';
import { ThemeProvider } from 'app/provider/Theme';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';
import { PageLoader } from 'widgets/PageLoader';
import { StoreProvider } from 'app/provider/Store';

import 'app/styles/index.scss';
import 'shared/config/i18n/i18nConfig';

render(
	<Suspense fallback={<PageLoader />}>
		<StoreProvider>
			<ThemeProvider>
				<BrowserRouter>
					<ErrorBoundary>
						<App />
					</ErrorBoundary>
				</BrowserRouter>
			</ThemeProvider>
		</StoreProvider>
	</Suspense>,
	document.querySelector('#root'),
);
