import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Profile } from '../../types/profileSchema';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
	'profile/fetchProfileData',
	async (_, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Profile>('/profile');

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Fetch profile error');
		}
	},
);
