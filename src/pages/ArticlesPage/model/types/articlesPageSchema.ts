import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView } from 'entities/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
	loading: boolean
	error?: string
	view: ArticlesView

	limit?: number
	page: number
	hasMore: boolean
}
