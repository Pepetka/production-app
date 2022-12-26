import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageHasMore = createSelector(
	getArticlesPageState,
	(state?: ArticlesPageSchema) => state?.hasMore ?? true,
);
