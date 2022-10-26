import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
	test('return profile error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'Some error',
			},
		};

		expect(getProfileError(state as StateSchema)).toEqual('Some error');
	});
});
