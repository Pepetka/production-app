import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { ButtonTheme } from 'shared/ui/Button/ui/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getProfileReadOnly, profileActions, updateProfileData } from 'features/EditableProfileCard';
import { useSelector } from 'react-redux';
import { memo, useCallback, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getAuthData } from 'entities/User';
import cls from './ProfilePageHeader.module.scss';

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
				? <Button onClick={onEdit} theme={ButtonTheme.OUTLINE}>{t('Edit')}</Button>
				: (
					<div className={cls.btnGroup}>
						<Button onClick={onSave} theme={ButtonTheme.OUTLINE}>{t('Save')}</Button>
						<Button onClick={onCancelEdit} theme={ButtonTheme.OUTLINE_RED}>{t('Cancel')}</Button>
					</div>
				)
		);
	}

	return (
		<div className={classNames(cls.ProfilePageHeader, {}, [className])}>
			<h1>{t('Profile page')}</h1>
			{content}
		</div>
	);
});
