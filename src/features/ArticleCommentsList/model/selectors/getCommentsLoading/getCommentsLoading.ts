import { createSelector } from '@reduxjs/toolkit';
import { CommentsSchema } from '../../types/commentsSchema';
import { getCommentsState } from '../getCommentsState/getCommentsState';

export const getCommentsLoading = createSelector(getCommentsState, (state?: CommentsSchema) => state?.loading ?? false);
