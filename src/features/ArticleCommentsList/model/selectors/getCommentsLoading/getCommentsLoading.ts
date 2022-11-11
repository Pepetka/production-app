import { createSelector } from '@reduxjs/toolkit';
import { CommentsSchema } from 'features/ArticleCommentsList';
import { getCommentsState } from '../getCommentsState/getCommentsState';

export const getCommentsLoading = createSelector(getCommentsState, (state?: CommentsSchema) => state?.loading ?? false);
