import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsError } from './getEditableArticleDetailsError';

describe('getProfileError', () => {
	test('return profile error', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				error: 'Some error',
			},
		};

		expect(getEditableArticleDetailsError(state as StateSchema)).toEqual('Some error');
	});
});
