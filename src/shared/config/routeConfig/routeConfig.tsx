import { AboutPage } from 'pages/AboutPage';
import { HomePage } from 'pages/HomePage';
import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	MAIN = 'Main',
	ABOUT = 'About',
	PROFILE = 'Profile',
	NOT_FOUND = 'not_found'
}

export const routePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.PROFILE]: '/profile',
	[AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: routePaths.Main,
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: routePaths.About,
		element: <AboutPage />,
	},
	[AppRoutes.PROFILE]: {
		path: routePaths.Profile,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: routePaths.not_found,
		element: <NotFoundPage />,
	},
};
