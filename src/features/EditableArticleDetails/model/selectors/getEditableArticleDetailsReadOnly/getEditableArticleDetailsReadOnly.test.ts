import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsReadOnly } from './getEditableArticleDetailsReadOnly';

describe('getProfileReadOnly', () => {
	test('return profile read only', () => {
		const state: DeepPartial<StateSchema> = {
			profile: {
				readOnly: false,
			},
		};

		expect(getEditableArticleDetailsReadOnly(state as StateSchema)).toEqual(false);
	});
});
