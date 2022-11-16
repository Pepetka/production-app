import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input, InputTheme } from 'shared/ui/Input';
import { Spinner } from 'shared/ui/Spinner';
import { Profile } from 'features/EditableProfileCard';
import { Text, TextTheme } from 'shared/ui/Text';
import { Button } from 'shared/ui/Button';
import { memo } from 'react';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	loading: boolean
	error: string
	readonly?: boolean
	onChangeFirstname?: (value: string) => void
	onChangeLastname?: (value: string) => void
	onChangeAge?: (value: string) => void
	onChangeUsername?: (value: string) => void
	onChangeAvatar?: (value: string) => void
	onChangeCity?: (value: string) => void
	onChangeCountry?: (value: Country) => void
	onChangeCurrency?: (value: Currency) => void
}

export const ProfileCard = memo((
	{
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
	}: ProfileCardProps,
) => {
	const { t } = useTranslation('profile');

	const onReloadPage = () => {
		window.location.reload();
	};

	if (loading) {
		return (
			<div className={cls.template}>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div className={cls.template}>
				<Text align="center" title={t('Something went wrong')} theme={TextTheme.ERROR} />
				<Button onClick={onReloadPage}>{t('Reload Page')}</Button>
			</div>
		);
	}

	return (
		<div className={classNames(cls.ProfileCard, {}, [className])}>
			<div className={cls.column}>
				{data?.avatar ? (
					<Avatar
						size={AvatarSize.SIZE_L}
						avatar={data?.avatar}
						loading={loading}
					/>
				) : (
					<Avatar
						size={AvatarSize.SIZE_L}
						loading={loading}
					/>
				)}
			</div>
			<div className={cls.profileData}>
				<div className={cls.column}>
					<Input
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
						readonly={readonly}
						textInvert={readonly}
						theme={readonly ? InputTheme.INVERT : InputTheme.PRIMARY}
						onChange={onChangeAge}
						value={data?.age}
						floatPlaceholder={t('Age')}
					/>
				</div>
				<div className={cls.column}>
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
					<CountrySelect selected={data?.country} onChangeCountry={onChangeCountry} readonly={readonly} />
					<CurrencySelect selected={data?.currency} onChangeCurrency={onChangeCurrency} readonly={readonly} />
				</div>
			</div>
		</div>
	);
});
