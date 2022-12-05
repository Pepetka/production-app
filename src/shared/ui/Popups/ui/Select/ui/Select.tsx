import { memo, useMemo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { HStack } from '../../../../Stack';
import { Button, ButtonTheme } from '../../../../Button';
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
	popupPosition?: 'top' | 'bottom'
}

const typedMemo: <T>(c: T) => T = memo;

export const Select = typedMemo(<T extends string>(
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
		popupPosition = 'bottom',
	}: SelectProps<T>,
) => {
	const optionsList = useMemo(() => {
		if (!label) return Object.entries(options);

		return [['label', label], ...Object.entries(options)];
	}, [label, options]);

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
			<Listbox value={selected} defaultValue={label} onChange={onChange} disabled={disabled}>
				{({ open }) => (
					<>
						<Listbox.Button as="div" className={cls.trigger}>
							<Button hover={false} theme={ButtonTheme.PRIMARY} inverted={theme === SelectTheme.INVERT}>
								<HStack w100 justify="between">
									{selected ? options[selected] : label}
									<div className={classNames(cls.arrow, { [cls.open]: open })}>{'<'}</div>
								</HStack>
							</Button>
						</Listbox.Button>
						<Listbox.Options className={classNames(cls.options, {}, [cls[popupPosition]])}>
							{optionsList.map(([key, value]) => (
								<Listbox.Option
									key={key}
									value={key}
									disabled={key === 'label'}
								>
									{({ active, selected, disabled }) => (
										<div className={classNames(cls.option, { [cls.selected]: selected, [cls.disabled]: disabled })}>
											{value}
											{active && ' <'}
										</div>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</>
				)}
			</Listbox>
		</div>
	);
});
