import { Select, SelectTheme } from 'shared/ui/Select';
import { ChangeEvent, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
	className?: string
	readonly?: boolean
	onChangeCountry?: (e: ChangeEvent<HTMLSelectElement>) => void
	selected?: string
}

export const CountrySelect = ({
	className, onChangeCountry, selected, readonly,
}: CountrySelectProps) => {
	const { t } = useTranslation('profile');
	const countryOptions = useMemo(() => Object.values(Country).map((el) => t(el)), [t]);

	return (
		<Select
			disabled={readonly}
			placeholder={t('Country')}
			textInvert={readonly}
			onChange={onChangeCountry}
			className={className}
			theme={readonly ? SelectTheme.INVERT : SelectTheme.PRIMARY}
			options={countryOptions}
			selected={selected}
		/>
	);
};
