import { createSelector } from '@reduxjs/toolkit';
import { getArticleState } from '../getArticleState/getArticleState';
import { ArticleSchema } from '../../types/articleSchema';

export const getArticleData = createSelector(getArticleState, (state?: ArticleSchema) => state?.article ?? undefined);
