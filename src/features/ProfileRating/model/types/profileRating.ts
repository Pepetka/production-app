export interface ProfileRating {
	profileId: string
	rating: number
}

export interface ProfileRatingDB extends ProfileRating {
	userId: string
}
