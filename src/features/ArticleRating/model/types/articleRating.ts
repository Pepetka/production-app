export interface ArticleRatingType {
	articleId: string;
	rating: number;
}

export interface ArticleRatingDB extends ArticleRatingType {
	userId: string;
	review?: string;
}
