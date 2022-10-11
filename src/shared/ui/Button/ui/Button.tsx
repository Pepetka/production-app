import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	PRIMARY = 'primary',
	OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	theme?: ButtonTheme
	inverted?: boolean
}

export const Button: FC<ButtonProps> = ({
	className,
	inverted,
	theme = ButtonTheme.PRIMARY,
	children,
	...buttonProps
}) => (
	<button
		type="button"
		className={classNames(cls.Button, { [cls.inverted]: inverted }, [className, cls[theme]])}
		{...buttonProps}
	>
		{children}
	</button>
);
