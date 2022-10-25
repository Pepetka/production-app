import { classNames } from 'shared/lib/classNames/classNames';
import {
	ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import cls from './Select.module.scss';

export enum SelectTheme {
	PRIMARY = 'primary',
	INVERT = 'invert'
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
	className?: string
	placeholder?: string
	textInvert?: boolean
	theme?: SelectTheme
	disabled?: boolean
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
	options: Array<string>
	selected?: string
}

export const Select = memo((
	{
		className,
		placeholder,
		disabled = false,
		textInvert = false,
		theme = SelectTheme.PRIMARY,
		onChange,
		options,
		selected,
		...otherProps

	}: SelectProps,
) => {
	const optionsList = useMemo(
		() => options.map((el) => <option key={el} value={el}>{el}</option>),
		[options],
	);

	return (
		<div
			className={
				classNames(
					cls.selectWrapper,
					{ [cls.textInvert]: textInvert },
					[className, cls[theme]],
				)
			}
		>
			<span className={classNames(cls.label)}>
				{placeholder}
			</span>
			<select
				disabled={disabled}
				value={selected}
				className={classNames(cls.Select)}
				onChange={onChange}
				{...otherProps}
			>
				{optionsList}
			</select>
		</div>
	);
});
