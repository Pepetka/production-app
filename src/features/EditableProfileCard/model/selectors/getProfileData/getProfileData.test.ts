import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
	test('return profile data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				data: {
					username: 'Some username',
				},
			},
		};

		expect(getProfileData(state as StateSchema)).toEqual({ username: 'Some username' });
	});
});
