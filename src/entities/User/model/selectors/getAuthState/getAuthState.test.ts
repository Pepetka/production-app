import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getAuthState } from './getAuthState';

describe('getAuthState', () => {
	test('return auth state', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 'some id',
					username: 'some username',
				},
				_init: true,
			},
		};

		expect(getAuthState(state as StateSchema)).toEqual({
			authData: {
				id: 'some id',
				username: 'some username',
			},
			_init: true,
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getAuthState(state as StateSchema)).toEqual(undefined);
	});
});
