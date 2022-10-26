import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getProfileLoading } from './getProfileLoading';

describe('getProfileLoading', () => {
	test('return profile loading', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				loading: true,
			},
		};

		expect(getProfileLoading(state as StateSchema)).toEqual(true);
	});
});
