import { describe, expect, test } from '@jest/globals';
import { StateSchema } from '@/app/provider/Store';
import { ArticlesView } from '@/entities/Article';
import { UserArticlesPageSchema } from '../types/userArticlesPageSchema';
import { userArticlesPageActions, userArticlesPageReducer, getArticles } from './userArticlesPageSlice';

describe('getArticles', () => {
	const state: DeepPartial<StateSchema> = {
		articlesPage: {
			ids: ['1', '2', '3'],
			entities: {
				1: {
					id: 'id 1',
					title: 'title 1',
				},
				2: {
					id: 'id 2',
					title: 'title 2',
				},
				3: {
					id: 'id 3',
					title: 'title 3',
				},
			},
		},
	};

	test('selectAll', () => {
		expect(getArticles.selectAll(state as StateSchema)).toEqual([
			{
				id: 'id 1',
				title: 'title 1',
			},
			{
				id: 'id 2',
				title: 'title 2',
			},
			{
				id: 'id 3',
				title: 'title 3',
			},
		]);
	});

	test('selectIds', () => {
		expect(getArticles.selectIds(state as StateSchema)).toEqual(['1', '2', '3']);
	});

	test('selectEntities', () => {
		expect(getArticles.selectEntities(state as StateSchema)).toEqual({
			1: {
				id: 'id 1',
				title: 'title 1',
			},
			2: {
				id: 'id 2',
				title: 'title 2',
			},
			3: {
				id: 'id 3',
				title: 'title 3',
			},
		});
	});

	test('selectTotal', () => {
		expect(getArticles.selectTotal(state as StateSchema)).toEqual(3);
	});

	test('selectById', () => {
		expect(getArticles.selectById(state as StateSchema, 2)).toEqual({
			id: 'id 2',
			title: 'title 2',
		});
	});
});

describe('articlesPageSlice', () => {
	const state: DeepPartial<UserArticlesPageSchema> = {
		ids: ['1', '2', '3'],
		entities: {
			1: {
				id: 'id 1',
				title: 'title 1',
			},
			2: {
				id: 'id 2',
				title: 'title 2',
			},
			3: {
				id: 'id 3',
				title: 'title 3',
			},
		},
		page: 3,
		view: ArticlesView.BIG,
		hasMore: true,
		loading: false,
	};

	test('changePage', () => {
		expect(userArticlesPageReducer(state as UserArticlesPageSchema, userArticlesPageActions.changePage(10))).toEqual({
			...state,
			page: 10,
		});
	});

	test('initView', () => {
		expect(userArticlesPageReducer(state as UserArticlesPageSchema, userArticlesPageActions.initView(10))).toEqual({
			...state,
			limit: 10,
			view: ArticlesView.SMALL,
			_init: true,
		});
	});

	test('changeView', () => {
		expect(userArticlesPageReducer(state as UserArticlesPageSchema, userArticlesPageActions.changeView(ArticlesView.SMALL))).toEqual({
			...state,
			view: ArticlesView.SMALL,
		});
	});

	test('changeHasMore', () => {
		expect(userArticlesPageReducer(state as UserArticlesPageSchema, userArticlesPageActions.changeHasMore(false))).toEqual({
			...state,
			hasMore: false,
		});
	});

	test('changeLimit', () => {
		expect(userArticlesPageReducer(state as UserArticlesPageSchema, userArticlesPageActions.changeLimit(2))).toEqual({
			...state,
			limit: 2,
		});
	});

	test('undefined state', () => {
		const initialState: UserArticlesPageSchema = {
			loading: false,
			view: ArticlesView.SMALL,
			ids: [],
			entities: {},

			page: 1,
			hasMore: true,
		};

		expect(userArticlesPageReducer(undefined, userArticlesPageActions.changePage(10))).toEqual({
			...initialState,
			page: 10,
		});
		expect(userArticlesPageReducer(undefined, userArticlesPageActions.initView(10))).toEqual({
			...initialState,
			limit: 10,
			_init: true,
		});
		expect(userArticlesPageReducer(undefined, userArticlesPageActions.changeView(ArticlesView.SMALL))).toEqual({
			...initialState,
			view: ArticlesView.SMALL,
		});
		expect(userArticlesPageReducer(undefined, userArticlesPageActions.changeHasMore(false))).toEqual({
			...initialState,
			hasMore: false,
		});
		expect(userArticlesPageReducer(undefined, userArticlesPageActions.changeLimit(2))).toEqual({
			...initialState,
			limit: 2,
		});
	});
});
