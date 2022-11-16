import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/provider/Store';
import { Article } from 'entities/Article';
import { ArticleRecommendationsSchema } from '../types/articleRecommendationsSchema';
import {
	fetchRecommendations,
} from '../services/fetchRecommendations/fetchRecommendations';

const initialState: ArticleRecommendationsSchema = {
	loading: false,
	ids: [],
	entities: {},
};

const articleRecommendationsAdapter = createEntityAdapter<Article>({
	selectId: (article) => article.id,
});

export const getRecommendations = articleRecommendationsAdapter.getSelectors<StateSchema>(
	(state) => state.articleRecommendations || articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>(initialState),
);

export const articleRecommendationsSlice = createSlice({
	name: 'articleRecommendations',
	initialState: articleRecommendationsAdapter.getInitialState<ArticleRecommendationsSchema>(initialState),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRecommendations.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchRecommendations.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchRecommendations.fulfilled, (state, action) => {
				state.loading = false;
				state.error = undefined;
				articleRecommendationsAdapter.setAll(state, action.payload);
			});
	},
});

export const { actions: articleRecommendationsActions, reducer: articleRecommendationsReducer } = articleRecommendationsSlice;
