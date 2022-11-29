import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCommentFormError } from './getCommentFormError';

describe('getCommentFormError', () => {
	test('return comment form error', () => {
		const state: DeepPartial<StateSchema> = {
			commentForm: {
				error: 'some error',
			},
		};

		expect(getCommentFormError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentFormError(state as StateSchema)).toEqual(undefined);
	});
});
