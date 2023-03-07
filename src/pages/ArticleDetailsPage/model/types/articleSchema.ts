import { Article } from '@/entities/Article';

export interface ArticleSchema {
	loading: boolean;
	error?: string;
	article?: Article;
}
