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
				userId: '2',
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

export const updateArticle = () => {
	cy.getByTestId('EditableArticleDetails.edit').click();
	cy.getByTestId('EditableArticleDetails.article.title').wait(1500).clear().type('new title', { delay: 300 });
	cy.getByTestId('EditableArticleDetails.tabs.TEXT').click();
	cy.getByTestId('EditableArticleDetails.textBlock.title').wait(1500).clear().type('new textBlock title', { delay: 300 });
};

declare global {
	namespace Cypress {
		interface Chainable {
			createTestArticle(): Chainable<{ id: string }>;
			deleteTestArticle(id: string): Chainable<void>;
			updateArticle(): Chainable<void>;
		}
	}
}
