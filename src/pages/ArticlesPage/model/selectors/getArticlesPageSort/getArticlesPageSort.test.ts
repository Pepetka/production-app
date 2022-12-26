import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { ArticleSortField } from '@/entities/Article';
import { getArticlesPageSort } from './getArticlesPageSort';

describe('getArticlesPageSort', () => {
	test('return articles page sort', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				sort: ArticleSortField.TITLE,
			},
		};

		expect(getArticlesPageSort(state as StateSchema)).toEqual(
			ArticleSortField.TITLE,
		);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageSort(state as StateSchema)).toEqual(
			ArticleSortField.CREATED_AT,
		);
	});
});
