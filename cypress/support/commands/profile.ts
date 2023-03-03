export const updateProfile = () => {
	cy.getByTestId('EditableProfileCard.EditBtn').click();
	cy.getByTestId('EditableProfileCard.Username').clear().type('newTestUser');
	cy.getByTestId('EditableProfileCard.SaveBtn').click();
};

export const resetProfile = (profileId: string) => {
	cy.request({
		method: 'PUT',
		url: `http://localhost:8000/profile/${profileId}`,
		headers: {
			Authorization: 'auth',
		},
		body: {
			id: '2',
			first: 'testFirst',
			lastname: 'testLast',
			age: '18',
			currency: 'RUB',
			country: 'Belarus',
			city: 'Minsk',
			username: 'testUser',
			avatar: 'https://miro.medium.com/max/2400/1*1WCjO1iYMo7J7Upp8KMfLA@2x.jpeg',
		},
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			updateProfile(): Chainable<void>;
			resetProfile(profileId: string): Chainable<void>;
		}
	}
}
