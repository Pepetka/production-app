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
