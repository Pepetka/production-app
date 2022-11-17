import { memo, ReactNode } from 'react';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

interface AppLinkProps extends NavLinkProps {
	className?: string
	to: string
	theme?: AppLinkTheme
	children: ReactNode
}
export const AppLink = memo(({
	className, to, theme = AppLinkTheme.PRIMARY, children, ...otherProps
}: AppLinkProps) => (
	<NavLink
		to={to}
		className={classNames(cls.AppLink, {}, [className, cls[theme]])}
		{...otherProps}
	>
		{children}
	</NavLink>
));
