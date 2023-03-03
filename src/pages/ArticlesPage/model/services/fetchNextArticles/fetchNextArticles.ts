import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { getArticlesPageHasMore } from '../../selectors/getArticlesPageHasMore/getArticlesPageHasMore';
import { getArticlesPageLoading } from '../../selectors/getArticlesPageLoading/getArticlesPageLoading';
import { getArticlesPagePage } from '../../selectors/getArticlesPagePage/getArticlesPagePage';

export const fetchNextArticles = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/fetchNextArticles',
	async (_, { dispatch, getState }) => {
		const hasMore = getArticlesPageHasMore(getState());
		const loading = getArticlesPageLoading(getState());
		const page = getArticlesPagePage(getState());

		if (hasMore && !loading) {
			dispatch(articlesPageActions.changePage(page + 1));
			dispatch(fetchArticlesList({}));
		}
	},
);
