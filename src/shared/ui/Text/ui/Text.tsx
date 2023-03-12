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
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Текст заголовка
	 */
	title?: string;
	/**
	 * Текст
	 */
	text?: string;
	/**
	 * Тема компонента
	 */
	theme?: TextTheme;
	/**
	 * Пропс, отвечающий за значение свойства text-align
	 */
	align?: TextAlign;
	/**
	 * Размер текста
	 */
	size?: TextSize;
	/**
	 * Флаг, отвечающий за инвертирование темы
	 */
	invert?: boolean;
	/**
	 * Тэг заголовка
	 */
	TitleTag?: TagType;
	/**
	 * Флаг, отвечающий за принудительное помещение текста в одной строке
	 */
	noWrap?: boolean;
	/**
	 * Флаг, отвечающий за возможность компонента занять 100% ширины контейнера
	 */
	w100?: boolean;
	/**
	 * ID компонента при тестировании
	 */
	'data-testid'?: string;
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
			className={classNames('', { [cls.invert]: invert, [cls.w100]: w100 }, [className, cls[theme], cls[size], cls[align]])}
		>
			{title && <TitleTag className={classNames(cls.title, { [cls.noWrap]: noWrap })}>{title}</TitleTag>}
			{text && <p className={classNames(cls.text, { [cls.noWrap]: noWrap })}>{text}</p>}
		</div>
	),
);
