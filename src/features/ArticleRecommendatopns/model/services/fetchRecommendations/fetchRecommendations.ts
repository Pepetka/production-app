import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Article } from 'entities/Article';

export const fetchRecommendations = createAsyncThunk<Array<Article>, void, ThunkConfig<string>>(
	'articleRecommendations/fetchRecommendations',
	async (_, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Array<Article>>('/articles', {
				params: {
					_limit: 4,
				},
			});

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Server error');
		}
	},
);
