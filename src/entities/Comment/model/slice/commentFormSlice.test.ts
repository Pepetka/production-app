import { describe, expect, test } from '@jest/globals';
import { CommentFormSchema } from '../types/commentFormSchema';
import { commentFormReducer, commentFormActions } from './commentFormSlice';

describe('addCommentFormSlice', () => {
	test('setText', () => {
		const state: CommentFormSchema = {
			text: 'some text',
			error: 'some error',
		};

		expect(commentFormReducer(state, commentFormActions.setText('text'))).toEqual({
			...state,
			text: 'text',
		});
	});

	test('undefined state', () => {
		expect(commentFormReducer(undefined, commentFormActions.setText('text'))).toEqual({
			text: 'text',
		});
	});
});
