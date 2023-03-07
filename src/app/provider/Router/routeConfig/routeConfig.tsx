import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import {
	AppRoutes,
	getAboutPagePath,
	getAdminPagePath,
	getArticleCreatePagePath,
	getArticleDetailsPagePath,
	getArticleEditPagePath,
	getArticlesPagePath,
	getForbiddenPagePath,
	getMainPagePath,
	getNotFoundPagePath,
	getProfilePagePath,
} from '@/shared/const/router';
import { AppRoutesProps } from '@/shared/types/router';
import { UserRole } from '@/shared/const/role';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.MAIN]: {
		path: getMainPagePath(),
		element: <HomePage />,
	},
	[AppRoutes.ABOUT]: {
		path: getAboutPagePath(),
		element: <AboutPage />,
	},
	[AppRoutes.ADMIN]: {
		path: getAdminPagePath(),
		element: <AdminPanelPage />,
		authOnly: true,
		role: UserRole.ADMIN,
	},
	[AppRoutes.FORBIDDEN]: {
		path: getForbiddenPagePath(),
		element: <ForbiddenPage />,
	},
	[AppRoutes.PROFILE]: {
		path: getProfilePagePath(),
		element: <ProfilePage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLES]: {
		path: getArticlesPagePath(),
		element: <ArticlesPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_DETAILS]: {
		path: getArticleDetailsPagePath(),
		element: <ArticleDetailsPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_EDIT]: {
		path: getArticleEditPagePath(),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.ARTICLE_CREATE]: {
		path: getArticleCreatePagePath(),
		element: <ArticleEditPage />,
		authOnly: true,
	},
	[AppRoutes.NOT_FOUND]: {
		path: getNotFoundPagePath(),
		element: <NotFoundPage />,
	},
};
