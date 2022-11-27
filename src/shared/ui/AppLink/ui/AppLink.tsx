import {
	ForwardedRef, forwardRef, memo, ReactNode,
} from 'react';
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
	hover?: boolean
}
export const AppLink = forwardRef(({
	className, to, theme = AppLinkTheme.PRIMARY, children, hover = true, ...otherProps
}: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => (
	<NavLink
		ref={ref}
		to={to}
		className={classNames(cls.AppLink, { [cls.hover]: hover }, [className, cls[theme]])}
		{...otherProps}
	>
		{children}
	</NavLink>
));
