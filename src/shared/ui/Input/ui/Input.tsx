import {
	HTMLInputTypeAttribute,
	InputHTMLAttributes,
	useEffect,
	useRef,
	useState,
	FocusEvent,
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
}

export const Input = ({
	className, floatPlaceholder, textInvert = false, value = '', theme = InputTheme.PRIMARY, autoFocus = false, type = 'text', ...otherProps
}: InputProps) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [isPlaceholder, setIsPlaceholder] = useState(true);

	useEffect(() => {
		if (autoFocus) {
			inputRef.current.focus();
			setIsPlaceholder(false);
		} else if (!value) {
			setIsPlaceholder(true);
		} else {
			setIsPlaceholder(false);
		}
		// eslint-disable-next-line
	}, []);

	const onBlur = () => {
		if (!value) setIsPlaceholder(true);
	};

	const onFocus = () => {
		setIsPlaceholder(false);
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
				className={cls.Input}
				type={type}
				onBlur={onBlur}
				onFocus={onFocus}
				value={value}
				{...otherProps}
			/>
		</div>
	);
};
