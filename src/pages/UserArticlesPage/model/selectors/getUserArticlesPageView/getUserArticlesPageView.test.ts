import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { ArticlesView } from '@/entities/Article';
import { getUserArticlesPageView } from './getUserArticlesPageView';

describe('getUserArticlesPageView', () => {
	test('return user articles page view', () => {
		const state: DeepPartial<StateSchema> = {
			userArticlesPage: {
				view: ArticlesView.BIG,
			},
		};

		expect(getUserArticlesPageView(state as StateSchema)).toEqual(ArticlesView.BIG);
	});

	test('empty state', () => {
		const state: DeepPartial<StateSchema> = {};

		expect(getUserArticlesPageView(state as StateSchema)).toEqual(ArticlesView.SMALL);
	});
});
