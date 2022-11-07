import {
	ChangeEvent, memo, useEffect, useMemo,
} from 'react';
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
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ProfilePageHeader } from './ProfilePageHeader/ProfilePageHeader';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const dispatch = useAppDispatch();
	const profile = useSelector(getProfileFormData);
	const loading = useSelector(getProfileLoading);
	const error = useSelector(getProfileError);
	const readonly = useSelector(getProfileReadOnly);
	const validationErrors = useSelector(getProfileValidationErrors);
	const params = useParams<{id: string}>();
	const { t } = useTranslation('profile');

	useEffect(() => {
		if (__PROJECT__ !== 'storybook') dispatch(fetchProfileData(params.id!));
	}, [dispatch, params.id]);

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
		onChangeFirstname: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ first: event.target.value }));
		},
		onChangeLastname: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ lastname: event.target.value }));
		},
		onChangeAge: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ age: event.target.value.match(/\d+/g)?.join('') }));
		},
		onChangeUsername: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ username: event.target.value }));
		},
		onChangeAvatar: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ avatar: event.target.value }));
		},
		onChangeCity: (event: ChangeEvent<HTMLInputElement>) => {
			dispatch(profileActions.setProfileData({ city: event.target.value }));
		},
		onChangeCountry: (event: ChangeEvent<HTMLSelectElement>) => {
			dispatch(profileActions.setProfileData({ country: event.target.value }));
		},
		onChangeCurrency: (event: ChangeEvent<HTMLSelectElement>) => {
			dispatch(profileActions.setProfileData({ currency: event.target.value }));
		},
	}), [dispatch]);

	return (
		<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
			<div className={className}>
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
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
