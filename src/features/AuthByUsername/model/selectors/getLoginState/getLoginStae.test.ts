import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
	test('return login state', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				password: 'some password',
				error: 'some error',
				loading: true,
				username: 'some username',
			},
		};

		expect(getLoginState(state as StateSchema)).toEqual({
			password: 'some password',
			error: 'some error',
			loading: true,
			username: 'some username',
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginState(state as StateSchema)).toEqual(undefined);
	});
});
