import { Article } from 'entities/Article';
import { EntityState } from '@reduxjs/toolkit';

export interface ArticleRecommendationsSchema extends EntityState<Article> {
	error?: string
	loading: boolean
}
