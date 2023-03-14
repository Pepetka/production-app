import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getUserArticlesPageError } from './getUserArticlesPageError';

describe('getArticlesPageError', () => {
	test('return articles page error', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				error: 'some error',
			},
		};

		expect(getUserArticlesPageError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageError(state as StateSchema)).toEqual(undefined);
	});
});
