import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageInit } from '../../selectors/getArticlesPageInit/getArticlesPageInit';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/initArticlesPage',
	async (_, { dispatch, getState }) => {
		const inited = getArticlesPageInit(getState());

		if (!inited) {
			dispatch(articlesPageActions.initView());
			dispatch(fetchArticlesList({
				page: 1,
			}));
		}
	},
);
