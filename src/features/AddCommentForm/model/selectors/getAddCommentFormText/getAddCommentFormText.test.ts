import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getAddCommentFormText } from './getAddCommentFormText';

describe('getAddCommentFormText', () => {
	test('return add comment form text', () => {
		const state: DeepPartial<StateSchema> = {
			addCommentForm: {
				text: 'some text',
			},
		};

		expect(getAddCommentFormText(state as StateSchema)).toEqual('some text');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getAddCommentFormText(state as StateSchema)).toEqual('');
	});
});
