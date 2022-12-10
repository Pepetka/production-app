import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './CommentSkeleton.module.scss';

interface CommentSkeletonProps {
	className?: string
}

export const CommentSkeleton = memo(
	({ className }: CommentSkeletonProps) => (
		<VStack gap="8" align="start" className={classNames(cls.CommentSkeleton, {}, [className])}>
			<HStack gap="8" justify="center">
				<Skeleton width={30} circle />
				<Skeleton width={200} height={32} />
			</HStack>
			<Skeleton width="100%" height={24} />
		</VStack>
	),
);
