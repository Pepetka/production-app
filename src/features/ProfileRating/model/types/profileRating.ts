export interface ProfileRatingType {
	profileId: string
	rating: number
}

export interface ProfileRatingDB extends ProfileRatingType {
	userId: string
}
