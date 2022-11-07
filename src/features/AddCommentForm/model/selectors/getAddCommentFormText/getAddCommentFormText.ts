import { createSelector } from '@reduxjs/toolkit';
import {
	getAddCommentFormState,
} from 'features/AddCommentForm/model/selectors/getAddCommentFormState/getAddCommentFormState';
import { AddCommentFormSchema } from 'features/AddCommentForm';

export const getAddCommentFormText = createSelector(getAddCommentFormState, (state?: AddCommentFormSchema) => state?.text);
