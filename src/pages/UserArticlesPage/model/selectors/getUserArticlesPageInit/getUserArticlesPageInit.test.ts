import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageInit } from './getUserArticlesPageInit';

describe('getArticlesPageInit', () => {
	test('return articles page hasMore', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				_init: false,
			},
		};

		expect(getUserArticlesPageInit(state as StateSchema)).toEqual(false);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageInit(state as StateSchema)).toEqual(false);
	});
});
