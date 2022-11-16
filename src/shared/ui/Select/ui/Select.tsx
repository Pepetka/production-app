import { classNames } from 'shared/lib/classNames/classNames';
import {
	ChangeEvent, memo, SelectHTMLAttributes, useMemo,
} from 'react';
import cls from './Select.module.scss';

export enum SelectTheme {
	PRIMARY = 'primary',
	INVERT = 'invert'
}

interface SelectProps <T extends string>{
	className?: string
	placeholder?: string
	textInvert?: boolean
	theme?: SelectTheme
	disabled?: boolean
	onChange?: (value: T) => void
	options: Record<string, string>
	selected?: T
	label?: string
}

export const Select = <T extends string>(
	{
		className,
		placeholder,
		disabled = false,
		textInvert = false,
		theme = SelectTheme.PRIMARY,
		onChange,
		options,
		selected,
		label,

	}: SelectProps<T>,
) => {
	const optionsList = Object.entries(options).map(([key, value]) => <option className={cls.option} key={key} value={key}>{value}</option>);

	const onHandleChange = (event: ChangeEvent<HTMLSelectElement>) => {
		onChange?.(event.target.value as T);
	};

	return (
		<div
			className={
				classNames(
					cls.selectWrapper,
					{
						[cls.textInvert]: textInvert,
						[cls.withLabel]: placeholder,
					},
					[className, cls[theme]],
				)
			}
		>
			{placeholder && (
				<span className={classNames(cls.label)}>
					{placeholder}
				</span>
			)}
			<select
				disabled={disabled}
				value={selected ?? ''}
				className={classNames(cls.Select)}
				onChange={onHandleChange}
			>
				{label && <option value="" disabled>{label}</option>}
				{optionsList}
			</select>
		</div>
	);
};
