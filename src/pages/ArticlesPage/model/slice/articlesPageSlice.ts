import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { Article, ArticlesView } from 'entities/Article';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from 'shared/const/localstorage';
import { ArticlesPageSchema } from '../types/articlesPageSchema';

const initialState: ArticlesPageSchema = {
	loading: false,
	view: ArticlesView.SMALL,
	ids: [],
	entities: {},
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
		initView: (state) => {
			state.view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY)
				? localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticlesView
				: initialState.view;
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
				articlesPageAdapter.setAll(state, action.payload);
			});
	},
});

export const { actions: articlesPageActions, reducer: articlesPageReducer } = articlesPageSlice;
