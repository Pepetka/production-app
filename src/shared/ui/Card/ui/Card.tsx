import { HTMLAttributes, memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Дочерний элемент карточки
	 */
	children: ReactNode;
	/**
	 * Флаг, отвечающий за возможность компонента занять 100% ширины контейнера
	 */
	w100?: boolean;
}

export const Card = memo(({ className, children, w100, ...otherProps }: CardProps) => (
	<div {...otherProps} className={classNames(cls.Card, { [cls.w100]: w100 }, [className])}>
		{children}
	</div>
));
