import { createSelector } from '@reduxjs/toolkit';
import {
	getArticleRecommendationsState,
} from '../getArticleRecommendationsState/getArticleRecommendationsState';
import { ArticleRecommendationsSchema } from '../../types/articleRecommendationsSchema';

export const getArticleRecommendationsError = createSelector(getArticleRecommendationsState, (state?: ArticleRecommendationsSchema) => state?.error);
