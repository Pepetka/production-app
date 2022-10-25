import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input';
import { Spinner } from 'shared/ui/Spinner/ui/Spinner';
import { Profile } from 'features/EditableProfileCard';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { Button } from 'shared/ui/Button';
import { InputTheme } from 'shared/ui/Input/ui/Input';
import { ChangeEvent, memo, useMemo } from 'react';
import DefaultAvatar from 'shared/assets/imgs/default_avatar.jpeg';
import { Avatar, AvatarSize } from 'shared/ui/Avatar';
import { Select, SelectTheme } from 'shared/ui/Select';
import { CurrencySelect } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	loading: boolean
	error: string
	readonly?: boolean
	onChangeFirstname?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeLastname?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeAge?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeUsername?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeAvatar?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeCity?: (e: ChangeEvent<HTMLInputElement>) => void
	onChangeCountry?: (e: ChangeEvent<HTMLSelectElement>) => void
	onChangeCurrency?: (e: ChangeEvent<HTMLSelectElement>) => void
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
						avatar={DefaultAvatar}
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
