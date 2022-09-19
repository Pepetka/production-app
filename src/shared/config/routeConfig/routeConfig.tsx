import { AboutPage } from "pages/AboutPage"
import { HomePage } from "pages/HomePage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
}

export const routePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",
	[AppRoutes.ABOUT]: "/about",
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: routePaths.main,
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: routePaths.about,
		element: <AboutPage />,
	},
}
