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

		let response: AxiosResponse<Omit<Article, 'user'>>;

		if (!newArticleData?.id) {
			response = await extra.api.post<Omit<Article, 'user'>>('/articles', { ...newArticleData, user: undefined });
		} else {
			response = await extra.api.put<Omit<Article, 'user'>>(`/articles/${newArticleData?.id}`, { ...newArticleData, user: undefined });
		}

		if (!response.data) {
			throw new Error('error');
		}

		return response.data;
	} catch (e) {
		console.log(e);
		return rejectWithValue('Update article error');
	}
});
