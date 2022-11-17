import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticleRecommendationsLoading } from './getArticleRecommendationsLoading';

describe('getArticleRecommendationsLoading', () => {
	test('return recommendations loading', () => {
		const state: DeepPartial<StateSchema> = {
			articleRecommendations: {
				loading: true,
			},
		};

		expect(getArticleRecommendationsLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleRecommendationsLoading(state as StateSchema)).toEqual(false);
	});
});
