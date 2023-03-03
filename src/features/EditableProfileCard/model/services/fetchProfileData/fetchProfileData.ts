import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
	'profile/fetchArticleDetailsData',
	async (profileId, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Profile>(`/profile/${profileId}`);

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Fetch profile error');
		}
	},
);
