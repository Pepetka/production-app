import { rtkApi } from 'shared/api/rtkApi';
import { Article } from 'entities/Article';

const recommendationsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchRecommendations: build.query<Array<Article>, number>({
			query: (limit) => ({
				url: '/articles',
				params: {
					_limit: limit,
				},
			}),
		}),
	}),
});

export const { useFetchRecommendationsQuery } = recommendationsApi;
