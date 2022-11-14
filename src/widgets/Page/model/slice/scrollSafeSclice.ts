import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSafeSchema } from '../types/ScrollSafeSchema';

const initialState: ScrollSafeSchema = {
	scroll: {},
};

export const scrollSafeSlice = createSlice({
	name: 'scrollSafe',
	initialState,
	reducers: {
		setScroll: (state, action: PayloadAction<{ path: string, position: number }>) => {
			const { path, position } = action.payload;

			state.scroll[path] = position;
		},
	},
});

export const { actions: scrollSafeActions, reducer: scrollSafeReducer } = scrollSafeSlice;
