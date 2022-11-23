import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

type TextAlign = 'center' | 'right' | 'left'
export enum TextSize {
	M = 'size_m',
	L = 'size_l',
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
	size?: TextSize
	invert?: boolean
}

export const Text = memo(({
	className, text, title, align = 'left', theme = TextTheme.PRIMARY, size = TextSize.M, invert,
}: TextProps) => (
	<div className={classNames('', { [cls.invert]: invert }, [className, cls[theme], cls[size], cls[align]])}>
		{title && <p className={cls.title}>{title}</p>}
		{text && <p className={cls.text}>{text}</p>}
	</div>
));
