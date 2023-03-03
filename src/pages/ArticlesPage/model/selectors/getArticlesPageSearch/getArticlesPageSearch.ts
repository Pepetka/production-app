import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageSearch = createSelector(getArticlesPageState, (state?: ArticlesPageSchema) => state?.search ?? '');
