import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticleData } from './getArticleData';

describe('getArticleData', () => {
	test('return article data', () => {
		const state: DeepPartial<StateSchema> = {
			article: {
				article: {
					id: '1',
				},
			},
		};

		expect(getArticleData(state as StateSchema)).toEqual({
			id: '1',
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleData(state as StateSchema)).toEqual(undefined);
	});
});
