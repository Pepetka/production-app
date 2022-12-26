import { createSelector } from '@reduxjs/toolkit';
import { ArticleSortField } from '@/entities/Article';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import type { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageSort = createSelector(
	getArticlesPageState,
	(state?: ArticlesPageSchema) => state?.sort ?? ArticleSortField.CREATED_AT,
);
