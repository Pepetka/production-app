import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';
import { StateSchema } from 'app/provider/Store';
import { CommentsSchema } from '../types/commentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId';

const initialState: CommentsSchema = {
	loading: false,
	ids: [],
	entities: {},
};

const commentsAdapter = createEntityAdapter<Comment>({
	selectId: (comment) => comment.id,
});

export const getComments = commentsAdapter.getSelectors<StateSchema>(
	(state) => state.comments || commentsAdapter.getInitialState<CommentsSchema>(initialState),
);

export const commentsSlice = createSlice({
	name: 'comments',
	initialState: commentsAdapter.getInitialState<CommentsSchema>(initialState),
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchCommentsByArticleId.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
				state.loading = false;
				state.error = undefined;
				commentsAdapter.setAll(state, action.payload);
			});
	},
});

export const { actions: commentsActions, reducer: commentsReducer } = commentsSlice;
