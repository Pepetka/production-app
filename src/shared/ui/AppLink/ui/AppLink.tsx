import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

interface AppLinkProps {
	className?: string
	to: string
	theme?: AppLinkTheme
}
export const AppLink: FC<AppLinkProps> = ({
	className,
	to,
	theme = AppLinkTheme.PRIMARY,
	children,
	...otherProps
}) => (
	<NavLink
		to={to}
		className={classNames(cls.AppLink, {}, [className, cls[theme]])}
		{...otherProps}
	>
		{children}
	</NavLink>
);
