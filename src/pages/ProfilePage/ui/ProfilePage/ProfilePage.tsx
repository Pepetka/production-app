import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { getAuthData } from '@/entities/User';

interface ProfilePageProps {
	storybookId?: string
}

const ProfilePage = memo(({ storybookId }: ProfilePageProps) => {
	const params = useParams<{id: string}>();
	const authData = useSelector(getAuthData);

	return (
		<Page>
			<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
				<EditableProfileCard />
			</DynamicModuleLoader>
			{authData?.id === params.id! || <ProfileRating profileId={storybookId ?? params.id!} />}
		</Page>
	);
});

export default ProfilePage;
