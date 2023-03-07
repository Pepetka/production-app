import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';
import { getAuthData } from '@/entities/User';

export const fetchArticleDetailsData = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
	'editableArticleDetails/fetchArticleDetailsData',
	async (articleId, { rejectWithValue, extra, getState }) => {
		const authData = getAuthData(getState());

		if (!articleId) {
			return {
				img: '',
				title: '',
				subtitle: '',
				userId: authData!.id,
				user: authData!,
				type: [],
				blocks: [],
				views: 0,
				createdAt: new Date().toLocaleDateString(),
			};
		}

		try {
			const response = await extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
					_expand: 'user',
				},
			});

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Fetch article error');
		}
	},
);
