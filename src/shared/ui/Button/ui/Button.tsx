import { ButtonHTMLAttributes, ForwardedRef, forwardRef, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ButtonTheme {
	CLEAR = 'clear',
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	OUTLINE_PRIMARY = 'outline_primary',
	OUTLINE_SECONDARY = 'outline_secondary',
	OUTLINE_RED = 'outline_red',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Тема кнопки
	 */
	theme?: ButtonTheme;
	/**
	 * Флаг, отвечающий за инвертирования темы кнопки
	 */
	inverted?: boolean;
	/**
	 * Дочерний элемент кнопки
	 */
	children: ReactNode;
	/**
	 * Флаг, отвечающий за наличие hover эффекта у кнопки
	 */
	hover?: boolean;
	/**
	 * Флаг, отвечающий за возможность кнопки занять 100% ширины контейнера
	 */
	w100?: boolean;
	/**
	 * ID компонента для тестирования
	 */
	'data-testid'?: string;
}

export const Button = forwardRef(
	(
		{
			className,
			inverted,
			theme = ButtonTheme.PRIMARY,
			children,
			hover = true,
			w100 = false,
			'data-testid': dataTestId,
			...buttonProps
		}: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>,
	) => (
		<button
			data-testid={dataTestId}
			ref={ref}
			type="button"
			className={classNames(cls.Button, { [cls.inverted]: inverted, [cls.hover]: hover, [cls.w100]: w100 }, [className, cls[theme]])}
			{...buttonProps}
		>
			{children}
		</button>
	),
);
