import { EntityState } from '@reduxjs/toolkit';
import type { Article } from '@/entities/Article';
import { ArticlesView } from '@/entities/Article';

export interface UserArticlesPageSchema extends EntityState<Article> {
	loading: boolean;
	error?: string;

	limit?: number;
	page: number;
	hasMore: boolean;

	view: ArticlesView;

	_init: boolean;
}
