import { Select, SelectTheme } from 'shared/ui/Select';
import { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
	className?: string
	readonly?: boolean
	onChangeCurrency?: (e: ChangeEvent<HTMLSelectElement>) => void
	selected?: string
}

const currencyOptions = Object.values(Currency).map((el) => el);

export const CurrencySelect = ({
	className, onChangeCurrency, selected, readonly,
}: CurrencySelectProps) => {
	const { t } = useTranslation('profile');

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