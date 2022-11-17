import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getRecommendations } from './articleRecommendationsSlice';

describe('getRecommendations', () => {
	const state: DeepPartial<StateSchema> = {
		articleRecommendations: {
			ids: ['1', '2', '3'],
			entities: {
				1: {
					id: 'recommendation id 1',
				},
				2: {
					id: 'recommendation id 2',
				},
				3: {
					id: 'recommendation id 3',
				},
			},
		},
	};

	test('selectAll', () => {
		expect(getRecommendations.selectAll(state as StateSchema)).toEqual([
			{
				id: 'recommendation id 1',
			},
			{
				id: 'recommendation id 2',
			},
			{
				id: 'recommendation id 3',
			},
		]);
	});

	test('selectIds', () => {
		expect(getRecommendations.selectIds(state as StateSchema)).toEqual(['1', '2', '3']);
	});

	test('selectEntities', () => {
		expect(getRecommendations.selectEntities(state as StateSchema)).toEqual({
			1: {
				id: 'recommendation id 1',
			},
			2: {
				id: 'recommendation id 2',
			},
			3: {
				id: 'recommendation id 3',
			},
		});
	});

	test('selectTotal', () => {
		expect(getRecommendations.selectTotal(state as StateSchema)).toEqual(3);
	});

	test('selectById', () => {
		expect(getRecommendations.selectById(state as StateSchema, 2)).toEqual({
			id: 'recommendation id 2',
		});
	});
});
