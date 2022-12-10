import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/commentFormSchema';

const initialState: CommentFormSchema = {
	text: '',
};

export const commentFormSlice = createSlice({
	name: 'commentForm',
	initialState,
	reducers: {
		setText: (state, action: PayloadAction<string>) => {
			state.text = action.payload;
		},
	},
});

export const { actions: commentFormActions, reducer: commentFormReducer } = commentFormSlice;
