import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from '@/features/EditableProfileCard';
import { Page } from '@/widgets/Page';
import { ProfileRating } from '@/features/ProfileRating';
import { getAuthData } from '@/entities/User';
import { AppLink } from '@/shared/ui/AppLink';
import { getUserArticlesPagePath } from '@/shared/const/router';
import { Text } from '@/shared/ui/Text';
import { VStack } from '@/shared/ui/Stack';

interface ProfilePageProps {
	storybookId?: string;
}

const ProfilePage = memo(({ storybookId }: ProfilePageProps) => {
	const params = useParams<{ id: string }>();
	const authData = useSelector(getAuthData);
	const { t } = useTranslation('profile');

	return (
		<Page data-testid="ProfilePage">
			<DynamicModuleLoader reducerKey="profile" reducer={profileReducer}>
				<EditableProfileCard />
			</DynamicModuleLoader>
			{authData?.id === (storybookId ?? params.id!) || (
				<VStack gap="16" w100>
					<AppLink to={getUserArticlesPagePath(params.id!)}>
						<Text title={t('All user articles')} TitleTag="p" align="center" />
					</AppLink>
					<ProfileRating profileId={storybookId ?? params.id!} />
				</VStack>
			)}
		</Page>
	);
});

export default ProfilePage;
