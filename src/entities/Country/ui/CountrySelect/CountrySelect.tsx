import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Select, SelectTheme } from '@/shared/ui/Popups/ui/Select';
import { Country } from '../../model/consts/country';

interface CountrySelectProps {
	className?: string;
	readonly?: boolean;
	onChangeCountry?: (value: Country) => void;
	selected?: Country;
	theme?: SelectTheme;
}

export const CountrySelect = ({ className, onChangeCountry, selected, readonly, theme }: CountrySelectProps) => {
	const { t } = useTranslation('profile');

	const countryOptions: Record<Country, string> = useMemo(
		() => ({
			[Country.BELARUS]: t('Belarus'),
			[Country.RUSSIA]: t('Russia'),
			[Country.UKRAINE]: t('Ukraine'),
		}),
		[t],
	);

	return (
		<Select
			disabled={readonly}
			placeholder={t('Country')}
			textInvert={readonly}
			onChange={onChangeCountry}
			className={className}
			theme={theme}
			options={countryOptions}
			selected={selected}
		/>
	);
};
