import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string
	width: number | string
	height?: number | string
	circle?: boolean
	border?: number | string
}

export const Skeleton = memo(({
	className, circle, width, height = width, border,
}: SkeletonProps) => {
	const style: CSSProperties = useMemo(() => (
		{
			height: typeof height === 'number' ? `${height}px` : height,
			width: typeof width === 'number' ? `${width}px` : width,
			borderRadius: typeof border === 'number' ? `${border}px` : border,
		}
	), [border, height, width]);

	return (
		<div
			className={classNames(cls.Skeleton, { [cls.circle]: circle }, [className])}
			style={style}
		/>
	);
});
