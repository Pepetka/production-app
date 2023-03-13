import { ForwardedRef, forwardRef, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red',
}

interface AppLinkProps extends NavLinkProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Эндпоинт ссылки
	 */
	to: string;
	/**
	 * Тема компонента
	 */
	theme?: AppLinkTheme;
	/**
	 * Дочерний элемент компонента
	 */
	children: ReactNode;
	/**
	 * Флаг, отвечающий за наличие эффекта наведения
	 */
	hover?: boolean;
	/**
	 * Флаг, отвечающий за возможность компонента занять 100% ширины контейнера
	 */
	w100?: boolean;
}
export const AppLink = forwardRef(
	(
		{ className, to, theme = AppLinkTheme.PRIMARY, children, w100, hover = true, ...otherProps }: AppLinkProps,
		ref: ForwardedRef<HTMLAnchorElement>,
	) => (
		<NavLink ref={ref} to={to} className={classNames(cls.AppLink, { [cls.hover]: hover, [cls.w100]: w100 }, [className, cls[theme]])} {...otherProps}>
			{children}
		</NavLink>
	),
);
