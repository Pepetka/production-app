import { getProfilePagePath } from '../../../src/shared/const/router';

describe('Edit profile', () => {
	let profileId: string;

	beforeEach(() => {
		cy.intercept('GET', '**/profile/**').as('getProfile');
		cy.login().then((data) => {
			profileId = data.id;
			cy.visit(getProfilePagePath(profileId));
		});
		cy.wait('@getProfile');
	});

	afterEach(() => {
		cy.resetProfile(profileId);
	});

	it('Profile exist', () => {
		cy.getByTestId('EditableProfileCard.Username').should('have.value', 'testUser');
	});

	it('Edit profile', () => {
		cy.updateProfile();
		cy.wait('@getProfile');
		cy.getByTestId('EditableProfileCard.Username').should('have.value', 'newTestUser');
	});
});
