import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { userArticlesPageActions } from '../../slice/userArticlesPageSlice';
import { getUserArticlesPageHasMore } from '../../selectors/getUserArticlesPageHasMore/getUserArticlesPageHasMore';
import { getUserArticlesPageLoading } from '../../selectors/getUserArticlesPageLoading/getUserArticlesPageLoading';
import { getUserArticlesPagePage } from '../../selectors/getUserArticlesPagePage/getUserArticlesPagePage';

interface FetchNextArticlesProps {
	userId?: string;
}

export const fetchNextArticles = createAsyncThunk<void, FetchNextArticlesProps, ThunkConfig<string>>(
	'userArticlesPage/fetchNextArticles',
	async ({ userId }, { dispatch, getState }) => {
		const hasMore = getUserArticlesPageHasMore(getState());
		const loading = getUserArticlesPageLoading(getState());
		const page = getUserArticlesPagePage(getState());

		if (hasMore && !loading) {
			dispatch(userArticlesPageActions.changePage(page + 1));
			dispatch(fetchArticlesList({ userId }));
		}
	},
);
