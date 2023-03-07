import {
	getAboutPagePath,
	getAdminPagePath,
	getArticleCreatePagePath,
	getArticleDetailsPagePath,
	getArticleEditPagePath,
	getArticlesPagePath,
	getMainPagePath,
	getProfilePagePath,
} from '../../../src/shared/const/router';

describe('Routing', () => {
	describe('Base paths', () => {
		it('Main page', () => {
			cy.visit(getMainPagePath());
			cy.getByTestId('HomePage').should('exist');
		});

		it('About page', () => {
			cy.visit(getAboutPagePath());
			cy.getByTestId('AboutPage').should('exist');
		});

		it('Not found page', () => {
			cy.visit('/fsdfsf');
			cy.getByTestId('NotFoundPage').should('exist');
		});
	});

	describe('Without auth', () => {
		it('Profile page', () => {
			cy.visit(getProfilePagePath('2'));
			cy.getByTestId('HomePage').should('exist');
		});

		it('Articles page', () => {
			cy.visit(getArticlesPagePath());
			cy.getByTestId('HomePage').should('exist');
		});

		it('Article create page', () => {
			cy.visit(getArticleCreatePagePath());
			cy.getByTestId('HomePage').should('exist');
		});
	});

	describe('With auth', () => {
		describe('Base paths', () => {
			let profileId: string;

			beforeEach(() => {
				cy.login().then((data) => {
					profileId = data.id;
				});
			});

			it('Profile page', () => {
				cy.visit(getProfilePagePath(profileId));
				cy.getByTestId('ProfilePage').should('exist');
			});

			it('Articles page', () => {
				cy.visit(getArticlesPagePath());
				cy.getByTestId('ArticlesPage').should('exist');
			});

			it('Article create page', () => {
				cy.visit(getArticleCreatePagePath());
				cy.getByTestId('ArticleEditPage').should('exist');
			});
		});

		describe('Article paths', () => {
			let articleId: string;

			beforeEach(() => {
				cy.login();
				cy.createTestArticle().then((data) => {
					articleId = data.id;
					cy.log(JSON.stringify(data));
				});
			});

			afterEach(() => {
				cy.deleteTestArticle(articleId);
			});

			it('Article details page', () => {
				cy.visit(getArticleDetailsPagePath(articleId));
				cy.getByTestId('ArticleDetailsPage').should('exist');
			});

			it('Article Edit page', () => {
				cy.visit(getArticleEditPagePath(articleId));
				cy.getByTestId('ArticleEditPage').should('exist');
			});

			it('Article Edit Forbidden page', () => {
				cy.login('testAdmin');
				cy.visit(getArticleEditPagePath(articleId));
				cy.getByTestId('ForbiddenPage').should('exist');
			});
		});

		describe('User role', () => {
			beforeEach(() => {
				cy.login();
			});

			it('Admin page', () => {
				cy.visit(getAdminPagePath());
				cy.getByTestId('ForbiddenPage').should('exist');
			});
		});

		describe('Admin role', () => {
			beforeEach(() => {
				cy.login('testAdmin');
			});

			it('Admin page', () => {
				cy.visit(getAdminPagePath());
				cy.getByTestId('AdminPanelPage').should('exist');
			});
		});
	});
});
