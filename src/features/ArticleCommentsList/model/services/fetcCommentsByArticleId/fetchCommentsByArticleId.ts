import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/provider/Store';
import { Comment } from 'entities/Comment';

interface FetchCommentsByArticleIdProps {
	articleId: string
}

export const fetchCommentsByArticleId = createAsyncThunk<Array<Comment>, FetchCommentsByArticleIdProps, ThunkConfig<string>>(
	'comments/FetchCommentsByArticleId',
	async ({ articleId }, { rejectWithValue, extra }) => {
		try {
			const response = await extra.api.get<Array<Comment>>('/comments', {
				params: {
					articleId,
					_expand: 'user',
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
