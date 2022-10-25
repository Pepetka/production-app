import { ChangeEvent, memo, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {
	fetchProfileData,
	getProfileError,
	getProfileLoading,
	getProfileReadOnly,
	getProfileFormData,
	profileActions,
	profileReducer,
} from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
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

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	const onChangeFirstname = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ first: event.target.value }));
	};

	const onChangeLastname = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ lastname: event.target.value }));
	};

	const onChangeAge = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ age: event.target.value.match(/\d+/g)?.join('') }));
	};

	const onChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ username: event.target.value }));
	};

	const onChangeAvatar = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ avatar: event.target.value }));
	};

	const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(profileActions.setProfileData({ city: event.target.value }));
	};

	const onChangeCountry = (event: ChangeEvent<HTMLSelectElement>) => {
		dispatch(profileActions.setProfileData({ country: event.target.value }));
	};

	const onChangeCurrency = (event: ChangeEvent<HTMLSelectElement>) => {
		dispatch(profileActions.setProfileData({ currency: event.target.value }));
	};

	return (
		<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
			<div className={className}>
				<ProfilePageHeader />
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
