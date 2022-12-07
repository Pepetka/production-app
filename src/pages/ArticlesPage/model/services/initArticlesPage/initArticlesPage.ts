import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { getQueryParams } from '@/shared/lib/url/getQueryParams/getQueryParams';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';
import { getArticlesPageType } from '../../selectors/getArticlesPageType/getArticlesPageType';
import { getArticlesPageSearch } from '../../selectors/getArticlesPageSearch/getArticlesPageSearch';
import { getArticlesPageOrder } from '../../selectors/getArticlesPageOrder/getArticlesPageOrder';
import { getArticlesPageSort } from '../../selectors/getArticlesPageSort/getArticlesPageSort';
import { getArticlesPageInit } from '../../selectors/getArticlesPageInit/getArticlesPageInit';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/initArticlesPage',
	async (_, { dispatch, getState }) => {
		const inited = getArticlesPageInit(getState());
		const {
			sort,
			order,
			search,
			type,
		} = getQueryParams();

		if (!inited) {
			dispatch(articlesPageActions.initView());
			if (sort) dispatch(articlesPageActions.changeSort(sort as ArticleSortField));
			if (order) dispatch(articlesPageActions.changeOrder(order as SortOrder));
			if (search) dispatch(articlesPageActions.changeSearch(search));
			if (type) dispatch(articlesPageActions.changeType(type as ArticleType));
			dispatch(fetchArticlesList({}));
		}

		addQueryParams({
			sort: getArticlesPageSort(getState()),
			order: getArticlesPageOrder(getState()),
			search: getArticlesPageSearch(getState()),
			type: getArticlesPageType(getState()),
		});
	},
);
