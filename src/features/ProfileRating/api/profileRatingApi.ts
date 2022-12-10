import { rtkApi } from '@/shared/api/rtkApi';
import { ProfileRatingType, ProfileRatingDB } from '../model/types/profileRating';

const profileRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchProfileRating: build.query<Array<ProfileRatingType>, {profileId: string, userId: string}>({
			query: ({ profileId, userId }) => ({
				url: '/rating-profile',
				params: {
					profileId,
					userId,
				},
			}),
		}),
		addProfileRating: build.mutation<void, ProfileRatingDB>({
			query: (rating) => ({
				method: 'POST',
				url: '/rating-profile',
				body: rating,
			}),
		}),
	}),
});

export const { useFetchProfileRatingQuery, useAddProfileRatingMutation } = profileRatingApi;
