import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './NotificationSkeleton.module.scss';

interface NotificationSkeletonProps {
	className?: string
}

export const NotificationSkeleton = memo(
	({ className }: NotificationSkeletonProps) => (
		<VStack gap="8" align="start" className={classNames(cls.NotificationSkeleton, {}, [className])}>
			<Skeleton height={24} width="30%" />
			<Skeleton height={16} width="70%" />
		</VStack>
	),
);
