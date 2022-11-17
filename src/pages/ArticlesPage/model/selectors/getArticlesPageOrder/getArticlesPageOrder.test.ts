import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticlesPageOrder } from './getArticlesPageOrder';

describe('getArticlesPageOrder', () => {
	test('return articles page order', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				order: 'desc',
			},
		};

		expect(getArticlesPageOrder(state as StateSchema)).toEqual('desc');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageOrder(state as StateSchema)).toEqual('asc');
	});
});
