export const rateArticle = (rating: number = 3) => {
	cy.getByTestId(`StarRating.${rating}`).click();
	cy.getByTestId('RatingCard.Review').clear().type('Test review');
	cy.getByTestId('RatingCard.SendReviewBtn').click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			rateArticle(rating: number): Chainable<void>
		}
	}
}
