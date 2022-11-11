import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';

interface FetchArticlesListProps {
	page: number
}

export const fetchArticlesList = createAsyncThunk<Array<Article>, FetchArticlesListProps, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async ({ page }, { rejectWithValue, getState, extra }) => {
		try {
			const limit = getArticlesPageLimit(getState());

			const response = await extra.api.get<Array<Article>>('/articles', {
				params: {
					_expand: 'user',
					_limit: limit,
					_page: page,
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
