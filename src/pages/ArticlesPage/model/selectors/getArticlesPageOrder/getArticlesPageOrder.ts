import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageOrder = createSelector(getArticlesPageState, (state?: ArticlesPageSchema) => state?.order ?? 'asc');
