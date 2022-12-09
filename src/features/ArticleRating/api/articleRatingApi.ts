import { rtkApi } from '@/shared/api/rtkApi';
import { ArticleRating, ArticleRatingDB } from '../model/types/articleRating';

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchArticleRating: build.query<Array<ArticleRating>, {articleId: string, userId: string}>({
			query: ({ articleId, userId }) => ({
				url: '/rating-article',
				params: {
					articleId,
					userId,
				},
			}),
		}),
		addArticleRating: build.mutation<void, ArticleRatingDB>({
			query: (rating) => ({
				method: 'POST',
				url: '/rating-article',
				body: rating,
			}),
		}),
	}),
});

export const { useFetchArticleRatingQuery, useAddArticleRatingMutation } = articleRatingApi;
