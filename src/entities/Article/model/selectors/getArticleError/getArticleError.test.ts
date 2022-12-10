import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getArticleError } from './getArticleError';

describe('getArticleError', () => {
	test('return article error', () => {
		const state: DeepPartial<StateSchema> = {
			article: {
				error: 'some error',
			},
		};

		expect(getArticleError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleError(state as StateSchema)).toEqual(undefined);
	});
});
