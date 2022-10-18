import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
			<div className={className}>
				<h1>{t('Profile page')}</h1>
				<ProfileCard />
			</div>
		</DynamicModuleLoader>
	);
});

export default ProfilePage;
