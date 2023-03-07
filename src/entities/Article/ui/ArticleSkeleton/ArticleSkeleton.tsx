import { memo } from 'react';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import cls from './ArticleSkeleton.module.scss';

export const ArticleSkeleton = memo(() => (
	<VStack gap="32" w100 className={cls.ArticleSkeleton}>
		<Skeleton width={200} circle />
		<Skeleton width={250} height={30} />
		<Skeleton width={270} height={30} />
		<Skeleton width="100%" height={230} />
		<Skeleton width="100%" height={230} />
	</VStack>
));
