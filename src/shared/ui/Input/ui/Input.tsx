import {
	ChangeEvent,
	HTMLInputTypeAttribute, InputHTMLAttributes, memo, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

export enum InputTheme {
	PRIMARY = 'primary',
	INVERT = 'invert'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	className?: string;
	type?: HTMLInputTypeAttribute
	autoFocus?: boolean
	floatPlaceholder?: string
	textInvert?: boolean
	theme?: InputTheme
	value?: string
	readonly?: boolean
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Input = memo((
	{
		className,
		floatPlaceholder,
		readonly = false,
		textInvert = false,
		value = '',
		theme = InputTheme.PRIMARY,
		autoFocus = false,
		type = 'text',
		onChange,
		...otherProps
	}: InputProps,
) => {
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
		if (value) {
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

	return (
		<div
			className={
				classNames(
					cls.inputWrapper,
					{ [cls.withPlaceholder]: floatPlaceholder, [cls.textInvert]: textInvert },
					[className, cls[theme]],
				)
			}
		>
			<span className={classNames(cls.label, { [cls.placeholder]: isPlaceholder })}>
				{floatPlaceholder}
			</span>
			<input
				ref={inputRef}
				className={classNames(cls.Input, { [cls.readOnly]: readonly })}
				type={type}
				onBlur={onBlur}
				onFocus={onFocus}
				value={value}
				readOnly={readonly}
				onChange={onChange}
				{...otherProps}
			/>
		</div>
	);
});
