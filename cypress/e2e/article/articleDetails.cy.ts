import { getArticleDetailsPagePath } from '../../../src/shared/const/router';

describe('Article details', () => {
	let articleId: string;

	beforeEach(() => {
		cy.login().then(() => {
			cy.createTestArticle().then((data) => {
				articleId = data.id;
				cy.log(JSON.stringify(data));

				cy.visit(getArticleDetailsPagePath(articleId));
			});
		});
	});

	afterEach(() => {
		cy.deleteTestArticle(articleId);
	});

	it('Article details', () => {
		cy.getByTestId('ArticleDetails').should('exist');
	});

	it('Article recommendations', () => {
		cy.getByTestId('ArticleRecommendations').should('exist');
	});

	it('Post comment', () => {
		cy.getByTestId('ArticleComments').should('exist').scrollIntoView();
		cy.postComment('Test comment');
		cy.getByTestId('CommentCard').should('have.length', 1);
	});

	it('Rate article', () => {
		cy.getByTestId('RatingCard').should('exist').scrollIntoView();

		const rating = 2;
		cy.rateArticle(rating);
		cy.get(`[data-selected="StarRating.${rating}"]`).should('exist');
	});
});
