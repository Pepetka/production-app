import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getLoginLoading } from './getLoginLoading';

describe('getLoginLoading', () => {
	test('return login loading', () => {
		const state: DeepPartial<StateSchema> = {
			login: {
				loading: true,
				username: '',
				password: '',
			},
		};

		expect(getLoginLoading(state as StateSchema)).toEqual(true);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getLoginLoading(state as StateSchema)).toEqual(false);
	});
});
