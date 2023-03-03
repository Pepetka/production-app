import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { Card } from '@/shared/ui/Card';
import { HStack, VStack } from '@/shared/ui/Stack';
import { ArticlesView } from '../../model/consts/consts';
import cls from './ArticlesListSkeleton.module.scss';

interface ArticlesListSkeletonProps {
	className?: string;
	view: ArticlesView;
}

export const ArticlesListSkeleton = memo(({ className, view }: ArticlesListSkeletonProps) => {
	if (view === ArticlesView.BIG) {
		return (
			<Card className={classNames(cls.Big, {}, [className])}>
				<VStack justify="between" align="start" gap="4" className={cls.wrapper}>
					<HStack justify="between" className={cls.widthWrapper}>
						<HStack gap="8">
							<Skeleton width={30} circle />
							<Skeleton width={60} height={16} />
						</HStack>
						<Skeleton width={100} height={16} />
					</HStack>
					<Skeleton width="40%" height={24} />
					<HStack gap="8" className={cls.types}>
						<Skeleton width={70} height={16} />
						<Skeleton width={70} height={16} />
						<Skeleton width={70} height={16} />
					</HStack>
				</VStack>
				<Skeleton width="100%" height={200} />
				<div className={cls.wrapper}>
					<VStack gap="16">
						<Skeleton width="100%" height={80} />
						<Skeleton width="100%" height={80} />
					</VStack>
					<HStack justify="between" className={cls.btnBlock}>
						<Skeleton width={150} height={50} />
						<Skeleton width={100} height={16} />
					</HStack>
				</div>
			</Card>
		);
	}

	return (
		<Card className={classNames(cls.Small, {}, [className])}>
			<VStack gap="4" className={cls.widthWrapper}>
				<Skeleton width={200} height={200} />
				<VStack gap="4" className={cls.data}>
					<HStack justify="between" className={cls.widthWrapper}>
						<Skeleton width="50%" height={16} />
						<Skeleton width="30%" height={16} />
					</HStack>
					<Skeleton width="60%" height={16} className={cls.title} />
				</VStack>
			</VStack>
		</Card>
	);
});
