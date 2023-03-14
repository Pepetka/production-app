import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageState } from './getUserArticlesPageState';

describe('getArticlesPageState', () => {
	test('return articles page state', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				page: 10,
				hasMore: false,
				limit: 10,
			},
		};

		expect(getUserArticlesPageState(state as StateSchema)).toEqual({
			page: 10,
			hasMore: false,
			limit: 10,
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageState(state as StateSchema)).toEqual(undefined);
	});
});
