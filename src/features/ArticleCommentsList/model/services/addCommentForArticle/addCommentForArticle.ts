import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Comment } from 'entities/Comment';
import { getAuthData } from 'entities/User';
import { getArticleData } from 'entities/Article';
import { fetchCommentsByArticleId } from 'features/ArticleCommentsList';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'login/addCommentForArticle',
	async (text, {
		rejectWithValue, dispatch, getState, extra,
	}) => {
		try {
			const user = getAuthData(getState());
			const articleData = getArticleData(getState());

			if (!text || !user || !articleData) return rejectWithValue('Send comment error');

			const comment = {
				text,
				userId: user.id,
				articleId: articleData.id,
			};

			const response = await extra.api.post<Comment>('/comments', comment);

			if (!response.data) {
				throw new Error('error');
			}

			dispatch(fetchCommentsByArticleId({ articleId: articleData.id }));

			return response.data;
		} catch (e) {
			return rejectWithValue('Send comment error');
		}
	},
);
