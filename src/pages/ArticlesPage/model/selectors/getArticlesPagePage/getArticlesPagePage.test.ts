import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticlesPagePage } from './getArticlesPagePage';

describe('getArticlesPagePage', () => {
	test('return articles page page', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				page: 10,
			},
		};

		expect(getArticlesPagePage(state as StateSchema)).toEqual(10);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPagePage(state as StateSchema)).toEqual(1);
	});
});
