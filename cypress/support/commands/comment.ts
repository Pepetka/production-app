export const postComment = (text: string) => {
	cy.getByTestId('CommentForm.Input').clear().type(text);
	cy.getByTestId('CommentForm.SendBtn').click();
};

declare global {
	namespace Cypress {
		interface Chainable {
			postComment(text: string): Chainable<void>;
		}
	}
}
