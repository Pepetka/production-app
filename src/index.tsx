import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import ThemeProvider from "./theme/ThemeProvider"

render(
	<ThemeProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ThemeProvider>,
	document.querySelector("#root")
)
