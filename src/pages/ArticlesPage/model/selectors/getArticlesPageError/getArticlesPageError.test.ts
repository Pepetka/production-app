import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticlesPageError } from './getArticlesPageError';

describe('getArticlesPageError', () => {
	test('return articles page error', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				error: 'some error',
			},
		};

		expect(getArticlesPageError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageError(state as StateSchema)).toEqual(undefined);
	});
});
