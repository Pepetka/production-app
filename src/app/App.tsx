import { Suspense } from "react"
import { NavLink, Route, Routes } from "react-router-dom"
import "app/styles/index.scss"
import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/provider/Theme"
import { HomePage } from "pages/HomePage"
import { AboutPage } from "pages/AboutPage"

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
					<NavLink to={"/about"}>About</NavLink>
				</li>
			</ul>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/about' element={<AboutPage />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
