import { CSSProperties, memo, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Ширина скелетона
	 */
	width: number | string;
	/**
	 * Высота скелетона
	 */
	height?: number | string;
	/**
	 * Флаг, отвечающий за форму скелетона
	 */
	circle?: boolean;
	/**
	 * Радиус скругления углов, (в пикселях или в виде строки)
	 */
	borderRadius?: number | string;
}

export const Skeleton = memo(({ className, circle, width, height = width, borderRadius }: SkeletonProps) => {
	const style: CSSProperties = useMemo(
		() => ({
			height: typeof height === 'number' ? `${height}px` : height,
			width: typeof width === 'number' ? `${width}px` : width,
			borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
		}),
		[borderRadius, height, width],
	);

	return <div className={classNames(cls.Skeleton, { [cls.circle]: circle }, [className])} style={style} />;
});
