import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly', () => {
	test('return profile read only', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readOnly: false,
			},
		};

		expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
	});
});
