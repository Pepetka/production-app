import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
	PRIMARY = 'primary',
	ERROR = 'error',
}

type TextAlign = 'center' | 'right' | 'left';
export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l',
}

type TagType = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
	size?: TextSize;
	invert?: boolean;
	TitleTag?: TagType;
	'data-testid'?: string;
	noWrap?: boolean;
	w100?: boolean;
}

export const Text = memo(
	({
		className,
		text,
		title,
		align = 'left',
		theme = TextTheme.PRIMARY,
		noWrap,
		size = TextSize.M,
		w100,
		invert,
		TitleTag = 'p',
		'data-testid': dataTestId,
	}: TextProps) => (
		<div
			data-testid={dataTestId}
			className={classNames('', { [cls.invert]: invert, [cls.w100]: w100 }, [
				className,
				cls[theme],
				cls[size],
				cls[align],
			])}
		>
			{title && (
				<TitleTag className={classNames(cls.title, { [cls.noWrap]: noWrap })}>
					{title}
				</TitleTag>
			)}
			{text && (
				<p className={classNames(cls.text, { [cls.noWrap]: noWrap })}>{text}</p>
			)}
		</div>
	),
);
