import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { userArticlesPageActions } from '../../slice/userArticlesPageSlice';
import { getUserArticlesPageInit } from '../../selectors/getUserArticlesPageInit/getUserArticlesPageInit';

interface InitUserArticlesPageProps {
	limit: number;
	userId: string;
}

export const initUserArticlesPage = createAsyncThunk<void, InitUserArticlesPageProps, ThunkConfig<string>>(
	'userArticlesPage/initUserArticlesPage',
	async ({ limit, userId }, { dispatch, getState }) => {
		const inited = getUserArticlesPageInit(getState());

		if (!inited) {
			dispatch(userArticlesPageActions.initView(limit));
			dispatch(fetchArticlesList({ userId }));
		}
	},
);
