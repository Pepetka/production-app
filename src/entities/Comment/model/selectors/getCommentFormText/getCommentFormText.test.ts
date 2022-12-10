import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { getCommentFormText } from './getCommentFormText';

describe('getCommentFormText', () => {
	test('return comment form text', () => {
		const state: DeepPartial<StateSchema> = {
			commentForm: {
				text: 'some text',
			},
		};

		expect(getCommentFormText(state as StateSchema)).toEqual('some text');
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentFormText(state as StateSchema)).toEqual('');
	});
});
