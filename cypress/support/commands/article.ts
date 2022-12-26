export const createTestArticle = () =>
	cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/articles',
			headers: {
				Authorization: 'auth',
			},
			body: {
				title: 'Javascript news',
				subtitle: 'Что нового в JS за 2022 год?',
				img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
				views: 1022,
				userId: '1',
				createdAt: '26.02.2022',
				type: ['IT', 'Math'],
				blocks: [],
			},
		})
		.then((data) => data.body);

export const deleteTestArticle = (id: string) => {
	cy.request({
		method: 'DELETE',
		url: `http://localhost:8000/articles/${id}`,
		headers: {
			Authorization: 'auth',
		},
	});
};

declare global {
	namespace Cypress {
		interface Chainable {
			createTestArticle(): Chainable<{ id: string }>;
			deleteTestArticle(id: string): Chainable<void>;
		}
	}
}
