import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsLoading } from './getEditableArticleDetailsLoading';

describe('getEditableArticleDetailsLoading', () => {
	test('return EditableArticleDetails loading', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				loading: true,
			},
		};

		expect(getEditableArticleDetailsLoading(state as StateSchema)).toEqual(true);
	});
});
