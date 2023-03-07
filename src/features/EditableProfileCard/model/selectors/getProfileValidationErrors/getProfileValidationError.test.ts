import { describe, expect, test } from '@jest/globals';
import type { StateSchema } from '@/app/provider/Store';
import { ValidateProfileError } from '../../consts/consts';
import { getProfileValidationErrors } from './getProfileValidationErrors';

describe('getProfileValidationErrors', () => {
	test('return profile validation error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				validateErrors: [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME],
			},
		};

		expect(getProfileValidationErrors(state as StateSchema)?.sort()).toEqual(
			[ValidateProfileError.INCORRECT_AGE, ValidateProfileError.INCORRECT_USERNAME].sort(),
		);
	});
});
