import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsFormData } from './getEditableArticleDetailsFormData';

describe('getEditableArticleDetailsFormData', () => {
	test('return EditableArticleDetails FormData', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				formData: {
					title: 'Some title',
				},
			},
		};

		expect(getEditableArticleDetailsFormData(state as StateSchema)).toEqual({
			title: 'Some title',
		});
	});
});
