import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from '../validateProfiledata/validateProfileData';
import { getProfileFormData } from '../../selectors/getProfileFormData/getProfileFormData';
import { Profile } from '@/entities/Profile';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string | Array<ValidateProfileError>>>(
	'profile/updateProfileData',
	async (_, { rejectWithValue, getState, extra }) => {
		try {
			const newProfileData = getProfileFormData(getState());
			const validateErrors = validateProfileData(newProfileData!);

			if (validateErrors.length > 0) return rejectWithValue(validateErrors);

			const response = await extra.api.put<Profile>(`/profile/${newProfileData?.id}`, newProfileData);

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Update profile error');
		}
	},
);
