import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsFormData } from './getEditableArticleDetailsFormData';

describe('getProfileFormData', () => {
	test('return profile form data', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				formData: {
					username: 'Some username',
				},
			},
		};

		expect(getEditableArticleDetailsFormData(state as StateSchema)).toEqual({
			username: 'Some username',
		});
	});
});
