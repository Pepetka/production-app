import { memo, useMemo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../../Stack';
import { Button, ButtonTheme } from '../../../../Button';
import cls from './Select.module.scss';

export enum SelectTheme {
	PRIMARY = 'primary',
	INVERT = 'invert',
}

interface SelectProps<T extends string> {
	/**
	 * Дополнительные классы
	 */
	className?: string;
	/**
	 * Placeholder селекта
	 */
	placeholder?: string;
	/**
	 * Флаг, отвечающий за инвертирование цвета текста
	 */
	textInvert?: boolean;
	/**
	 * Тема компонента
	 */
	theme?: SelectTheme;
	/**
	 * Флаг, отвечающий за возможность изменения выбранной опции
	 */
	disabled?: boolean;
	/**
	 * Функция, вызывающаяся при изменении выбранной опции
	 * @param value - новая выбранная опция
	 */
	onChange?: (value: T) => void;
	/**
	 * Опции селекта
	 */
	options: Record<string, string>;
	/**
	 * Выбранная опция
	 */
	selected?: T;
	/**
	 * Лейбл селекта
	 */
	label?: string;
	/**
	 * Направление открытия селекта
	 */
	popupPosition?: 'top' | 'bottom';
}

const typedMemo: <T>(c: T) => T = memo;

export const Select = typedMemo(
	<T extends string>({
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
	}: SelectProps<T>) => {
		const optionsList = useMemo(() => {
			if (!label) return Object.entries(options);

			return [['label', label], ...Object.entries(options)];
		}, [label, options]);

		return (
			<div
				className={classNames(
					cls.selectWrapper,
					{
						[cls.textInvert]: textInvert,
						[cls.withLabel]: placeholder,
					},
					[className, cls[theme]],
				)}
			>
				{placeholder && <span className={classNames(cls.label)}>{placeholder}</span>}
				<Listbox value={selected} defaultValue={label} onChange={onChange} disabled={disabled}>
					{({ open }) => (
						<>
							<Listbox.Button as="div" className={cls.trigger}>
								<Button aria-label="Open select options" hover={false} theme={ButtonTheme.PRIMARY} inverted={theme === SelectTheme.INVERT}>
									<HStack w100 justify="between">
										{selected ? options[selected] : label}
										<div className={classNames(cls.arrow, { [cls.open]: open })}>{'<'}</div>
									</HStack>
								</Button>
							</Listbox.Button>
							<Listbox.Options className={classNames(cls.options, {}, [cls[popupPosition]])}>
								{optionsList.map(([key, value]) => (
									<Listbox.Option key={key} value={key} disabled={key === 'label'}>
										{({ active, selected, disabled }) => (
											<div
												className={classNames(cls.option, {
													[cls.selected]: selected,
													[cls.disabled]: disabled,
												})}
											>
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
	},
);
