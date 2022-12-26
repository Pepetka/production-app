import { createSelector } from '@reduxjs/toolkit';
import { ArticlesView } from '@/entities/Article';
import { getArticlesPageState } from '../getArticlesPageState/getArticlesPageState';
import { ArticlesPageSchema } from '../../types/articlesPageSchema';

export const getArticlesPageView = createSelector(
	getArticlesPageState,
	(state?: ArticlesPageSchema) => state?.view ?? ArticlesView.SMALL,
);
