import { getArticleEditPagePath } from '../../../src/shared/const/router';

describe('Edit article', () => {
	let articleId: string;

	beforeEach(() => {
		cy.login();
		cy.intercept('GET', 'http://localhost:8000/articles/**').as('getArticle');
		cy.intercept('PUT', 'http://localhost:8000/articles/**').as('putArticle');
		cy.createTestArticle().then((data) => {
			articleId = data.id;
			cy.visit(getArticleEditPagePath(articleId));
		});
		cy.wait('@getArticle');
	});

	afterEach(() => {
		cy.deleteTestArticle(articleId);
	});

	it('Article exist', () => {
		cy.getByTestId('EditableArticleDetails').should('exist');
		cy.getByTestId('EditableArticleDetails.edit').click();
		cy.getByTestId('EditableArticleDetails.article.title').should('have.value', 'Test article');
	});

	it('Edit article', () => {
		cy.updateArticle();
		cy.getByTestId('EditableArticleDetails.save').click();
		cy.wait('@putArticle');
		cy.visit(getArticleEditPagePath(articleId));
		cy.wait('@getArticle');
		cy.getByTestId('EditableArticleDetails.edit').click();
		cy.getByTestId('EditableArticleDetails.article.title').should('have.value', 'new title');
		cy.getByTestId('EditableArticleDetails.textBlock.title').should('have.value', 'new textBlock title');
	});
});
