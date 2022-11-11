import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
	test('return login password', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				password: 'some password',
				loading: false,
				username: '',
			},
		};

		expect(getLoginPassword(state as StateSchema)).toEqual('some password');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginPassword(state as StateSchema)).toEqual('');
	});
});
