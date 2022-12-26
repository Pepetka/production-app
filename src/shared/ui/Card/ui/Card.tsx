import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	w100?: boolean;
}

export const Card = memo(
	({ className, children, w100, ...otherProps }: CardProps) => (
		<div
			{...otherProps}
			className={classNames(cls.Card, { [cls.w100]: w100 }, [className])}
		>
			{children}
		</div>
	),
);
