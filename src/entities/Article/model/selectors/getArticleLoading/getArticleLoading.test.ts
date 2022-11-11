import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticleLoading } from './getArticleLoading';

describe('getArticleLoading', () => {
	test('return article loading', () => {
		const state: DeepPartial<StateSchema> = {
			article: {
				loading: true,
			},
		};

		expect(getArticleLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleLoading(state as StateSchema)).toEqual(false);
	});
});
