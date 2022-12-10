import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticlesPageHasMore } from './getArticlesPageHasMore';

describe('getArticlesPageHasMore', () => {
	test('return articles page hasMore', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				hasMore: false,
			},
		};

		expect(getArticlesPageHasMore(state as StateSchema)).toEqual(false);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageHasMore(state as StateSchema)).toEqual(true);
	});
});
