import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsError } from './getEditableArticleDetailsError';

describe('getEditableArticleDetailsError', () => {
	test('return EditableArticleDetails error', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				error: 'Some error',
			},
		};

		expect(getEditableArticleDetailsError(state as StateSchema)).toEqual('Some error');
	});
});
