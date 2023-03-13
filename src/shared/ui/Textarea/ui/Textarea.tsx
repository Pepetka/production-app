import { ChangeEvent, TextareaHTMLAttributes, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Textarea.module.scss';

export enum TextareaTheme {
	PRIMARY = 'primary',
	INVERT = 'invert',
}

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange'>;

interface TextareaProps extends HTMLTextareaProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Текст плавающего placeholder
	 */
	floatPlaceholder?: string;
	/**
	 * Флаг, отвечающий за инвертирование текста
	 */
	textInvert?: boolean;
	/**
	 * Тема компонента
	 */
	theme?: TextareaTheme;
	/**
	 * Флаг, отвечающий за возможность изменять содержимое текстового поля
	 */
	readonly?: boolean;
	/**
	 * Функция, вызывающаяся при изменении содержимого текстового поля
	 */
	onChange?: (value: string) => void;
	/**
	 * ID компонента при тестировании
	 */
	'data-testid'?: string;
}

export const Textarea = ({
	className,
	floatPlaceholder,
	readonly = false,
	textInvert = false,
	value = '',
	theme = TextareaTheme.PRIMARY,
	autoFocus = false,
	onChange,
	'data-testid': dataTestId,
	...otherProps
}: TextareaProps) => {
	const TextareaRef = useRef<HTMLTextAreaElement>(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autoFocus) {
			TextareaRef.current?.focus();
			setIsFocused(true);
			setIsPlaceholder(false);
		} else if (!value) {
			setIsPlaceholder(true);
		} else {
			setIsPlaceholder(false);
		}
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (value || isFocused) {
			setIsPlaceholder(false);
		} else if (!isFocused) {
			setIsPlaceholder(true);
		}
	}, [isFocused, value]);

	const onBlur = () => {
		if (!value) setIsPlaceholder(true);
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsPlaceholder(false);
		setIsFocused(true);
	};

	const onHandleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		onChange?.(event.target.value);
	};

	return (
		<div
			className={classNames(
				cls.textareaWrapper,
				{
					[cls.withPlaceholder]: floatPlaceholder,
					[cls.textInvert]: textInvert,
				},
				[className, cls[theme]],
			)}
		>
			<span className={classNames(cls.label, { [cls.placeholder]: isPlaceholder })}>{floatPlaceholder}</span>
			<textarea
				data-testid={dataTestId}
				ref={TextareaRef}
				className={classNames(cls.Textarea, { [cls.readOnly]: readonly })}
				onBlur={onBlur}
				onFocus={onFocus}
				value={value ?? ''}
				readOnly={readonly}
				onChange={onHandleChange}
				{...otherProps}
			/>
		</div>
	);
};
