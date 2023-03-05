import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getEditableArticleDetailsState } from './getEditableArticleDetailsState';

describe('getEditableArticleDetailsState', () => {
	test('return EditableArticleDetails state', () => {
		const state: DeepPartial<StateSchema> = {
			editableArticleDetails: {
				readOnly: false,
				error: 'some error',
				loading: true,
				data: {
					title: 'some title',
				},
			},
		};

		expect(getEditableArticleDetailsState(state as StateSchema)).toEqual({
			readOnly: false,
			error: 'some error',
			loading: true,
			data: {
				title: 'some title',
			},
		});
	});
});
