import { createSelector } from '@reduxjs/toolkit';
import { EditableArticleDetailsSchema } from '../../types/articleDetailsSchema';
import { getEditableArticleDetailsState } from '../getEditableArticleDetailsState/getEditableArticleDetailsState';

export const getEditableArticleDetailsReadOnly = createSelector(
	getEditableArticleDetailsState,
	(state?: EditableArticleDetailsSchema) => state?.readOnly ?? true,
);
