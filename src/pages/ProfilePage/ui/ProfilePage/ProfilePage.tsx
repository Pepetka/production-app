import { memo } from 'react';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';

const ProfilePage = memo(() => (
	<Page>
		<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
			<EditableProfileCard />
		</DynamicModuleLoader>
	</Page>
));

export default ProfilePage;
