import { createSelector } from '@reduxjs/toolkit';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageInit = createSelector(
	getArticlesPageState,
	(state?: ArticlesPageSchema) => state?._init ?? false,
);
