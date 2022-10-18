import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

type TextAlign = 'center' | 'right' | 'left'

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: TextTheme
	align?: TextAlign
}

export const Text = memo(({
	className, text, title, align = 'left', theme = TextTheme.PRIMARY,
}: TextProps) => (
	<div className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}>
		{title && <p className={cls.title}>{title}</p>}
		{text && <p className={cls.text}>{text}</p>}
	</div>
));
