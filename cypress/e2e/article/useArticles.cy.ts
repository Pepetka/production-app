import { getUserArticlesPagePath } from '../../../src/shared/const/router';

describe('Articles', () => {
	let articleId1: string;
	let articleId2: string;

	beforeEach(() => {
		cy.login();
		cy.intercept('GET', 'http://localhost:8000/articles**').as('getArticles');
		cy.createTestArticle('3').then((data) => {
			articleId1 = data.id;
		});
		cy.createTestArticle().then((data) => {
			articleId2 = data.id;
			cy.visit(getUserArticlesPagePath('2'));
		});
		cy.wait('@getArticles');
	});

	afterEach(() => {
		cy.deleteTestArticle(articleId1);
		cy.deleteTestArticle(articleId2);
	});

	it('Get articles', () => {
		cy.getByTestId('UserArticlesPage').should('exist');
		cy.getByTestId('ArticlesList').should('exist');
		cy.getByTestId('ArticlesListItem').should('have.length', 1);
	});
});
