import { EntityState } from '@reduxjs/toolkit';
import {
	ArticleSortField, ArticlesView, ArticleType,
} from '@/entities/Article';
import type { Article } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

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
