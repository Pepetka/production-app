import { createSelector } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { getAddCommentFormState } from '../getAddCommentFormState/getAddCommentFormState';

export const getAddCommentFormError = createSelector(getAddCommentFormState, (state?: AddCommentFormSchema) => state?.error);
