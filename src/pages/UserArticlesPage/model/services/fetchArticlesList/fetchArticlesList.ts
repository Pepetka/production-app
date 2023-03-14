import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';
import { getUserArticlesPageLimit } from '../../selectors/getUserArticlesPageLimit/getUserArticlesPageLimit';
import { getUserArticlesPagePage } from '../../selectors/getUserArticlesPagePage/getUserArticlesPagePage';

interface FetchArticlesListProps {
	replace?: boolean;
	userId?: string;
}

export const fetchArticlesList = createAsyncThunk<Array<Article>, FetchArticlesListProps, ThunkConfig<string>>(
	'userArticlesPage/fetchArticlesList',
	async ({ replace = false, userId }, { rejectWithValue, getState, extra }) => {
		try {
			const limit = getUserArticlesPageLimit(getState());
			const page = getUserArticlesPagePage(getState());

			const response = await extra.api.get<Array<Article>>('/articles', {
				params: {
					_expand: 'user',
					userId,
					_limit: limit,
					_page: page,
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
