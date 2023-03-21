import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageLoading } from './getUserArticlesPageLoading';

describe('getUserArticlesPageLoading', () => {
	test('return user articles page loading', () => {
		const state: DeepPartial<StateSchema> = {
			userArticlesPage: {
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
