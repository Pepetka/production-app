import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getProfileState } from './getProfileState';

describe('getProfileState', () => {
	test('return profile state', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readOnly: false,
				error: 'some error',
				loading: true,
				data: {
					username: 'some username',
				},
			},
		};

		expect(getProfileState(state as StateSchema)).toEqual({
			readOnly: false,
			error: 'some error',
			loading: true,
			data: {
				username: 'some username',
			},
		});
	});
});
