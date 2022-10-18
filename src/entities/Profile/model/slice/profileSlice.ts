import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/Profile/model/services/fetchProfileData/fetchProfileData';
import { Profile, ProfileSchema } from '../types/profileSchema';

const initialState: ProfileSchema = {
	loading: false,
	readOnly: true,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfileData: (state, action: PayloadAction<Profile>) => {
			state.data = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(fetchProfileData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
			});
	},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
