import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getComments } from './commentsSlice';

describe('getComments', () => {
	test('selectAll', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				entities: {
					1: {
						id: 'id 1',
						text: 'some text',
					},
					2: {
						id: 'id 2',
						text: 'some text',
					},
					3: {
						id: 'id 3',
						text: 'some text',
					},
				},
				ids: ['1', '2', '3'],
			},
		};

		expect(getComments.selectAll(state as StateSchema)).toEqual([
			{
				id: 'id 1',
				text: 'some text',
			},
			{
				id: 'id 2',
				text: 'some text',
			},
			{
				id: 'id 3',
				text: 'some text',
			},
		]);
	});

	test('selectIds', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				entities: {
					1: {
						id: 'id 1',
						text: 'some text',
					},
					2: {
						id: 'id 2',
						text: 'some text',
					},
					3: {
						id: 'id 3',
						text: 'some text',
					},
				},
				ids: ['1', '2', '3'],
			},
		};

		expect(getComments.selectIds(state as StateSchema)).toEqual(['1', '2', '3']);
	});

	test('selectEntities', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				entities: {
					1: {
						id: 'id 1',
						text: 'some text',
					},
					2: {
						id: 'id 2',
						text: 'some text',
					},
					3: {
						id: 'id 3',
						text: 'some text',
					},
				},
				ids: ['1', '2', '3'],
			},
		};

		expect(getComments.selectEntities(state as StateSchema)).toEqual({
			1: {
				id: 'id 1',
				text: 'some text',
			},
			2: {
				id: 'id 2',
				text: 'some text',
			},
			3: {
				id: 'id 3',
				text: 'some text',
			},
		});
	});

	test('selectTotal', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				entities: {
					1: {
						id: 'id 1',
						text: 'some text',
					},
					2: {
						id: 'id 2',
						text: 'some text',
					},
					3: {
						id: 'id 3',
						text: 'some text',
					},
				},
				ids: ['1', '2', '3'],
			},
		};

		expect(getComments.selectTotal(state as StateSchema)).toEqual(3);
	});

	test('selectById', () => {
		const state: DeepPartial<StateSchema> = {
			comments: {
				entities: {
					1: {
						id: 'id 1',
						text: 'some text',
					},
					2: {
						id: 'id 2',
						text: 'some text',
					},
					3: {
						id: 'id 3',
						text: 'some text',
					},
				},
				ids: ['1', '2', '3'],
			},
		};

		expect(getComments.selectById(state as StateSchema, 2)).toEqual({
			id: 'id 2',
			text: 'some text',
		});
	});
});
