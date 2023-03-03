import { createSelector } from '@reduxjs/toolkit';
import { EditableArticleDetailsSchema } from '../../types/articleDetailsSchema';
import { getEditableArticleDetailsState } from '../getEditableArticleDetailsState/getEditableArticleDetailsState';

export const getEditableArticleDetailsError = createSelector(
	getEditableArticleDetailsState,
	(state?: EditableArticleDetailsSchema) => state?.error ?? '',
);
