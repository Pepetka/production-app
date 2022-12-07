import { RouteProps } from 'react-router-dom';
import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
	role?: UserRole
}

export enum AppRoutes {
	MAIN = 'Main',
	ABOUT = 'About',
	ADMIN = 'Admin',
	FORBIDDEN = 'Forbidden',
	PROFILE = 'Profile',
	ARTICLES = 'Articles',
	ARTICLE_DETAILS = 'Article_details',
	ARTICLE_EDIT = 'Article_edit',
	ARTICLE_CREATE = 'Article_create',
	NOT_FOUND = 'not_found'
}

export const routePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
	[AppRoutes.ADMIN]: '/admin',
	[AppRoutes.FORBIDDEN]: '/forbidden',
	[AppRoutes.PROFILE]: '/profile/',
	[AppRoutes.ARTICLES]: '/articles',
	[AppRoutes.ARTICLE_DETAILS]: '/articles/',
	[AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
	[AppRoutes.ARTICLE_CREATE]: '/articles/new',
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
	[AppRoutes.ADMIN]: {
		path: routePaths.Admin,
		element: <AdminPanelPage />,
		authOnly: true,
		role: UserRole.ADMIN,
	},
	[AppRoutes.FORBIDDEN]: {
		path: routePaths.Forbidden,
		element: <ForbiddenPage />,
	},
	[AppRoutes.PROFILE]: {
		path: `${routePaths.Profile}:id`,
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: routePaths.Articles,
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: `${routePaths.Article_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: routePaths.Article_edit,
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: routePaths.Article_create,
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: routePaths.not_found,
		element: <NotFoundPage />,
	},
};
