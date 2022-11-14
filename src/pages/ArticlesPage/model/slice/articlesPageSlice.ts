import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { Article, ArticlesView } from 'entities/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/localstorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const initialState: ArticlesPageSchema = {
	loading: false,
	view: ArticlesView.SMALL,
	ids: [],
	entities: {},

	page: 1,
	hasMore: true,

	_init: false,
};

const articlesPageAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
	(state) => state.articlesPage || articlesPageAdapter.getInitialState<ArticlesPageSchema>(initialState),
);

export const articlesPageSlice = createSlice({
	name: 'articlesPage',
	initialState: articlesPageAdapter.getInitialState<ArticlesPageSchema>(initialState),
	reducers: {
		changeView: (state, action: PayloadAction<ArticlesView>) => {
			state.view = action.payload;
			localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY, action.payload);
		},
		changeLimit: (state, action: PayloadAction<number>) => {
			state.limit = action.payload;
		},
		changePage: (state, action: PayloadAction<number>) => {
			state.page = action.payload;
		},
		changeHasMore: (state, action: PayloadAction<boolean>) => {
			state.hasMore = action.payload;
		},
		initView: (state) => {
			const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticlesView;

			state.view = view ?? initialState.view;
			state.limit = view === ArticlesView.BIG ? 3 : 8;
			state._init = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.loading = false;
				articlesPageAdapter.addMany(state, action.payload);
				state.hasMore = action.payload.length > 0;
			});
	},
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
