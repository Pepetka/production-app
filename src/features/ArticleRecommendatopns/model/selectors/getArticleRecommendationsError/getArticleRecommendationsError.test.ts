import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticleRecommendationsError } from './getArticleRecommendationsError';

describe('getArticleRecommendationsError', () => {
	test('return recommendations error', () => {
		const state: DeepPartial<StateSchema> = {
			articleRecommendations: {
				error: 'some error',
			},
		};

		expect(getArticleRecommendationsError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleRecommendationsError(state as StateSchema)).toEqual(undefined);
	});
});
