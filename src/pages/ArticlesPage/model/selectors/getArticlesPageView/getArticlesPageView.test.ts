import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { ArticlesView } from '@/entities/Article';
import { getArticlesPageView } from './getArticlesPageView';

describe('getArticlesPageView', () => {
	test('return articles page view', () => {
		const state: DeepPartial<StateSchema> = {
			articlesPage: {
				view: ArticlesView.BIG,
			},
		};

		expect(getArticlesPageView(state as StateSchema)).toEqual(ArticlesView.BIG);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getArticlesPageView(state as StateSchema)).toEqual(ArticlesView.SMALL);
	});
});
