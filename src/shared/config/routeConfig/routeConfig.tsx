import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
	MAIN = 'Main',
	ABOUT = 'About',
	NOT_FOUND = 'not_found'
}

export const routePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: routePaths.Main,
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: routePaths.About,
		element: <AboutPage />,
	},
	[AppRoutes.NOT_FOUND]: {
		path: routePaths.not_found,
		element: <NotFoundPage />,
	},
};
