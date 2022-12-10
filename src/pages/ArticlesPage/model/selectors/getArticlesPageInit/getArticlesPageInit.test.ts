import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticlesPageInit } from './getArticlesPageInit';

describe('getArticlesPageInit', () => {
	test('return articles page hasMore', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				_init: false,
			},
		};

		expect(getArticlesPageInit(state as StateSchema)).toEqual(false);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageInit(state as StateSchema)).toEqual(false);
	});
});
