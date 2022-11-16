import { Select, SelectTheme } from 'shared/ui/Select';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
	className?: string
	readonly?: boolean
	onChangeCurrency?: (value: Currency) => void
	selected?: Currency
}

export const CurrencySelect = ({
	className, onChangeCurrency, selected, readonly,
}: CurrencySelectProps) => {
	const { t } = useTranslation('profile');

	const currencyOptions: Record<Currency, string> = useMemo(() => (
		{
			[Currency.EUR]: 'EUR',
			[Currency.RUB]: 'RUB',
			[Currency.USD]: 'USD',
		}
	), []);

	return (
		<Select
			disabled={readonly}
			placeholder={t('Currency')}
			textInvert={readonly}
			onChange={onChangeCurrency}
			className={className}
			theme={readonly ? SelectTheme.INVERT : SelectTheme.PRIMARY}
			options={currencyOptions}
			selected={selected}
		/>
	);
};
