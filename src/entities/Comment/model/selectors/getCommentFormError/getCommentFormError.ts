import { createSelector } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../../types/commentFormSchema';
import { getCommentFormState } from '../getCommentFormState/getCommentFormState';

export const getCommentFormError = createSelector(
	getCommentFormState,
	(state?: CommentFormSchema) => state?.error,
);
