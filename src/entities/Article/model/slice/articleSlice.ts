import { createSlice } from '@reduxjs/toolkit';
import { ArticleSchema } from '../types/articleSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleSchema = {
	loading: false,
};

export const articleSlice = createSlice({
	name: 'article',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticleById.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchArticleById.fulfilled, (state, action) => {
				state.loading = false;
				state.error = undefined;
				state.article = action.payload;
			})
			.addCase(fetchArticleById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { actions: articleActions, reducer: articleReducer } =
	articleSlice;
