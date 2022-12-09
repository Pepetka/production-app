export interface ArticleRating {
	articleId: string
	rating: number
}

export interface ArticleRatingDB extends ArticleRating {
	userId: string
	review?: string
}
