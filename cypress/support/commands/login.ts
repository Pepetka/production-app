import { LOCAL_STORAGE_AUTH_KEY } from '../../../src/shared/const/localstorage';
import { User } from '../../../src/entities/User';

export const login = (username: 'testUser' | 'testAdmin' = 'testUser') => cy.request({
	method: 'POST',
	url: 'http://localhost:8000/login',
	headers: [],
	body: {
		username,
		password: '123',
	},
})
	.then(({ body }) => {
		window.localStorage.setItem(LOCAL_STORAGE_AUTH_KEY, JSON.stringify(body));

		return body;
	});

declare global {
	namespace Cypress {
		interface Chainable {
			login(username?: 'testUser' | 'testAdmin'): Chainable<User>
		}
	}
}
