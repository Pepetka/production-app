import App from 'app/App';
import { ThemeProvider } from 'app/provider/Theme';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'app/provider/ErrorBoundary';

render(
	<ThemeProvider>
		<BrowserRouter>
			<ErrorBoundary>
				<App />
			</ErrorBoundary>
		</BrowserRouter>
	</ThemeProvider>,
	document.querySelector('#root'),
);
