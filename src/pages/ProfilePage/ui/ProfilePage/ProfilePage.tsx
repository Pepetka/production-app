import { memo, useCallback, useMemo } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	fetchProfileData,
	getProfileError,
	getProfileFormData,
	getProfileLoading,
	getProfileReadOnly,
	getProfileValidationErrors,
	profileActions,
	profileReducer,
} from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { Text, TextTheme } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Page } from 'widgets/Page';
import { useAppEffect } from 'shared/lib/hooks/useAppEffect/useAppEffect';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfilePageHeader } from '../ProfilePageHeader/ProfilePageHeader';

const ProfilePage = memo(() => {
	const dispatch = useAppDispatch();
	const profile = useSelector(getProfileFormData);
	const loading = useSelector(getProfileLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadOnly);
	const validationErrors = useSelector(getProfileValidationErrors);
	const params = useParams<{id: string}>();
	const { t } = useTranslation('profile');

	const callback = useCallback(() => {
		dispatch(fetchProfileData(params.id!));
	}, [dispatch, params.id]);

	useAppEffect(callback);

	const {
		onChangeFirstname,
		onChangeAge,
		onChangeUsername,
		onChangeCountry,
		onChangeLastname,
		onChangeCurrency,
		onChangeCity,
		onChangeAvatar,
	} = useMemo(() => ({
		onChangeFirstname: (value: string) => {
			dispatch(profileActions.setProfileData({ first: value }));
		},
		onChangeLastname: (value: string) => {
			dispatch(profileActions.setProfileData({ lastname: value }));
		},
		onChangeAge: (value: string) => {
			dispatch(profileActions.setProfileData({ age: value.match(/\d+/g)?.join('') }));
		},
		onChangeUsername: (value: string) => {
			dispatch(profileActions.setProfileData({ username: value }));
		},
		onChangeAvatar: (value: string) => {
			dispatch(profileActions.setProfileData({ avatar: value }));
		},
		onChangeCity: (value: string) => {
			dispatch(profileActions.setProfileData({ city: value }));
		},
		onChangeCountry: (value: Country) => {
			dispatch(profileActions.setProfileData({ country: value }));
		},
		onChangeCurrency: (value: Currency) => {
			dispatch(profileActions.setProfileData({ currency: value }));
		},
	}), [dispatch]);

	return (
		<Page>
			<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
				<ProfilePageHeader />
				{validationErrors?.map(
					(error) => <Text key={error} title={t(error)} theme={TextTheme.ERROR} align="center" />,
				)}
				<ProfileCard
					data={profile}
					error={error}
					loading={loading}
					readonly={readonly}
					onChangeFirstname={onChangeFirstname}
					onChangeLastname={onChangeLastname}
					onChangeAge={onChangeAge}
					onChangeUsername={onChangeUsername}
					onChangeAvatar={onChangeAvatar}
					onChangeCity={onChangeCity}
					onChangeCountry={onChangeCountry}
					onChangeCurrency={onChangeCurrency}
				/>
			</DynamicModuleLoader>
		</Page>
	);
});

export default ProfilePage;
