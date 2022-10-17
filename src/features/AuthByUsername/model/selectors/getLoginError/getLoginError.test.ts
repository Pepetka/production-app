import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
	test('return login error', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				error: 'some error',
			},
		};

		expect(getLoginError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginError(state as StateSchema)).toEqual('');
	});
});
