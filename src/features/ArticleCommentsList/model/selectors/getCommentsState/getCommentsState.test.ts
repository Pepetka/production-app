import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCommentsState } from './getCommentsState';

describe('getCommentsState', () => {
	test('return comments state', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				loading: true,
				error: 'some error',
				ids: ['1', '2'],
				entities: {
					1: {},
					2: {},
				},
			},
		};

		expect(getCommentsState(state as StateSchema)).toEqual({
			loading: true,
			error: 'some error',
			ids: ['1', '2'],
			entities: {
				1: {},
				2: {},
			},
		});
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getCommentsState(state as StateSchema)).toEqual(undefined);
	});
});
