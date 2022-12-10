import { createSelector } from '@reduxjs/toolkit';
import {
	getCommentFormState,
} from '../getCommentFormState/getCommentFormState';
import { CommentFormSchema } from '../../types/commentFormSchema';

export const getCommentFormText = createSelector(getCommentFormState, (state?: CommentFormSchema) => state?.text ?? '');
