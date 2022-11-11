import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getAddCommentFormState } from './getAddCommentFormState';

describe('getAddCommentFormState', () => {
	test('return add comment form state', () => {
		const state: DeepPartial<StateSchema> = {
			addCommentForm: {
				text: 'some text',
				error: 'some error',
			},
		};

		expect(getAddCommentFormState(state as StateSchema)).toEqual({
			text: 'some text',
			error: 'some error',
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getAddCommentFormState(state as StateSchema)).toEqual(undefined);
	});
});
