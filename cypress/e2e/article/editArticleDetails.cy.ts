import { getArticleEditPagePath } from '../../../src/shared/const/router';

describe('Edit article', () => {
	let articleId: string;

	beforeEach(() => {
		cy.login();
		cy.intercept('GET', '**/articles/**').as('getArticle');
		cy.intercept('PUT', '**/articles/**').as('putArticle');
		cy.intercept('POST', '**/articles').as('postArticle');
		cy.createTestArticle().then((data) => {
			articleId = data.id;
		});
		cy.wait('@postArticle');
		cy.visit(getArticleEditPagePath(articleId));
		cy.wait('@getArticle');
	});

	afterEach(() => {
		cy.deleteTestArticle(articleId);
	});

	it('Article exist', () => {
		cy.getByTestId('EditableArticleDetails').should('exist');
		cy.getByTestId('EditableArticleDetails.edit').click();
		cy.getByTestId('EditableArticleDetails.article.title').should('have.value', 'Javascript news');
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
