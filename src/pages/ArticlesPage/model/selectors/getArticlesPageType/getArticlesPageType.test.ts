import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { ArticleType } from '@/entities/Article';
import { getArticlesPageType } from './getArticlesPageType';

describe('getArticlesPageType', () => {
	test('return articles page type', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				type: ArticleType.ECONOMY,
			},
		};

		expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ECONOMY);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageType(state as StateSchema)).toEqual(ArticleType.ALL);
	});
});
