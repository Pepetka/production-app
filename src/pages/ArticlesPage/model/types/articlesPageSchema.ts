import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticlesView, ArticleType } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/article';

export interface ArticlesPageSchema extends EntityState<Article>{
	loading: boolean
	error?: string

	limit?: number
	page: number
	hasMore: boolean

	view: ArticlesView
	order: SortOrder
	sort: ArticleSortField
	search: string
	type: ArticleType

	_init: boolean
}
