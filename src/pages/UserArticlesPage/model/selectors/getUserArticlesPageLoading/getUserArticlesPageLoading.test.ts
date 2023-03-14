import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageLoading } from './getUserArticlesPageLoading';

describe('getArticlesPageLoading', () => {
	test('return articles page loading', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				loading: true,
			},
		};

		expect(getUserArticlesPageLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageLoading(state as StateSchema)).toEqual(false);
	});
});
