import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsReadOnly } from './getEditableArticleDetailsReadOnly';

describe('getEditableArticleDetailsReadOnly', () => {
	test('return EditableArticleDetails readOnly', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				readOnly: false,
			},
		};

		expect(getEditableArticleDetailsReadOnly(state as StateSchema)).toEqual(false);
	});
});
