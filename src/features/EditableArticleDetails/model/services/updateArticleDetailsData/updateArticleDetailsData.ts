import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { ThunkConfig } from '@/app/provider/Store';
import { Article } from '@/entities/Article';
import { ValidateEditableArticleDetailsError } from '../../consts/consts';
import { validateArticleDetailsData } from '../validateArticleDetailsdata/validateArticleDetailsData';
import { getEditableArticleDetailsFormData } from '../../selectors/getEditableArticleDetailsFormData/getEditableArticleDetailsFormData';

export const updateArticleDetailsData = createAsyncThunk<
	Omit<Article, 'user'>,
	void,
	ThunkConfig<string | Array<ValidateEditableArticleDetailsError>>
>('editableArticleDetails/updateArticleDetailsData', async (_, { rejectWithValue, getState, extra }) => {
	try {
		const newArticleData = getEditableArticleDetailsFormData(getState());
		const validateErrors = validateArticleDetailsData(newArticleData!);

		if (validateErrors.length > 0) return rejectWithValue(validateErrors);

		let response: AxiosResponse<Omit<Article, 'user'> & { userId: string }>;

		if (!newArticleData?.id) {
			response = await extra.api.post<Omit<Article, 'user'> & { userId: string }>('/articles', newArticleData);
		} else {
			response = await extra.api.put<Omit<Article, 'user'> & { userId: string }>(`/articles/${newArticleData?.id}`, newArticleData);
		}

		if (!response.data) {
			throw new Error('error');
		}

		return response.data;
	} catch (e) {
		return rejectWithValue('Update article error');
	}
});
