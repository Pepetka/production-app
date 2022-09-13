import { Suspense } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import "./styles/index.scss"
import { CounterPageLazy } from "./pages/Counter/CounterPage.lazy"
import { HomePageLazy } from "./pages/Home/HomePage.lazy"
import useTheme from "./theme/useTheme"
import { classNames } from "./helpers/classNames"

const App = () => {
	const { theme, onThemeChange } = useTheme()

	return (
		<div className={classNames("App", {}, [theme])}>
			<button onClick={onThemeChange}>Theme toggle</button>
			<ul>
				<li>
					<NavLink to={"/"}>Home</NavLink>
				</li>
				<li>
					<NavLink to={"/counter"}>Counter</NavLink>
				</li>
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<HomePageLazy />} />
					<Route path='/counter' element={<CounterPageLazy />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
