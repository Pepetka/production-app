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

export const getMainPagePath = () => ('/');
export const getAboutPagePath = () => ('/about');
export const getAdminPagePath = () => ('/admin');
export const getForbiddenPagePath = () => ('/forbidden');
export const getProfilePagePath = (id: string = ':id') => (`/profile/${id}`);
export const getArticlesPagePath = () => ('/articles');
export const getArticleDetailsPagePath = (id: string = ':id') => (`/articles/${id}`);
export const getArticleEditPagePath = (id: string = ':id') => (`/articles/${id}/edit`);
export const getArticleCreatePagePath = () => ('/articles/new');
export const getNotFoundPagePath = () => ('*');
