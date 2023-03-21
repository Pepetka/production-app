import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/provider/Store';
import type { Article } from '@/entities/Article';
import { ArticlesView } from '@/entities/Article';
import { LOCAL_STORAGE_ARTICLES_VIEW_KEY } from '@/shared/const/localstorage';
import { UserArticlesPageSchema } from '../types/userArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const initialState: UserArticlesPageSchema = {
	loading: false,
	ids: [],
	entities: {},

	page: 1,
	hasMore: true,

	view: ArticlesView.SMALL,

	_init: false,
};

const userArticlesPageAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id ?? '',
});

export const getUserArticles = userArticlesPageAdapter.getSelectors<StateSchema>(
	(state) => state.userArticlesPage || userArticlesPageAdapter.getInitialState<UserArticlesPageSchema>(initialState),
);

export const userArticlesPageSlice = createSlice({
	name: 'userArticlesPage',
	initialState: userArticlesPageAdapter.getInitialState<UserArticlesPageSchema>(initialState),
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
		initView: (state, action: PayloadAction<number>) => {
			const view = localStorage.getItem(LOCAL_STORAGE_ARTICLES_VIEW_KEY) as ArticlesView;

			state.view = view ?? initialState.view;
			state.limit = action.payload;
			state._init = true;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.loading = true;
				state.error = undefined;

				if (action.meta.arg.replace) {
					userArticlesPageAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.loading = false;
				state.hasMore = action.payload.length >= state.limit!;

				if (action.meta.arg.replace) {
					userArticlesPageAdapter.setAll(state, action.payload);
				} else {
					userArticlesPageAdapter.addMany(state, action.payload);
				}
			});
	},
});

export const { actions: userArticlesPageActions, reducer: userArticlesPageReducer } = userArticlesPageSlice;
