import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadOnly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthData } from 'entities/User';
import { HStack } from 'shared/ui/Stack';
import { Text, TextSize } from 'shared/ui/Text';

interface ProfilePageHeaderProps {
	className?: string;
}

export const ProfilePageHeader = memo(({ className }: ProfilePageHeaderProps) => {
	const { t } = useTranslation('profile');
	const dispatch = useAppDispatch();
	const readOnly = useSelector(getProfileReadOnly);
	const userId = useSelector(getAuthData)?.id;
	const params = useParams<{id: string}>();
	let content: JSX.Element | null = null;

	const {
		onEdit,
		onCancelEdit,
	} = useMemo(() => ({
		onEdit: () => {
			dispatch(profileActions.changeReadOnly());
		},
		onCancelEdit: () => {
			dispatch(profileActions.cancelEdit());
		},
	}), [dispatch]);

	const onSave = useCallback(() => {
		dispatch(updateProfileData());
	}, [dispatch]);

	if (params.id === userId) {
		content = (
			readOnly
				? <Button onClick={onEdit} theme={ButtonTheme.OUTLINE_PRIMARY}>{t('Edit')}</Button>
				: (
					<HStack gap="16">
						<Button onClick={onSave} theme={ButtonTheme.OUTLINE_PRIMARY}>{t('Save')}</Button>
						<Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Cancel')}</Button>
					</HStack>
				)
		);
	}

	return (
		<HStack gap="16" align="start" justify="between" className={className}>
			<Text size={TextSize.L} title={t('Profile page')} TitleTag="h1" />
			{content}
		</HStack>
	);
});
