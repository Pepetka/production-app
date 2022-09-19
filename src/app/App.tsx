import "app/styles/index.scss"
import { classNames } from "shared/lib/classNames"
import { useTheme } from "app/provider/Theme"
import { AppRouter } from "./provider/Router"
import { NavBar } from "widgets/NavBar"
import { SideBar } from "widgets/SideBar"

const App = () => {
	const { theme } = useTheme()

	return (
		<div className={classNames("App", {}, [theme])}>
			<NavBar />
			<div className='page-content'>
				<SideBar />
				<AppRouter />
			</div>
		</div>
	)
}

export default App
