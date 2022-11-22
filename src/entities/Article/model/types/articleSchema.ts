import { Article } from './article';

export interface ArticleSchema {
	loading: boolean
	error?: string
	article?: Article
}
