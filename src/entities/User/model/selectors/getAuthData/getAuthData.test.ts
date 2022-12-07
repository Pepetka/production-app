import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getAuthData } from './getAuthData';

describe('getAuthData', () => {
	test('return auth data', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 'some id',
					username: 'some username',
				},
			},
		};

		expect(getAuthData(state as StateSchema)).toEqual({
			id: 'some id',
			username: 'some username',
		});
	});
});
