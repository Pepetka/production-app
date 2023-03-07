import { createSelector } from '@reduxjs/toolkit';
import { EditableArticleDetailsSchema } from '../../types/articleDetailsSchema';
import { getEditableArticleDetailsState } from '../getEditableArticleDetailsState/getEditableArticleDetailsState';

export const getEditableArticleDetailsValidationErrors = createSelector(
	getEditableArticleDetailsState,
	(state?: EditableArticleDetailsSchema) => state?.validateErrors ?? undefined,
);
