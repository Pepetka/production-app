import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getAddCommentFormError } from './getAddCommentFormError';

describe('getAddCommentFormError', () => {
	test('return add comment form error', () => {
		const state: DeepPartial<StateSchema> = {
			addCommentForm: {
				error: 'some error',
			},
		};

		expect(getAddCommentFormError(state as StateSchema)).toEqual('some error');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
	});
});
