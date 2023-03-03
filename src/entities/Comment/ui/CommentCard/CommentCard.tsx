import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar';
import { AppLink } from '@/shared/ui/AppLink';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Comment } from '../../model/types/comment';
import { getProfilePagePath } from '@/shared/const/router';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string;
	comment: Comment;
}

export const CommentCard = memo(({ className, comment }: CommentCardProps) => (
	<VStack data-testid="CommentCard" gap="8" align="start" className={classNames(cls.CommentCard, {}, [className])}>
		<AppLink to={getProfilePagePath(comment.user.id)}>
			<HStack gap="8">
				<Avatar size={AvatarSize.SIZE_XS} avatar={comment.user.avatar} border={false} />
				<Text title={comment.user.username} />
			</HStack>
		</AppLink>
		<div>
			<Text text={comment.text} />
		</div>
	</VStack>
));
