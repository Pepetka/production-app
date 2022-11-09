import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Article } from 'entities/Article';

export const fetchArticlesList = createAsyncThunk<Array<Article>, void, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async (_, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Array<Article>>('/articles', {
				params: {
					_expand: 'user',
				},
			});

			if (response.statusText !== 'OK') {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Server error');
		}
	},
);
