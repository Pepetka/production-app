import { createSelector } from '@reduxjs/toolkit';
import {
	getAddCommentFormState,
} from '../getAddCommentFormState/getAddCommentFormState';
import { AddCommentFormSchema } from '../../types/addCommentFormSchema';

export const getAddCommentFormText = createSelector(getAddCommentFormState, (state?: AddCommentFormSchema) => state?.text ?? '');
