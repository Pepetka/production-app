import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Skeleton } from 'shared/ui/Skeleton';
import { Card } from 'shared/ui/Card';
import { ArticlesView } from '../../model/types/article';
import cls from './ArticlesListSkeleton.module.scss';

interface ArticlesListSkeletonProps {
	className?: string
	view: ArticlesView
}

export const ArticlesListSkeleton = memo(
	({ className, view }: ArticlesListSkeletonProps) => {
		if (view === ArticlesView.BIG) {
			return (
				<Card className={classNames(cls.Big, {}, [className])}>
					<div className={cls.wrapper}>
						<div className={cls.data}>
							<div className={cls.user}>
								<Skeleton width={30} circle />
								<Skeleton width={60} height={16} />
							</div>
							<Skeleton width={100} height={16} />
						</div>
						<Skeleton width="40%" height={24} />
						<div className={cls.types}>
							<Skeleton width={70} height={16} />
							<Skeleton width={70} height={16} />
							<Skeleton width={70} height={16} />
						</div>
					</div>
					<Skeleton width="100%" height={200} />
					<div className={cls.wrapper}>
						<div className={cls.content}>
							<Skeleton width="100%" height={80} />
							<Skeleton width="100%" height={80} />
						</div>
						<div className={cls.control}>
							<Skeleton width={150} height={50} />
							<Skeleton width={100} height={16} />
						</div>
					</div>
				</Card>
			);
		}

		return (
			<Card className={classNames(cls.Small, {}, [className])}>
				<Skeleton width={200} height={200} />
				<div className={cls.data}>
					<div className={cls.info}>
						<Skeleton width="50%" height={16} />
						<Skeleton width="30%" height={16} />
					</div>
					<Skeleton width="60%" height={16} />
				</div>
			</Card>
		);
	},
);
