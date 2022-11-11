import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getArticleState } from './getArticleState';

describe('getArticleState', () => {
	test('return article state', () => {
		const state: DeepPartial<StateSchema> = {
			article: {
				loading: true,
				article: {
					id: 'some id',
				},
				error: 'some error',
			},
		};

		expect(getArticleState(state as StateSchema)).toEqual({
			loading: true,
			article: {
				id: 'some id',
			},
			error: 'some error',
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticleState(state as StateSchema)).toEqual(undefined);
	});
});
