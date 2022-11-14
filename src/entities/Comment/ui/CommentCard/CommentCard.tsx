import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { AppLink } from 'shared/ui/AppLink';
import { routePaths } from 'shared/config/routeConfig/routeConfig';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
	className?: string
	comment: Comment
}

export const CommentCard = memo(
	({ className, comment }: CommentCardProps) => (
		<div className={classNames(cls.CommentCard, {}, [className])}>
			<AppLink to={routePaths.Profile + comment.user.id} className={cls.user}>
				<Avatar size={AvatarSize.SIZE_XS} avatar={comment.user.avatar} />
				<Text title={comment.user.username} />
			</AppLink>
			<div>
				<Text text={comment.text} />
			</div>
		</div>
	),
);