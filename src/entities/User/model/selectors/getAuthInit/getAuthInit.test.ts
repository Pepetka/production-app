import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getAuthInit } from './getAuthInit';

describe('getAuthInit', () => {
	test('return auth init', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				_init: true,
			},
		};

		expect(getAuthInit(state as StateSchema)).toEqual(true);
	});
});
