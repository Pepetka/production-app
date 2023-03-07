import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input, InputTheme } from '@/shared/ui/Input';
import { Spinner } from '@/shared/ui/Spinner';
import { Text, TextTheme } from '@/shared/ui/Text';
import { Button } from '@/shared/ui/Button';
import { Avatar, AvatarSize } from '@/shared/ui/Avatar';
import { Currency, CurrencySelect } from '@/entities/Currency';
import { Country, CountrySelect } from '@/entities/Country';
import { HStack, VStack } from '@/shared/ui/Stack';
import { SelectTheme } from '@/shared/ui/Popups/ui/Select';
import { Profile } from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	loading: boolean;
	error: string;
	readonly?: boolean;
	onChangeFirstname?: (value: string) => void;
	onChangeLastname?: (value: string) => void;
	onChangeAge?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeCity?: (value: string) => void;
	onChangeCountry?: (value: Country) => void;
	onChangeCurrency?: (value: Currency) => void;
	'data-testid'?: string;
}

export const ProfileCard = memo(
	({
		className,
		error,
		data,
		loading,
		readonly,
		onChangeFirstname,
		onChangeLastname,
		onChangeAge,
		onChangeUsername,
		onChangeAvatar,
		onChangeCity,
		onChangeCurrency,
		onChangeCountry,
		'data-testid': dataTestId,
	}: ProfileCardProps) => {
		const { t } = useTranslation('profile');

		const onReloadPage = () => {
			window.location.reload();
		};

		if (loading) {
			return (
				<HStack justify="center" className={cls.template}>
					<Spinner />
				</HStack>
			);
		}

		if (error) {
			return (
				<VStack gap="16" justify="center" className={cls.template}>
					<Text align="center" title={t('Something went wrong')} theme={TextTheme.ERROR} />
					<Button onClick={onReloadPage}>{t('Reload Page')}</Button>
				</VStack>
			);
		}

		return (
			<HStack wrap data-testid={dataTestId} align="start" className={classNames(cls.ProfileCard, {}, [className])}>
				<VStack gap="16" justify="start" className={cls.column}>
					<Avatar size={AvatarSize.SIZE_L} avatar={data?.avatar} />
				</VStack>
				<HStack wrap gap="32" align="start" className={cls.profileData}>
					<VStack gap="16" justify="start" className={cls.column}>
						<Input
							data-testid={`${dataTestId}.Username`}
							readonly={readonly}
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							onChange={onChangeUsername}
							value={data?.username}
							floatPlaceholder={t('Username')}
						/>
						<Input
							readonly={readonly}
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							onChange={onChangeFirstname}
							value={data?.first}
							floatPlaceholder={t('Firstname')}
						/>
						<Input
							readonly={readonly}
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							onChange={onChangeLastname}
							value={data?.lastname}
							floatPlaceholder={t('Lastname')}
						/>
						<Input
							data-testid={`${dataTestId}.Age`}
							readonly={readonly}
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							onChange={onChangeAge}
							value={data?.age}
							floatPlaceholder={t('Age')}
						/>
					</VStack>
					<VStack gap="16" justify="start" className={cls.column}>
						<Input
							readonly={readonly}
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							onChange={onChangeAvatar}
							value={data?.avatar}
							floatPlaceholder={t('Avatar')}
						/>
						<Input
							readonly
							textInvert={readonly}
							theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
							value={data?.city}
							onChange={onChangeCity}
							floatPlaceholder={t('City')}
						/>
						<CountrySelect
							selected={data?.country}
							onChangeCountry={onChangeCountry}
							readonly={readonly}
							theme={readonly ? SelectTheme.INVERT : SelectTheme.PRIMARY}
						/>
						<CurrencySelect
							selected={data?.currency}
							onChangeCurrency={onChangeCurrency}
							readonly={readonly}
							theme={readonly ? SelectTheme.INVERT : SelectTheme.PRIMARY}
						/>
					</VStack>
				</HStack>
			</HStack>
		);
	},
);
