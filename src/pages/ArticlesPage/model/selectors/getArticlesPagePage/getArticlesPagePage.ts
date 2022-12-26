import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPagePage = createSelector(
	getArticlesPageState,
	(state?: ArticlesPageSchema) => state?.page ?? 1,
);
