import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticlesPageSearch } from './getArticlesPageSearch';

describe('getArticlesPageSearch', () => {
	test('return articles page search', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				search: 'search data',
			},
		};

		expect(getArticlesPageSearch(state as StateSchema)).toEqual('search data');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageSearch(state as StateSchema)).toEqual('');
	});
});
