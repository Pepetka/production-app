import { createSelector } from '@reduxjs/toolkit';
import { CommentsSchema } from 'features/ArticleCommentsList';
import { getCommentsState } from '../getCommentsState/getCommentsState';

export const getCommentsError = createSelector(getCommentsState, (state?: CommentsSchema) => state?.error ?? undefined);
