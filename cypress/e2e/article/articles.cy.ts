import { getArticlesPagePath } from '../../../src/shared/const/router';

describe('Articles', () => {
	let articleId: string;

	beforeEach(() => {
		cy.login();
		cy.intercept('GET', 'http://localhost:8000/articles**').as('getArticles');
		cy.createTestArticle().then((data) => {
			articleId = data.id;
			cy.visit(getArticlesPagePath());
		});
		cy.wait('@getArticles');
	});

	afterEach(() => {
		cy.deleteTestArticle(articleId);
	});

	it('Get articles', () => {
		cy.getByTestId('ArticlesPage').should('exist');
		cy.getByTestId('ArticlesList').should('exist');
		cy.getByTestId('ArticlesListItem').should('have.length.greaterThan', 1);
	});

	it('Article search', () => {
		cy.searchArticle('Test article');
		cy.getByTestId('ArticlesListItem').should('have.length', 1);
	});
});
