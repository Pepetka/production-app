import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile } from '../../types/profileSchema';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/updateProfileData',
	async (_, { rejectWithValue, getState, extra }) => {
		try {
			const newProfileData = getProfileFormData(getState());

			const response = await extra.api.put<Profile>('/profile', newProfileData);

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Update profile error');
		}
	},
);
