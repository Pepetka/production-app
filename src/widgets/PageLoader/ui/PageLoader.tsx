import { classNames } from '@/shared/lib/classNames/classNames';
import { Spinner } from '@/shared/ui/Spinner';
import { HStack } from '@/shared/ui/Stack';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
	className?: string;
}
export const PageLoader = ({ className }: PageLoaderProps) => (
	<HStack
		justify="center"
		w100
		className={classNames(cls.PageLoader, {}, [className])}
	>
		<Spinner />
	</HStack>
);
