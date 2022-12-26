import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { CommentSkeleton } from '../CommentSkeleton/CommentSkeleton';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';

interface CommentListProps {
	className?: string;
	comments?: Array<Comment>;
	loading?: boolean;
}

export const CommentList = memo(
	({ className, comments, loading }: CommentListProps) => {
		const { t } = useTranslation();

		if (loading) {
			return (
				<VStack
					gap="16"
					className={classNames(cls.CommentList, {}, [className])}
				>
					<CommentSkeleton />
					<CommentSkeleton />
					<CommentSkeleton />
				</VStack>
			);
		}

		return (
			<VStack gap="16" className={classNames(cls.CommentList, {}, [className])}>
				{comments?.length ? (
					comments?.map((comment) => (
						<CommentCard key={comment.id} comment={comment} />
					))
				) : (
					<Text text={t('No comments')} align="center" />
				)}
			</VStack>
		);
	},
);
