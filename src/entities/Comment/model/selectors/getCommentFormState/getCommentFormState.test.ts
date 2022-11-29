import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCommentFormState } from './getCommentFormState';

describe('getCommentFormState', () => {
	test('return comment form state', () => {
		const state: DeepPartial<StateSchema> = {
			commentForm: {
				text: 'some text',
				error: 'some error',
			},
		};

		expect(getCommentFormState(state as StateSchema)).toEqual({
			text: 'some text',
			error: 'some error',
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentFormState(state as StateSchema)).toEqual(undefined);
	});
});
