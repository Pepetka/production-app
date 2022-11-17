import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticleRecommendationsState } from './getArticleRecommendationsState';

describe('getArticleRecommendationsState', () => {
	test('return recommendations state', () => {
		const state: DeepPartial<StateSchema> = {
			articleRecommendations: {
				error: 'some error',
				loading: true,
			},
		};

		expect(getArticleRecommendationsState(state as StateSchema)).toEqual({
			error: 'some error',
			loading: true,
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleRecommendationsState(state as StateSchema)).toEqual(undefined);
	});
});
