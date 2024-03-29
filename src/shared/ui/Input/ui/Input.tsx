import { ChangeEvent, InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum InputTheme {
	PRIMARY = 'primary',
	INVERT = 'invert',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Текст плавающего placeholder (при его наличии)
	 */
	floatPlaceholder?: string;
	/**
	 * Флаг, отвечающий за инвертирование текста
	 */
	textInvert?: boolean;
	/**
	 * Тема компонента
	 */
	theme?: InputTheme;
	/**
	 * Флаг, отвечающий за возможность изменять значение инпута
	 */
	readonly?: boolean;
	/**
	 * Функция, вызывающаяся при изменении содержимого инпута
	 * @param value - содержимое инпута
	 */
	onChange?: (value: string) => void;
	/**
	 * ID компонента при тестировании
	 */
	'data-testid'?: string;
}

export const Input = ({
	className,
	floatPlaceholder,
	readonly = false,
	textInvert = false,
	value = '',
	theme = InputTheme.PRIMARY,
	autoFocus = false,
	type = 'text',
	onChange,
	'data-testid': dataTestId,
	'aria-label': ariaLabel,
	...otherProps
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autoFocus) {
			inputRef.current?.focus();
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

	const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value);
	};

	return (
		<div
			className={classNames(
				cls.inputWrapper,
				{
					[cls.withPlaceholder]: floatPlaceholder,
					[cls.textInvert]: textInvert,
				},
				[className, cls[theme]],
			)}
		>
			<span className={classNames(cls.label, { [cls.placeholder]: isPlaceholder })}>{floatPlaceholder}</span>
			<input
				data-testid={dataTestId}
				ref={inputRef}
				className={classNames(cls.Input, { [cls.readOnly]: readonly })}
				type={type}
				onBlur={onBlur}
				onFocus={onFocus}
				value={value ?? ''}
				readOnly={readonly}
				onChange={onHandleChange}
				aria-label={ariaLabel}
				{...otherProps}
			/>
		</div>
	);
};
