import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';
import { getEditableArticleDetailsFormData } from '../../selectors/getEditableArticleDetailsFormData/getEditableArticleDetailsFormData';

export const deleteArticleDetailsData = createAsyncThunk<Omit<Article, 'user'>, void, ThunkConfig<string>>(
	'editableArticleDetails/deleteArticleDetailsData',
	async (_, { rejectWithValue, extra, getState }) => {
		try {
			const newArticleData = getEditableArticleDetailsFormData(getState());

			let response: AxiosResponse<Omit<Article, 'user'>>;

			if (newArticleData?.id) {
				response = await extra.api.delete<Omit<Article, 'user'>>(`/articles/${newArticleData?.id}`);
			} else {
				return { ...newArticleData, user: undefined } as Omit<Article, 'user'>;
			}

			if (!response.data) {
				throw new Error('error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Fetch article error');
		}
	},
);
