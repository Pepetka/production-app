import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectTheme } from '@/shared/ui/Popups/ui/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
	className?: string;
	readonly?: boolean;
	onChangeCurrency?: (value: Currency) => void;
	selected?: Currency;
	theme?: SelectTheme;
}

export const CurrencySelect = ({
	className,
	onChangeCurrency,
	selected,
	readonly,
	theme,
}: CurrencySelectProps) => {
	const { t } = useTranslation('profile');

	const currencyOptions: Record<Currency, string> = useMemo(
		() => ({
			[Currency.EUR]: 'EUR',
			[Currency.RUB]: 'RUB',
			[Currency.USD]: 'USD',
		}),
		[],
	);

	return (
		<Select
			disabled={readonly}
			placeholder={t('Currency')}
			textInvert={readonly}
			onChange={onChangeCurrency}
			className={className}
			theme={theme}
			options={currencyOptions}
			selected={selected}
		/>
	);
};
