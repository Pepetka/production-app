import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/profileSchema';
import { Profile } from '@/entities/Profile';

const initialState: ProfileSchema = {
	loading: false,
	readOnly: true,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setProfileData: (state, action: PayloadAction<Profile>) => {
			state.formData = {
				...state.formData,
				...action.payload,
			};
		},
		cancelEdit: (state) => {
			state.readOnly = true;
			state.formData = state.data;
			state.validateErrors = undefined;
		},
		changeReadOnly: (state) => {
			state.readOnly = !state.readOnly;
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
				state.formData = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.loading = true;
				state.error = undefined;
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.loading = false;
				if (typeof action.payload === 'string') {
					state.error = action.payload;
				} else {
					state.validateErrors = action.payload;
					state.formData = state.data;
				}
			})
			.addCase(updateProfileData.fulfilled, (state, action) => {
				state.loading = false;
				state.data = action.payload;
				state.formData = action.payload;
				state.validateErrors = undefined;
				state.readOnly = true;
			});
	},
});

export const { actions: profileActions, reducer: profileReducer } = profileSlice;
