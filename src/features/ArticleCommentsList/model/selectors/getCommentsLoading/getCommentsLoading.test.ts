import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCommentsLoading } from './getCommentsLoading';

describe('getCommentsLoading', () => {
	test('return comments loading', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				loading: true,
			},
		};

		expect(getCommentsLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentsLoading(state as StateSchema)).toEqual(false);
	});
});
