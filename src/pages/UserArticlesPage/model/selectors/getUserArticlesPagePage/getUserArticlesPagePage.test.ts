import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPagePage } from './getUserArticlesPagePage';

describe('getUserArticlesPagePage', () => {
	test('return user articles page page', () => {
		const state: DeepPartial<StateSchema> = {
			userArticlesPage: {
				page: 10,
			},
		};

		expect(getUserArticlesPagePage(state as StateSchema)).toEqual(10);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPagePage(state as StateSchema)).toEqual(1);
	});
});
