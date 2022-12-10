import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageLimit = createSelector(getArticlesPageState, (state?: ArticlesPageSchema) => state?.limit ?? 10);
