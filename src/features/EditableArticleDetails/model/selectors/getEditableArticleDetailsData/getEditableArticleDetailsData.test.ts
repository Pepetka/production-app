import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsData } from './getEditableArticleDetailsData';

describe('getEditableArticleDetailsData', () => {
	test('return EditableArticleDetails data', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				data: {
					title: 'Some title',
				},
			},
		};

		expect(getEditableArticleDetailsData(state as StateSchema)).toEqual({
			title: 'Some title',
		});
	});
});
