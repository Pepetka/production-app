import { describe, expect, test } from '@jest/globals';
import { addCommentFormActions, addCommentFormReducer } from './addCommentFormSlice';
import { AddCommentFormSchema } from '../types/addCommentFormSchema';

describe('addCommentFormSlice', () => {
	test('setText', () => {
		const state: AddCommentFormSchema = {
			text: 'some text',
			error: 'some error',
		};

		expect(addCommentFormReducer(state, addCommentFormActions.setText('text'))).toEqual({
			...state,
			text: 'text',
		});
	});

	test('undefined state', () => {
		expect(addCommentFormReducer(undefined, addCommentFormActions.setText('text'))).toEqual({
			text: 'text',
		});
	});
});
