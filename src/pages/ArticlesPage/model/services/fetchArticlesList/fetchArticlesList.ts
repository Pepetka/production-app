import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageType } from 'pages/ArticlesPage/model/selectors/getArticlesPageType/getArticlesPageType';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageLimit/getArticlesPageLimit';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';

interface FetchArticlesListProps {
	replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<Array<Article>, FetchArticlesListProps, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async ({ replace = false }, { rejectWithValue, getState, extra }) => {
		try {
			const limit = getArticlesPageLimit(getState());
			const sort = getArticlesPageSort(getState());
			const search = getArticlesPageSearch(getState());
			const order = getArticlesPageOrder(getState());
			const type = getArticlesPageType(getState());
			const page = getArticlesPagePage(getState());

			addQueryParams({
				sort, order, search, type,
			});

			const response = await extra.api.get<Array<Article>>('/articles', {
				params: {
					_expand: 'user',
					_limit: limit,
					_page: page,
					_sort: sort,
					_order: order,
					q: search,
					type: type === ArticleType.ALL ? undefined : type,
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
