import { createSelector } from '@reduxjs/toolkit';
import { getEditableArticleDetailsState } from '../getEditableArticleDetailsState/getEditableArticleDetailsState';
import { EditableArticleDetailsSchema } from '../../types/articleDetailsSchema';

export const getEditableArticleDetailsFormData = createSelector(
	getEditableArticleDetailsState,
	(state?: EditableArticleDetailsSchema) => state?.formData,
);
