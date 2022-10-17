import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername', () => {
	test('return login username', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				username: 'some username',
			},
		};

		expect(getLoginUsername(state as StateSchema)).toEqual('some username');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginUsername(state as StateSchema)).toEqual('');
	});
});
