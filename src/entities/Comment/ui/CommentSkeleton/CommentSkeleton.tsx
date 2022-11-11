import { memo } from 'react';
import { Skeleton } from 'shared/ui/Skeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentSkeleton.module.scss';

interface CommentSkeletonProps {
	className?: string
}

export const CommentSkeleton = memo(
	({ className }: CommentSkeletonProps) => (
		<div className={classNames(cls.CommentSkeleton, {}, [className])}>
			<div className={cls.user}>
				<Skeleton width={30} circle />
				<Skeleton width={200} height={32} />
			</div>
			<div>
				<Skeleton width="100%" height={24} />
			</div>
		</div>
	),
);
