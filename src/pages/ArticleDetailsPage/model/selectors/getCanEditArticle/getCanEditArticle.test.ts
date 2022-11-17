import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { getCanEditArticle } from './getCanEditArticle';

describe('getCanEditArticle', () => {
	test('return can edit true', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 'some user id',
				},
			},
			article: {
				article: {
					user: {
						id: 'some user id',
					},
				},
			},
		};

		expect(getCanEditArticle(state as StateSchema)).toEqual(true);
	});

	test('return can edit false', () => {
		const state: DeepPartial<StateSchema> = {
			user: {
				authData: {
					id: 'some user id 1',
				},
			},
			article: {
				article: {
					user: {
						id: 'some user id',
					},
				},
			},
		};

		expect(getCanEditArticle(state as StateSchema)).toEqual(false);
	});

	test('empty state', () => {
		expect(getCanEditArticle({
			user: {
				authData: {
					id: 'some user id 1',
				},
			},
		} as StateSchema)).toEqual(false);
	});
});
