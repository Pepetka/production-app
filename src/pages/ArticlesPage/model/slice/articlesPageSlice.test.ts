import { describe, expect, test } from '@jest/globals';
import { StateSchema } from 'app/provider/Store';
import { ArticlesView } from 'entities/Article';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from './articlesPageSlice';

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
	const state: DeepPartial<ArticlesPageSchema> = {
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
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.changePage(10))).toEqual({
			...state,
			page: 10,
		});
	});

	test('initView', () => {
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.initView())).toEqual({
			...state,
			limit: 8,
			view: ArticlesView.SMALL,
		});
	});

	test('changeView', () => {
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.changeView(ArticlesView.SMALL))).toEqual({
			...state,
			view: ArticlesView.SMALL,
		});
	});

	test('changeHasMore', () => {
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.changeHasMore(false))).toEqual({
			...state,
			hasMore: false,
		});
	});

	test('changeLimit', () => {
		expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.changeLimit(2))).toEqual({
			...state,
			limit: 2,
		});
	});

	test('undefined state', () => {
		const initialState: ArticlesPageSchema = {
			loading: false,
			view: ArticlesView.SMALL,
			ids: [],
			entities: {},

			page: 1,
			hasMore: true,
		};

		expect(articlesPageReducer(undefined, articlesPageActions.changePage(10))).toEqual({
			...initialState,
			page: 10,
		});
		expect(articlesPageReducer(undefined, articlesPageActions.initView())).toEqual({
			...initialState,
			limit: 8,
		});
		expect(articlesPageReducer(undefined, articlesPageActions.changeView(ArticlesView.SMALL))).toEqual({
			...initialState,
			view: ArticlesView.SMALL,
		});
		expect(articlesPageReducer(undefined, articlesPageActions.changeHasMore(false))).toEqual({
			...initialState,
			hasMore: false,
		});
		expect(articlesPageReducer(undefined, articlesPageActions.changeLimit(2))).toEqual({
			...initialState,
			limit: 2,
		});
	});
});
