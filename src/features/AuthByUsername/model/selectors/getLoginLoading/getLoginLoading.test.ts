import { describe, expect, test } from '@jest/globals';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
	test('return login loading', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				loading: true,
			},
		};

		expect(getLoginLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginLoading(state as StateSchema)).toEqual(false);
	});
});
