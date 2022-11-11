import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticlesPageState } from './getArticlesPageState';

describe('getArticlesPageState', () => {
	test('return articles page state', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				page: 10,
				hasMore: false,
				limit: 10,
			},
		};

		expect(getArticlesPageState(state as StateSchema)).toEqual({
			page: 10,
			hasMore: false,
			limit: 10,
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageState(state as StateSchema)).toEqual(undefined);
	});
});
