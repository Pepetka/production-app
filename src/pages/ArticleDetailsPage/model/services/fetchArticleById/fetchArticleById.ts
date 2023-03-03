import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';

interface fetchArticleByIdProps {
	id: string;
}

export const fetchArticleById = createAsyncThunk<Article, fetchArticleByIdProps, ThunkConfig<string>>(
	'article/fetchArticleById',
	async ({ id }, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Article>(`/articles/${id}`, {
				params: {
					_expand: 'user',
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
