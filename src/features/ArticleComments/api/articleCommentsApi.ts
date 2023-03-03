import { rtkApi } from '@/shared/api/rtkApi';
import { Comment } from '@/entities/Comment';

const commentsApi = rtkApi.injectEndpoints({
	endpoints: (build) => ({
		fetchComments: build.query<Array<Comment>, string>({
			query: (articleId) => ({
				url: '/comments',
				params: {
					articleId,
					_expand: 'user',
				},
			}),
			providesTags: (result) => ['comments'],
		}),
		addComment: build.mutation<void, { articleId: string; userId: string; text: string }>({
			query: (comment) => ({
				method: 'POST',
				url: '/comments',
				body: comment,
			}),
			invalidatesTags: ['comments'],
		}),
	}),
});

export const { useFetchCommentsQuery, useAddCommentMutation } = commentsApi;
