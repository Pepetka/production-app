import { Skeleton } from 'shared/ui/Skeleton';
import { memo } from 'react';
import cls from './ArticleSkeleton.module.scss';

export const ArticleSkeleton = memo(() => (
	<div className={cls.ArticleSkeleton}>
		<Skeleton width={200} circle />
		<Skeleton width={670} height={30} />
		<Skeleton width={400} height={30} />
		<Skeleton width="100%" height={230} />
		<Skeleton width="100%" height={230} />
	</div>
));
