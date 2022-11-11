import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCommentsError } from './getCommentsError';

describe('getCommentsError', () => {
	test('return comments error', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				error: 'some error',
			},
		};

		expect(getCommentsError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentsError(state as StateSchema)).toEqual(undefined);
	});
});
