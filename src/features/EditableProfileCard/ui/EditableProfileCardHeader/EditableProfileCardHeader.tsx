import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { memo, useCallback, useMemo } from 'react';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/Stack';
import { Text, TextSize } from '@/shared/ui/Text';
import { getProfileFormData } from '../../model/selectors/getProfileFormData/getProfileFormData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import { getProfileReadOnly } from '../../model/selectors/getProfileReadOnly/getProfileReadOnly';

interface ProfilePageHeaderProps {
	className?: string;
}

export const EditableProfileCardHeader = memo(
	({ className }: ProfilePageHeaderProps) => {
		const { t } = useTranslation('profile');
		const dispatch = useAppDispatch();
		const readOnly = useSelector(getProfileReadOnly);
		const userId = useSelector(getAuthData)?.id;
		const profile = useSelector(getProfileFormData);
		let content: JSX.Element | null = null;

		const { onEdit, onCancelEdit } = useMemo(
			() => ({
				onEdit: () => {
					dispatch(profileActions.changeReadOnly());
				},
				onCancelEdit: () => {
					dispatch(profileActions.cancelEdit());
				},
			}),
			[dispatch],
		);

		const onSave = useCallback(() => {
			dispatch(updateProfileData());
		}, [dispatch]);

		if (profile?.id === userId) {
			content = readOnly ? (
				<Button
					data-testid="EditableProfileCard.EditBtn"
					onClick={onEdit}
					theme={ButtonTheme.OUTLINE_PRIMARY}
				>
					{t('Edit')}
				</Button>
			) : (
				<HStack gap="16">
					<Button
						data-testid="EditableProfileCard.SaveBtn"
						onClick={onSave}
						theme={ButtonTheme.OUTLINE_PRIMARY}
					>
						{t('Save')}
					</Button>
					<Button
						data-testid="EditableProfileCard.CancelBtn"
						onClick={onCancelEdit}
						theme={ButtonTheme.OUTLINE_RED}
					>
						{t('Cancel')}
					</Button>
				</HStack>
			);
		}

		return (
			<HStack gap="16" align="start" justify="between" className={className}>
				<Text size={TextSize.L} title={t('Profile page')} TitleTag="h1" />
				{content}
			</HStack>
		);
	},
);
