import { createSelector } from '@reduxjs/toolkit';
import {
	getArticleRecommendationsState,
} from '../getArticleRecommendationsState/getArticleRecommendationsState';
import { ArticleRecommendationsSchema } from '../../types/articleRecommendationsSchema';

export const getArticleRecommendationsLoading = createSelector(
	getArticleRecommendationsState,
	(state?: ArticleRecommendationsSchema) => state?.loading ?? false,
);
