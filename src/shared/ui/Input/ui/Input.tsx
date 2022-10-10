import { classNames } from 'shared/lib/classNames/classNames';
import {
	ChangeEvent, HTMLInputTypeAttribute, InputHTMLAttributes, useEffect, useRef, useState,
} from 'react';
import cls from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
	className?: string;
	onChange?: (event: ChangeEvent<HTMLInputElement>) => void
	value?: string
	type?: HTMLInputTypeAttribute
	autoFocus?: boolean
	placeholder?: string
}

export const Input = ({
	className, placeholder, autoFocus = false, value = '', type = 'text', onChange = () => {}, ...otherProps
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isFocused, setIsFocused] = useState(false);

	useEffect(() => {
		if (autoFocus) {
			inputRef.current.focus();
			setIsFocused(true);
		}
	}, [autoFocus]);

	return (
		<div className={classNames(cls.inputWrapper, { [cls.withPlaceholder]: placeholder }, [className])}>
			<span className={classNames(cls.label, { [cls.placeholder]: !isFocused })}>
				{placeholder}
			</span>
			<input
				ref={inputRef}
				className={cls.Input}
				type={type}
				value={value}
				onChange={onChange}
				onBlur={() => setIsFocused(false)}
				onFocus={() => setIsFocused(true)}
				{...otherProps}
			/>
		</div>
	);
};
