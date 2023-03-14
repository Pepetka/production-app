import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageLimit } from './getUserArticlesPageLimit';

describe('getArticlesPageLimit', () => {
	test('return articles page limit', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				limit: 10,
			},
		};

		expect(getUserArticlesPageLimit(state as StateSchema)).toEqual(10);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageLimit(state as StateSchema)).toEqual(10);
	});
});
