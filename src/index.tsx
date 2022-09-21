import App from 'app/App';
import { ThemeProvider } from 'app/provider/Theme';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

render(
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.querySelector('#root'),
);
