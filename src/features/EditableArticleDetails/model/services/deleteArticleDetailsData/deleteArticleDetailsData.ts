import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';
import { getEditableArticleDetailsFormData } from '../../selectors/getEditableArticleDetailsFormData/getEditableArticleDetailsFormData';

export const deleteArticleDetailsData = createAsyncThunk<void, void, ThunkConfig<string>>(
	'editableArticleDetails/deleteArticleDetailsData',
	async (_, { rejectWithValue, extra, getState }) => {
		try {
			const newArticleData = getEditableArticleDetailsFormData(getState());

			if (newArticleData?.id) {
				await extra.api.delete<Omit<Article, 'user'>>(`/articles/${newArticleData?.id}`);
			}
		} catch (e) {
			return rejectWithValue('Fetch article error');
		}
	},
);
