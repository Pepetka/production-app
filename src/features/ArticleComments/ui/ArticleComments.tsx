import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Text } from '@/shared/ui/Text';
import { CommentForm, CommentList } from '@/entities/Comment';
import { VStack } from '@/shared/ui/Stack';
import { getAuthData } from '@/entities/User';
import { useAddCommentMutation, useFetchCommentsQuery } from '../api/articleCommentsApi';

interface ArticleCommentsProps {
	articleId: string;
}

export const ArticleComments = memo(({ articleId }: ArticleCommentsProps) => {
	const { t } = useTranslation('articles');
	const authData = useSelector(getAuthData);
	const { error, isLoading, data: comments } = useFetchCommentsQuery(articleId);
	const [addComment] = useAddCommentMutation();

	const onSendComment = useCallback(
		(text: string) => {
			const comment = {
				text,
				userId: authData!.id!,
				articleId,
			};

			addComment(comment);
		},
		[addComment, articleId, authData],
	);

	if (error) {
		return <Text title={t('Something wrong')} align="center" />;
	}

	return (
		<VStack w100 gap="16" data-testid="ArticleComments">
			<Text title={t('Comments')} align="center" />
			<CommentForm onSendComment={onSendComment} />
			<CommentList loading={isLoading} comments={comments} />
		</VStack>
	);
});
