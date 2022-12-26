import { getProfilePagePath } from '../../../src/shared/const/router';

describe('Edit profile', () => {
	let profileId: string;

	beforeEach(() => {
		cy.login().then((data) => {
			profileId = data.id;
			cy.visit(getProfilePagePath(profileId));
		});
	});

	afterEach(() => {
		cy.resetProfile(profileId);
	});

	it('Profile exist', () => {
		cy.getByTestId('EditableProfileCard.Username').should(
			'have.value',
			'testUser',
		);
	});

	it('Edit profile', () => {
		cy.updateProfile();
		cy.getByTestId('EditableProfileCard.Username').should(
			'have.value',
			'newTestUser',
		);
	});
});
